import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>LOLGTC</title>
        <meta name="description" content="Left Out Lemons Gin & Tonic Club" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>

        <Image
          src="/images/header.png" // Route of the image file
          height={100} // Desired size with correct aspect ratio
          width={505} // Desired size with correct aspect ratio
          alt="LOLGTC"
        />

        <a className={styles.message}>
          Something is coming soon 🍋
        </a>

      </main>




      <footer className={styles.footer}>
        made with ❤️ by tm4s
      </footer>
    </div>
  )
}
