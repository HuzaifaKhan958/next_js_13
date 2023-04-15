import { Inter } from 'next/font/google'
import styles from './page.module.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function post() {
  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <h1>Hello posts</h1>
      </div>
      <Link href="/">
        Back to Home
      </Link>
    </main>
  )
}