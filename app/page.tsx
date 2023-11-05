import { Metadata } from 'next'

import Background from '@components/Background'
import { getAllPosts } from '@utils/posts'

import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'chora blog | chora studio news and research',
}

async function getPosts() {
  const allPosts = getAllPosts()

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
    <div className={styles.container}>
      <Background />
      <div className={styles.sectionMain}>
        <div>
          <h1>
            {'chora '}
            <span style={{ opacity: '0.75' }}>{'blog'}</span>
          </h1>
          <p>
            <i>
              {'what is the role of technology in ecological regeneration?'}
            </i>
          </p>
          <p>{'chora studio news and research'}</p>
        </div>
      </div>
      <div className={styles.sectionText}>
        <p>{'Coming soon...'}</p>
        {/*<ul>*/}
        {/*  {posts?.map(({ id, date, title }) => (*/}
        {/*    <li key={id}>*/}
        {/*      {title}*/}
        {/*      <br />*/}
        {/*      {id}*/}
        {/*      <br />*/}
        {/*      {date}*/}
        {/*    </li>*/}
        {/*  ))}*/}
        {/*</ul>*/}
      </div>
    </div>
  )
}

export default HomePage
