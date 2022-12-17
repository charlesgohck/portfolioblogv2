import Head from "next/head"
import Image from 'next/image'
import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    return (
        <>
            <Head>
                <title>Charles Goh (长康): Blog</title>
                <meta name="description" content="Charles Goh (长康) Blog" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/assets/favicon.jpg" />
            </Head>
            <main>
                Hello World
            </main>
        </>
    )
}
