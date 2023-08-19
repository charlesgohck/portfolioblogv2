import { AppProps } from "next/app";

export default function MainComponent({ Component, pageProps }: AppProps) {
    return <div className="maincomponent">
        <Component {...pageProps} />
    </div>
}