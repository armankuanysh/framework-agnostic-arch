import React, { FC, memo } from 'react'
import Nav, { ILink } from 'components/organisms/nav'
import './styles.scss'

export const links: ILink[] = [
  {
    to: '/',
    title: 'Home',
  },
  {
    to: '/products',
    title: 'Products',
  },
]

const Header: FC = () => {
  return (
    <header className="header">
      <Nav links={links} />
    </header>
  )
}

export default memo(Header)
