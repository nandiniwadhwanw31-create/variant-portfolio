const artist = 'are you satisfied (with an average life) ?'
const track = 'MARINA'

export function CdPlayerPanel() {
  return (
    <div className="cd-player-shell w-full max-w-full" role="region" aria-label="CD Player">
      <div className="cd-player-titlebar">
        <div className="cd-player-title-left">
          <span className="cd-player-icon" aria-hidden>
            💿
          </span>
          <span className="cd-player-title-text">CD Player</span>
        </div>
        <div className="cd-player-chrome" aria-hidden>
          <span className="cd-chrome-btn">_</span>
          <span className="cd-chrome-btn">□</span>
          <span className="cd-chrome-btn">×</span>
        </div>
      </div>

      <div className="cd-player-body">
        <div className="cd-album-art">
          <img src="/images/album-cover.jpg" alt="Album cover" loading="lazy" />
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

          <div className="cd-progress" aria-hidden>
            <div className="cd-progress-track">
              <div className="cd-progress-thumb" />
            </div>
          </div>

          <div className="cd-controls" aria-hidden>
            <button type="button" className="cd-control-btn" tabIndex={-1}>
              ⏮
            </button>
            <button type="button" className="cd-control-btn" tabIndex={-1}>
              ⏪
            </button>
            <button type="button" className="cd-control-btn cd-control-play" tabIndex={-1}>
              ▶
            </button>
            <button type="button" className="cd-control-btn" tabIndex={-1}>
              ■
            </button>
            <button type="button" className="cd-control-btn" tabIndex={-1}>
              ●
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
