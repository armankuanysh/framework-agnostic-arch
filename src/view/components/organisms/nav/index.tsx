import React, { FC, memo } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './styles.scss'

export interface ILink {
  to: string
  title: string
}

export interface INav {
  links: ILink[]
}

const Nav: FC<INav> = ({ links }) => {
  const { pathname } = useLocation()

  return (
    <nav className="nav">
      <ul>
        {links.map((link) => (
          <li key={link.to}>
            <Link
              to={link.to}
              className={`${link.to === pathname && 'is-active'}`}
            >
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default memo(Nav)
