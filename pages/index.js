
import { Inter } from 'next/font/google'
import Head from 'next/head'

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
            <h2 className='text-3xl'> Next Crud Home Page</h2>
        </div>
    </>
  )
}
