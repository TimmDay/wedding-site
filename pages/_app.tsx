import '../styles/globals.css';
import '../styles/colors.css';
import '../styles/typography.css';
import '../styles/spacing.css';
import '../styles/utilities.css';
import '../styles/nprogress.css';
import '@glidejs/glide/dist/css/glide.core.min.css';
// import '@glidejs/glide/dist/css/glide.theme.min.css';


import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Router } from 'next/router';
import Nprogress from 'nprogress';
import { Layout } from '../components/layout';

//show progress bar so user knows something is happening (when navving on slow connections)
Router.events.on('routeChangeStart', () => Nprogress.start());
Router.events.on('routeChangeComplete', () => Nprogress.done());
Router.events.on('routeChangeError', () => Nprogress.done());

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <Layout>
            <Head>
                <title>K & T get hitched</title>
                <meta name="description" content="a wedding webpage for Karen and Tim's 2022 wedding"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <meta charSet="utf-8"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <Component {...pageProps} />
        </Layout>
    );
}

export default MyApp;
