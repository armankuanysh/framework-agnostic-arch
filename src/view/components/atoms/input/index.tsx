import React, { FC, useState } from 'react'
import './styles.scss'

export interface IInput {
  id: string
  name: string
  label: string
  value: string
  type?: React.HTMLInputTypeAttribute
  onInput: React.FormEventHandler<HTMLInputElement>
}

const Input: FC<IInput> = ({
  id,
  name,
  label,
  value,
  type = 'text',
  onInput,
}) => {
  const [focused, setFocus] = useState(false)
  const [placeholder, setPlaceholder] = useState(label)
  const focus = () => {
    setFocus(true)
    setPlaceholder('')
  }
  const blur = () => {
    setFocus(false)
    setPlaceholder(label)
  }
  return (
    <>
      <label htmlFor={id} className="input">
        <span
          className={`input-label ${
            focused || value ? 'input-label--focused' : ''
          }`}
        >
          {label}
        </span>
        <input
          id={id}
          name={name}
          type={type}
          value={value}
          className="input-element"
          placeholder={placeholder}
          onFocus={focus}
          onBlur={blur}
          onInput={onInput}
        />
      </label>
    </>
  )
}

export default Input
