import '../styles/globals.css'
import '../styles/navbar.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
    return <>
        <div className='navbar' id="topNavBar">
            <img src={"assets/Logo.svg"} alt={"Charles Goh (长康) Logo"} className="faviconlogo" style={{ paddingLeft: "2vh", paddingRight: "2vh"}}/>
            <a href="#home" className="navbaroption active navbaroptionselected">Home</a>
            <a href="#blog" className='navbaroption'>Blog</a>
        </div>
        <Component {...pageProps} />
    </>
}
