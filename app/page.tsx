import { Metadata } from 'next'
import Link from 'next/link'

import { getDocs } from '@utils'

import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'chora blog | chora studio news and research',
}

async function getPosts() {
  const allPosts = getDocs()

  // sort posts by date
  return allPosts.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
}

const HomePage = async () => {
  const posts = await getPosts()

  return (
    <div className={styles.page}>
      <div className={styles.banner}>
        <div>
          <h1>
            {'chora '}
            <span style={{ opacity: '0.75' }}>{'blog'}</span>
          </h1>
          <p>
            <i>{'commons governance and ecological regeneration'}</i>
          </p>
          <p>{'chora studio news and research'}</p>
        </div>
      </div>
      <div className={styles.content}>
        {!posts.length ? (
          <p>{'coming soon...'}</p>
        ) : (
          <ul>
            {posts.map(({ id, date, title, author }) => (
              <li key={id}>
                <Link href={`/${id}`}>
                  <h4>{date}</h4>
                  <h2>{title}</h2>
                  <h3>{`by ${author}`}</h3>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

export default HomePage
