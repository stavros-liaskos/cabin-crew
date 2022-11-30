import Head from 'next/head';

import styles from '@/styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Cabin Crew Berlin</title>
        <meta
          name="description"
          content="Funk, Afro, Balkan Beats and more..."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Cabin Crew</h1>

        <p className={styles.description}>
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          <i>"Cabin crew, ready for take off..."</i>
        </p>

        <div className={styles.grid}>
          <a
            href="https://www.instagram.com/cabincrewberlin/"
            className={styles.card}
          >
            <h2>Instagram &rarr;</h2>
          </a>

          <a
            href="https://www.facebook.com/people/Cabin-Crew/100083543341845/"
            className={styles.card}
          >
            <h2>Facebook &rarr;</h2>
          </a>

          <a
            href="https://soundcloud.com/cabin-crew-341095083"
            className={styles.card}
          >
            <h2>Soundcloud &rarr;</h2>
          </a>

          <a href="https://t.me/cabincrewberlin" className={styles.card}>
            <h2>Telegram &rarr;</h2>
          </a>

          {/*
          <a
            href="https://vercel.com/new?utm_source=typescript-nextjs-starter"
            className={styles.card}
          >
            <h2>YouTube &rarr;</h2>
          </a>
*/}
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=typescript-nextjs-starter"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by Berlin Airlines
        </a>
      </footer>
    </div>
  );
}
