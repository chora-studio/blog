import { Background } from 'chora/components'
import { Metadata } from 'next'

import { getAllDocs } from '@utils'

import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'chora blog | news',
}

export const generateStaticParams = () => {
  return getAllDocs()
}

async function getPosts() {
  return getAllDocs()
}

const PostsPage = async ({ params }) => {
  const posts = await getPosts()
  const post = posts.find(post => post.id === params.id)

  return (
    <div className={styles.container}>
      <Background />
      <div className={styles.banner}>
        <div>
          <h2>{post.date}</h2>
          <h1>{post.title}</h1>
          <h3>{`${post.author}`}</h3>
        </div>
      </div>
      <div className={styles.content}>
        {post.content}
      </div>
    </div>
  )
}

export default PostsPage
