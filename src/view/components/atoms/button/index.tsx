import React, { FC } from 'react'
import './styles.scss'

export interface IButton {
  children: React.ReactNode
  onClick: React.MouseEventHandler<HTMLButtonElement>
}

const Button: FC<IButton> = ({ children, onClick }) => {
  return (
    <button className="button" onClick={onClick}>
      {children}
    </button>
  )
}

export default Button
