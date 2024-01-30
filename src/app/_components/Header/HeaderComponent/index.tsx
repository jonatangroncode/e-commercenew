"use client";

import React from 'react'
import Link from 'next/link'

import { Header } from '../../../../payload/payload-types'
import { Gutter } from '../../Gutter'

import classes from './index.module.scss'
import Image from 'next/image'
import { HeaderNav } from '../Nav'
import MobileNav from '../MobileNav'

const HeaderComponent = ({ header }: { header: Header }) => {
  return (
    <nav >
      <Gutter className={classes.wrap}>
        <Link href={'/'}>
          <Image src="/test.svg" alt="logo" width={170} height={50}/>
          
        </Link>
        <HeaderNav header={header}/>
       
      </Gutter>
    </nav>
  )
}

export default HeaderComponent
