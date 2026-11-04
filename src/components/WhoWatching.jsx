import { PROFILES } from '../data'
import { photo } from '../lib'

function Avatar({ profile }) {
  return (
    <span className={`avatar ${profile.cls}`}>
      {profile.photo ? (
        <img src={photo('avatar')} alt="" />
      ) : (
        profile.glyph || profile.letter
      )}
      {profile.tag ? <span className="av-tag">{profile.tag}</span> : null}
    </span>
  )
}

export default function WhoWatching({ onSelect }) {
  return (
    <div className="overlay" id="who" role="dialog" aria-label="Choose a profile">
      <h2>Who&apos;s watching?</h2>
      <div className="profiles">
        {Object.entries(PROFILES).map(([key, profile], i) => (
          <button
            key={key}
            className="profile"
            type="button"
            autoFocus={i === 0}
            onClick={(e) => onSelect(key, e.currentTarget)}
          >
            <Avatar profile={profile} />
            <b>{profile.label}</b>
            <em>{profile.note}</em>
          </button>
        ))}
      </div>
      <p className="who-note">
        Every profile watches the same true story. Your choice only changes what plays first.
      </p>
    </div>
  )
}

export function MiniAvatar({ profileKey }) {
  const profile = PROFILES[profileKey]
  if (!profile) return null
  return (
    <span className={`mini ${profile.cls}`}>
      {profile.photo ? <img src={photo('avatar')} alt="" /> : profile.glyph || profile.letter}
    </span>
  )
}
