import { Background } from 'chora/components'
import { Metadata } from 'next'
import Link from 'next/link'

import { getDocs } from '@utils'

import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'chora blog | research',
}

async function getPosts() {
  const allPosts = getDocs().filter((p) => p.tags.includes('research'))

  // sort posts by date
  return allPosts.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
}

const ResearchPage = async () => {
  const posts = await getPosts()

  return (
    <div className={styles.page}>
      <div className={styles.banner}>
        <div>
          <h1 style={{ opacity: '0.75' }}>{'research'}</h1>
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

export default ResearchPage
