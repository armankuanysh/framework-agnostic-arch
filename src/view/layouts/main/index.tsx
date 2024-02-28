import React, { FC, memo, useMemo } from 'react'
import { useLocation } from 'react-router-dom'
import './styles.scss'
import Header, { links } from 'components/templates/header'
import Heading from 'components/atoms/heading'

interface IMainLayout {
  children: React.ReactNode
}

const MainLayout: FC<IMainLayout> = ({ children }) => {
  const { pathname } = useLocation()
  const title = useMemo(() => {
    return links.filter((link) => link.to === pathname)[0].title
  }, [pathname])
  return (
    <>
      <Header />
      <main className="main">
        <aside className="aside">
          <Heading type="h1">{`${title} page`}</Heading>
        </aside>
        {children}
      </main>
    </>
  )
}

export default memo(MainLayout)
