import React from 'react'

import { fetchHeader } from '../../_api/fetchGlobals'
import HeaderComponent from './HeaderComponent'
import MobileNav from './HeaderComponent/MobileNav'

export async function Header() {
  let header = null

  try {
    header = await fetchHeader()
  } catch (error) {
    console.error(error)
  }

  return (
    <>
      <HeaderComponent header={header} />
    </>
  )
}

export default Header
