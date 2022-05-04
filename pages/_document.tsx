import { ServerStyleSheet } from 'styled-components';
import Document, { Html, Head, Main, NextScript } from 'next/document';


// @ts-ignore
class MyDocument extends Document {
    static async getInitialProps(ctx: any) {
        const sheet = new ServerStyleSheet();
        const originalRenderPage = ctx.renderPage;
        try {
            ctx.renderPage = () => originalRenderPage({ enhanceApp: (App: any) => (props: any) => sheet.collectStyles(<App {...props}/>) });
            const initialProps = await Document.getInitialProps(ctx);
            return {
                ...initialProps,
                styles: (
                    <>
                        {initialProps.styles}
                        {sheet.getStyleElement()}
                    </>
                ),
            };
        }
        finally {
            sheet.seal();
        }
    }

    //TODO: key=${settings?.googleMaps?.apiKey}
    render() {
        const setInitialTheme = `
            function getUserThemePreference() {
                if(window.localStorage.getItem('wedding-site-theme')) {
                    return window.localStorage.getItem('wedding-site-theme')
                }
                return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
            }
            document.body.dataset.theme = getUserThemePreference();
        `;

        return (
            <Html lang="en">
                <Head>
                    <link rel="icon" href="/favicon.ico"/>
                    <link rel="preconnect" href="https://fonts.googleapis.com"/>
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/>
                    <link
                        href="https://fonts.googleapis.com/css2?family=Indie+Flower&family=Parisienne&display=swap"
                        rel="stylesheet"
                    />
                </Head>

                <body>
                <script dangerouslySetInnerHTML={{ __html: setInitialTheme }}/>
                <Main/>
                <NextScript/>
                </body>
            </Html>
        );
    }
}

export default MyDocument;

// https://dev.to/rsanchezp/next-js-and-styled-components-style-loading-issue-3i68
// https://github.com/vercel/next.js/blob/main/examples/with-styled-components/pages/_document.js
