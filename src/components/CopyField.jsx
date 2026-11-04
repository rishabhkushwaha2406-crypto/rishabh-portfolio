import { useState } from 'react'
import { copyText, toast } from '../lib'

export default function CopyField({ text }) {
  const [label, setLabel] = useState('Copy')

  return (
    <div className="copy">
      <span>{text}</span>
      <button
        type="button"
        data-copy={text}
        onClick={async () => {
          try {
            await navigator.clipboard.writeText(text)
            setLabel('Copied')
            setTimeout(() => setLabel('Copy'), 1500)
          } catch {
            toast('Could not copy. Select and press Ctrl+C')
            copyText(text)
          }
        }}
      >
        {label}
      </button>
    </div>
  )
}
