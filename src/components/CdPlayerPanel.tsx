import { useCallback, useEffect, useRef, useState } from 'react'
import { site } from '../data/site'

function isSrcUnavailable(audio: HTMLAudioElement) {
  const code = audio.error?.code
  return (
    code === MediaError.MEDIA_ERR_SRC_NOT_SUPPORTED ||
    code === MediaError.MEDIA_ERR_NETWORK ||
    code === MediaError.MEDIA_ERR_DECODE
  )
}

export function CdPlayerPanel() {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [playing, setPlaying] = useState(false)
  const [progress, setProgress] = useState(0)
  const [fileUnavailable, setFileUnavailable] = useState(false)
  const [playBlocked, setPlayBlocked] = useState(false)

  const { audioSrc, artist, track } = site.cdPlayer

  useEffect(() => {
    let cancelled = false
    fetch(audioSrc, { method: 'HEAD' })
      .then((res) => {
        if (!cancelled && !res.ok) setFileUnavailable(true)
      })
      .catch(() => {
        if (!cancelled) setFileUnavailable(true)
      })
    return () => {
      cancelled = true
    }
  }, [audioSrc])

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    const onTimeUpdate = () => {
      if (Number.isFinite(audio.duration) && audio.duration > 0) {
        setProgress(audio.currentTime / audio.duration)
      }
    }
    const onPlay = () => {
      setPlaying(true)
      setPlayBlocked(false)
      setFileUnavailable(false)
    }
    const onPause = () => setPlaying(false)
    const onLoadedData = () => setFileUnavailable(false)
    const onEnded = () => {
      setPlaying(false)
      setProgress(0)
    }
    const onError = () => {
      setPlaying(false)
      if (isSrcUnavailable(audio)) setFileUnavailable(true)
    }

    audio.addEventListener('timeupdate', onTimeUpdate)
    audio.addEventListener('play', onPlay)
    audio.addEventListener('pause', onPause)
    audio.addEventListener('loadeddata', onLoadedData)
    audio.addEventListener('ended', onEnded)
    audio.addEventListener('error', onError)

    return () => {
      audio.removeEventListener('timeupdate', onTimeUpdate)
      audio.removeEventListener('play', onPlay)
      audio.removeEventListener('pause', onPause)
      audio.removeEventListener('loadeddata', onLoadedData)
      audio.removeEventListener('ended', onEnded)
      audio.removeEventListener('error', onError)
    }
  }, [])

  const togglePlay = useCallback(async () => {
    const audio = audioRef.current
    if (!audio) return

    if (playing) {
      audio.pause()
      return
    }

    setPlayBlocked(false)

    if (audio.error) {
      audio.load()
    }

    try {
      await audio.play()
    } catch {
      if (isSrcUnavailable(audio)) {
        setFileUnavailable(true)
      } else {
        setPlayBlocked(true)
      }
    }
  }, [playing])

  const stopPlayback = useCallback(() => {
    const audio = audioRef.current
    if (!audio) return
    audio.pause()
    audio.currentTime = 0
    setProgress(0)
  }, [])

  const skipBack = useCallback(() => {
    const audio = audioRef.current
    if (!audio) return
    audio.currentTime = Math.max(0, audio.currentTime - 10)
  }, [])

  const thumbLeft = `${Math.min(100, Math.max(0, progress * 100))}%`

  return (
    <div className="cd-player-shell" role="region" aria-label="CD Player">
      <audio ref={audioRef} src={audioSrc} preload="auto" playsInline />

      <div className="cd-player-titlebar">
        <div className="cd-player-title-left">
          <span className="cd-player-icon" aria-hidden>
            💿
          </span>
          <span className="cd-player-title-text">CD Player</span>
          {playing && (
            <span className="cd-now-playing mono" aria-live="polite">
              ▶ PLAYING
            </span>
          )}
        </div>
        <div className="cd-player-chrome" aria-hidden>
          <span className="cd-chrome-btn">_</span>
          <span className="cd-chrome-btn">□</span>
          <span className="cd-chrome-btn">×</span>
        </div>
      </div>

      <div className="cd-player-body">
        <div className={`cd-album-art ${playing ? 'cd-album-art--playing' : ''}`}>
          <div className="cd-album-art__clip">
            <img src="/images/album-cover.jpg" alt="Album cover" loading="lazy" />
          </div>
        </div>

        <div className="cd-player-fields">
          <div className="cd-field-row">
            <label className="cd-label" htmlFor="cd-artist">
              Artist:
            </label>
            <div className="cd-input-wrap">
              <input id="cd-artist" className="cd-input" readOnly value={artist} />
            </div>
          </div>

          <div className="cd-field-row">
            <label className="cd-label" htmlFor="cd-track">
              Track:
            </label>
            <div className="cd-input-wrap">
              <input id="cd-track" className="cd-input" readOnly value={track} />
            </div>
          </div>

          <div className="cd-progress">
            <div
              className="cd-progress-track"
              role="progressbar"
              aria-valuenow={Math.round(progress * 100)}
              aria-valuemin={0}
              aria-valuemax={100}
            >
              <div className="cd-progress-fill" style={{ width: `${progress * 100}%` }} />
              <div className="cd-progress-thumb" style={{ left: thumbLeft }} />
            </div>
          </div>

          <div className="cd-controls">
            <button type="button" className="cd-control-btn" onClick={skipBack} aria-label="Rewind 10 seconds">
              ⏪
            </button>
            <button
              type="button"
              className={`cd-control-btn cd-control-play ${playing ? 'cd-control-play--active' : ''}`}
              onClick={() => void togglePlay()}
              aria-label={playing ? 'Pause' : 'Play'}
            >
              {playing ? '❚❚' : '▶'}
            </button>
            <button type="button" className="cd-control-btn" onClick={stopPlayback} aria-label="Stop">
              ■
            </button>
          </div>

          {fileUnavailable && (
            <p className="cd-audio-hint mono">
              Audio file not found on this server. Add{' '}
              <strong>marina-are-you-satisfied.mp3</strong> to <code className="text-[9px]">public/audio/</code>, then
              commit and redeploy.
            </p>
          )}
          {playBlocked && !fileUnavailable && (
            <p className="cd-audio-hint mono">Tap ▶ again if playback did not start.</p>
          )}
        </div>
      </div>
    </div>
  )
}
