import { Background } from 'chora/components'
import { Metadata } from 'next'
import Link from 'next/link'

import { getAllDocs } from '@utils'

import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'chora blog | news',
}

async function getPosts() {
  const allPosts = getAllDocs().filter((p) => p.tags.includes('news'))

  // sort posts by date
  return allPosts.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
}

const NewsPage = async () => {
  const posts = await getPosts()

  return (
    <div className={styles.container}>
      <Background />
      <div className={styles.banner}>
        <div>
          <h1 style={{ opacity: '0.75' }}>{'news'}</h1>
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
                  <p>{title}</p>
                  <p>{date}</p>
                  <p>{author}</p>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

export default NewsPage
