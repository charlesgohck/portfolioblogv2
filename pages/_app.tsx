import '../styles/globals.css'
import '../styles/kangui.css'
import '../styles/kanganimations.css'
import '../styles/imports.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
    return <>
        <div className='navbar' id="topNavBar">
            <img src={"assets/Logo.svg"} alt={"Charles Goh (长康) Logo"} className="faviconlogo" style={{ paddingLeft: "2vh", paddingRight: "2vh"}}/>
            <a href="#home" className="navbaroption active navbaroptionselected"><i className='fa solid fa-house-chimney' />&nbsp;&nbsp;Home</a>
            <a href="#blog" className='navbaroption'><i className="fa-solid fa-book" />&nbsp;&nbsp;Blog</a>
        </div>
        <div className="maincomponent">
            <Component {...pageProps} />
        </div>
    </>
}
