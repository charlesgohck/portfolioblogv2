import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    return (
        <>
            <Head>
                <title>Charles Goh (长康)</title>
                <meta name="description" content="Charles Goh (长康) Site" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/assets/favicon.jpg" />
            </Head>
            <main>
                <section className='sectionelement'>
                    <Image src={'/assets/CharlesInSuitSquare.jpg'} alt={'Charles Goh (长康) In A Suit'} width={300} height={300} className="sectionsubelement" style={{ borderRadius: "50%" }} />
                    <div className='sectionsubelement'>
                        <h1>Hello. I am Charles Goh (长康).</h1>
                        <br/>
                        <p>I am an&nbsp;
                            <span className="elementfadeinleft"><strong>engineer, </strong></span>
                            <span className="elementfadeinleft" style={{ animationDuration: "9s" }}><strong>problem solver, </strong></span>
                            <span className="elementfadeinleft" style={{ animationDuration: "15s" }}><strong>and lifelong learner. </strong></span>
                        </p>
                    </div>
                </section>
            </main>
        </>
    )
}
