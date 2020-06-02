import React, { useMemo } from 'react'

const Button = ({ text, action, type, disabled, loading }) => {
  const containerClasses = useMemo(() => [
    'button-component',
    type,
    disabled && 'disabled',
    loading && 'loading',
  ].filter(c => c).join(' '), [type, disabled, loading])

  return (
    <button className={containerClasses} onClick={action}>
      { text &&
        <p className="text">{text}</p>
      }
    </button>
  )
}

export default Button
