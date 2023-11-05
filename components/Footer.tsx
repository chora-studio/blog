'use client'

import { ThemeContext } from '@contexts/ThemeContext'
import choraLogoDark from '../public/images/chora_dark_small.png'
import choraLogoLight from '../public/images/chora_light_small.png'
import Image from 'next/image'
import Link from 'next/link'
import { useContext } from 'react'

import styles from './Footer.module.css'

const Footer = () => {
  const { darkTheme } = useContext(ThemeContext)

  return (
    <div className={styles.footer}>
      <div style={{ display: 'none' }}>{darkTheme.toString()}</div>
      <div>
        <div className={styles.title}>
          <Image alt="chora" src={darkTheme ? choraLogoDark : choraLogoLight} />
          <h4>{'© 2023 Chora Studio, LLC'}</h4>
        </div>
        <div className={styles.list}>
          <h3>{'chora studio'}</h3>
          <ul>
            <li>
              <Link href="https://chora.studio/products" target="_blank">
                {'products ↗'}
              </Link>
            </li>
            <li>
              <Link href="https://chora.studio/solutions" target="_blank">
                {'solutions ↗'}
              </Link>
            </li>
            <li>
              <Link href="https://chora.studio/validator" target="_blank">
                {'validator ↗'}
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles.list}>
          <h3>{'chora protocol'}</h3>
          <ul>
            <li>
              <Link href="https://chora.io" target="_blank">
                {'chora applications ↗'}
              </Link>
            </li>
            <li>
              <Link href="https://docs.chora.io" target="_blank">
                {'chora documentation ↗'}
              </Link>
            </li>
            <li>
              <Link href="https://github.com/choraio" target="_blank">
                {'chora repositories ↗'}
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles.list}>
          <h3>{'chora validator'}</h3>
          <ul>
            <li>
              <Link
                href="https://www.mintscan.io/regen/validators/regenvaloper1t8p3zdu3h8qzggfmvvvmtdnaj4trcsfh79xp4e"
                target="_blank"
              >
                {'regen ↗'}
              </Link>
            </li>
            <li>
              <Link
                href="https://chora.io/scan/regen-redwood-1"
                target="_blank"
              >
                {'regen-redwood ↗'}
              </Link>
            </li>
            <li>
              <Link
                href="https://chora.io/scan/chora-testnet-1"
                target="_blank"
              >
                {'chora-testnet ↗'}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer
