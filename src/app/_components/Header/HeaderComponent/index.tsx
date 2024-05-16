'use client'
// HeaderComponent.tsx
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import menuIcon from '../../../../../public/assets/icons/menu.svg'
import { Header } from '../../../../payload/payload-types'
import { noHeaderFooterUrls } from '../../../constants'
import { Gutter } from '../../Gutter'
import { HeaderNav } from '../Nav'
import MobileNav from './MobileNav'

import classes from './index.module.scss'

const HeaderComponent = ({ header }: { header: Header }) => {
  const pathname = usePathname()
  const [isMobileNavOpen, setMobileNavOpen] = useState(false)

  const toggleMobileNav = () => {
    setMobileNavOpen(!isMobileNavOpen)
  }

  return (
    <nav
      className={[classes.header, noHeaderFooterUrls.includes(pathname) && classes.hide]
        .filter(Boolean)
        .join(' ')}
    >
      <Gutter className={classes.wrap}>
        <Link href={'/'}>
          <Image src="/swdlogo.png" alt="logo" width={170} height={50} />
        </Link>
        <HeaderNav header={header} />
        <div className={classes.menuIcon} onClick={toggleMobileNav}>
          <Image src={menuIcon} alt="Menu" />
        </div>
        <MobileNav isOpen={isMobileNavOpen} onClose={toggleMobileNav} navItems={[]} />
      </Gutter>
    </nav>
  )
}

export default HeaderComponent
