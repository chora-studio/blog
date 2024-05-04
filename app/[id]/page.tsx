import { Metadata } from 'next'

import { getDoc, getDocs } from '@utils'

import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'chora blog | news',
}

export const generateStaticParams = () => {
  return getDocs()
}

const PostPage = async ({ params }: any) => {
  const post = await getDoc(params.id)

  return (
    <div className={styles.page}>
      <div className={styles.banner}>
        <div>
          <h3>{post.date}</h3>
          <h1>{post.title}</h1>
          <h2>{`by ${post.author}`}</h2>
        </div>
      </div>
      <div className={styles.content}>
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </div>
    </div>
  )
}

export default PostPage
