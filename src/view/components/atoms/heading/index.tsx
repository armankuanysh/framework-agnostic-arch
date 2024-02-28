import React, { FC, memo } from 'react'
import './styles.scss'

type headingTypes = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

interface IHeading {
  type: headingTypes
  children: React.ReactNode
}

const Heading: FC<IHeading> = ({ type, children }) => {
  return React.createElement(type, { className: 'heading' }, children)
}

export default memo(Heading)
