import React, { useState, useCallback, useEffect } from 'react'

const TextField = ({ value, type, placeholder, error, styleType, onChange }) => {
  const [withError, setWithError] = useState(error)

  const handleChange = useCallback((value) => {
    setWithError(false)
    onChange(value)
  })

  useEffect(() => {
    setWithError(error)
  }, [error])

  const className = [
    'text-field-component',
    styleType,
    withError && 'error'
  ].filter((c) => c).join(' ')

  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
      className={className} />
  )
}

export default TextField
