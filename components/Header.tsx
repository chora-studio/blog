'use client'

import { ThemeContext } from 'chora/contexts'
import ThemeButton from 'chora/components/ThemeButton'
import choraLogoDark from 'chora/assets/images/chora_dark_small.png'
import choraLogoLight from 'chora/assets/images/chora_light_small.png'
import Image from 'next/image'
import Link from 'next/link'
import { useContext } from 'react'

import styles from './Header.module.css'

const Header = () => {
  const { darkTheme, setDarkTheme } = useContext(ThemeContext)

  const toggleTheme = () => {
    if (darkTheme) {
      setDarkTheme(false)
    } else {
      setDarkTheme(true)
    }
  }

  return (
    <div className={styles.header}>
      <div style={{ display: 'none' }}>{darkTheme.toString()}</div>
      <div>
        <div className={styles.title}>
          <Link href="/">
            <Image
              alt="chora blog"
              src={darkTheme ? choraLogoDark : choraLogoLight}
            />
            <div>
              {'chora '}
              <span style={{ opacity: '0.75' }}>{'blog'}</span>
            </div>
          </Link>
        </div>
        <div className={styles.menu}>
          <ul>
            <li>
              <Link href="/news">{'news'}</Link>
            </li>
            <li>
              <Link href="/research">{'research'}</Link>
            </li>
          </ul>
          <ThemeButton darkTheme={darkTheme} toggleTheme={toggleTheme} />
        </div>
      </div>
    </div>
  )
}

export default Header
