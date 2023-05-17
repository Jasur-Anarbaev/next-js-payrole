import Head from 'next/head'

import { Inter } from '@next/font/google'


import HomePage from './HomePage'
// import Pricing from './PricingPage'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500;600;700;800;900&family=Poppins:wght@200;300;400;500;600&display=swap" rel="stylesheet"></link>
      </Head>
      <main>
        <HomePage />
      </main>
    
        
    </>
  )
}
