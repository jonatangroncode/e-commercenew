import React from 'react'
import Link from 'next/link' // Importera Link från Next.js

import classes from './index.module.scss'

interface NavItem {
  title?: string
  link: { url: string }
}

interface Props {
  isOpen: boolean
  onClose: () => void
  navItems: NavItem[]
}

const MobileNav: React.FC<Props> = ({ isOpen, onClose, navItems }) => {
  const handleClick = () => {
    onClose()
  }

  return (
    <div className={[classes.mobileNav, isOpen ? classes.open : ''].join(' ')}>
      <button className={classes.closeButton} onClick={onClose}>
        Close
      </button>
      <ul className={classes.navItems}>
        {navItems.map((navItem, index) => (
          <li key={index}>
            {/* Använd Link från Next.js för att rendera länken */}
            <Link href={navItem.link.url}>
              <a onClick={handleClick}>{navItem.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default MobileNav
