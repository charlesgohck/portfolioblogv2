import '../styles/globals.css';
import '../styles/kangui.css';
import '../styles/kanganimations.css';
import '../styles/imports.css';
import type { AppProps } from 'next/app';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { routerPaths } from './constants';

export default function App({ Component, pageProps }: AppProps) {

    const router = useRouter();
    const routerPathName = router.pathname;

    return <>
        <div className='navbar' id="topNavBar">
            <img src={"/assets/Logo.svg"} alt={"Charles Goh (长康) Logo"} className="faviconlogo" style={{ paddingLeft: "2vh", paddingRight: "2vh" }} />
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
    </>
}
