import '../styles/globals.css'
import '../styles/navbar.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
    return <>
        <div className='navbar' id="topNavBar">
            <a href="#home" className="navbaroption active navbaroptionselected">Home</a>
            <a href="#blog" className='navbaroption'>Blog</a>
            <a href="#about" className='navbaroption'>About</a>
        </div>
        <Component {...pageProps} />
    </>
}
