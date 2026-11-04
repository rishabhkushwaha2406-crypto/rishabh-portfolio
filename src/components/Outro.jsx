import { DATA } from '../data'
import { IconDownload, IconGitHub, IconLinkedIn, IconMail } from '../icons'
import CopyField from './CopyField'

export default function Outro() {
  return (
    <section className="outro wrap" id="contact">
      <div className="next rv" data-rv>
        NEXT SEASON
      </div>
      <h2 id="tbc" data-rv-title>
        <span>To be continued…</span>
      </h2>
      <div className="who rv" data-rv>
        RISHABH KUSHWAHA
      </div>
      <p className="rv" data-rv>
        Looking for the next chapter in KYC, AML, fraud and risk operations. If your team needs someone careful
        with customer data and comfortable with Python and SQL, let&apos;s talk.
      </p>
      <div className="acts rv" data-rv>
        <a
          className="btn btn-red"
          href={`mailto:${DATA.email}?subject=${encodeURIComponent('Opportunity for Rishabh')}`}
        >
          <IconMail />
          Email me
        </a>
        <a className="btn btn-ghost" href={DATA.linkedin} target="_blank" rel="noopener">
          <IconLinkedIn />
          LinkedIn
        </a>
        <a className="btn btn-ghost" href={DATA.github} target="_blank" rel="noopener">
          <IconGitHub />
          GitHub
        </a>
        <a className="btn btn-light" href={DATA.resumePdf} target="_blank" rel="noopener">
          <IconDownload />
          Resume PDF
        </a>
      </div>
      <div className="contact-grid rv" data-rv>
        <div>
          <small>Email</small>
          <CopyField text={DATA.email} />
        </div>
        <div>
          <small>Phone</small>
          <CopyField text={DATA.phone} />
        </div>
      </div>
    </section>
  )
}
