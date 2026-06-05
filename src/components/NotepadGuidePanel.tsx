const GUIDE_TEXT =
  "After hearing the song by clicking on the play button and reading ghost protocols, user can navigate to background archive to know about host's motivations and background and research archive section for host's projects. Remember to click on the preview button on the sticky notes to see the images and certificates!"

export function NotepadGuidePanel() {
  return (
    <div className="notepad-guide-shell" role="region" aria-label="Site navigation guide">
      <img src="/images/notepad-guide-frame.png" alt="" className="notepad-guide-frame" aria-hidden />

      <div className="notepad-guide-viewport">
        <p className="notepad-guide-text">{GUIDE_TEXT}</p>
      </div>
    </div>
  )
}
