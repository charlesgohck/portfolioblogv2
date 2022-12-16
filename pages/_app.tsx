import '../styles/globals.css'
import '../styles/navbar.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
    return <>
        <div className='navbar' id="topNavBar">
            <a href="#home" className="navbaroption active navbaroptionselected">
                <img src={"assets/Logo.svg"} alt={"Charles Goh (长康) Logo"} className="faviconlogo"/>
            </a>
            <a href="#blog" className='navbaroption'>Blog</a>
        </div>
        <Component {...pageProps} />
    </>
}
