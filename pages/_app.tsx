import '../styles/globals.css';
import '../styles/kangui.css';
import '../styles/kanganimations.css';
import '../styles/imports.css';
import type { AppProps } from 'next/app';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { routerPaths } from './../utils';
import FadeInSection from '../components/FadeInSection';
import { Analytics } from '@vercel/analytics/react';

export default function App({ Component, pageProps }: AppProps) {

    const router = useRouter();
    const routerPathName = router.pathname;

    return <div className='bgcontainer'>
        <div className='navbar' id="topNavBar">
            <img src={"/assets/Logo.svg"} alt={"Charles Goh (伍长康) Logo"} className="faviconlogo" style={{ paddingLeft: "2vh", paddingRight: "2vh" }} />
            {
                routerPaths.map(
                    routerPath => <Link 
                    key={`linkTo${routerPath.name}`}
                    className={`navbaroption ${
                        (routerPathName.startsWith(routerPath.path) && routerPath.path !== "/") 
                        || (routerPathName === routerPath.path && routerPathName === "/") ? `navbaroptionselected` : ""}`} 
                    href={`${routerPath.path}`}><i className={`${routerPath.iconClass}`} />&nbsp;&nbsp;{routerPath.name}</Link>)
            }
        </div>
        <div className="maincomponent">
            <Component {...pageProps} />
        </div>
        <footer style={{ display: 'flex', justifyContent: 'center', padding: '5vh' }}>
            <FadeInSection>
                <a href='https://www.linkedin.com/in/charlesgohck/' target="_blank" rel="noopener noreferrer">
                    <i style={{ color: '#0072b1' }} className="sectionsubelement linkelement fa-brands fa-linkedin fa-10x" />
                </a>
                <i style={{ color: 'darkred' }} className="sectionsubelement linkelement fa-solid fa-at fa-10x" />
            </FadeInSection>    
        </footer>
        <Analytics />
    </div>
}