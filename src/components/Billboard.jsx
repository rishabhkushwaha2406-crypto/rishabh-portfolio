import { DATA } from '../data'
import { photo } from '../lib'
import { IconDownload } from '../icons'

export default function Billboard({ parallax, onGoTo }) {
  return (
    <div className="billboard wrap" id="top" style={{ '--p': parallax }}>
      <div className="bb-photo" aria-hidden="true">
        <img src={photo('hero')} alt="" />
      </div>
      <div className="bb-copy">
        <div className="series-tag">
          <b>R</b> SERIES
        </div>
        <h2 className="bb-name">
          <span className="r">R</span>ISHABH
        </h2>
        <div className="bb-the">THE SERIES</div>
        <div className="meta">
          <span className="match">97.2% F1</span>
          <span>2022 – Now</span>
          <span className="chip">B.TECH CSE</span>
          <span className="dot" />
          <span>2 Originals</span>
          <span className="dot" />
          <span>4 Awards &amp; Certificates</span>
        </div>
        <div className="bb-role">VKYC Associate · Navi Finserv · KYC / AML · ML</div>
        <p className="bb-syn">{DATA.synopsis}</p>
        <div className="bb-actions">
          <button className="btn btn-light" type="button" onClick={() => onGoTo('story')}>
            <span className="tri" />
            Watch the story
          </button>
          <a className="btn btn-ghost" href={DATA.resumePdf} target="_blank" rel="noopener">
            <IconDownload />
            Download resume
          </a>
        </div>
      </div>
    </div>
  )
}
