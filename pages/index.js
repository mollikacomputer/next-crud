
import { Inter } from 'next/font/google'
import Head from 'next/head'
import HomePageDetails from './HomePageDetails'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <div>
            <Head>
                <title> Home page Title </title>
                <meta name='description' content='Home page meta content here'  />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <HomePageDetails/>
        </div>
    </>
  )
}
