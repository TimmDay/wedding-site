import { NextPage } from 'next';
import Head from 'next/head';
import FAQ from '../../components/faq/FAQ';


const FaqPage: NextPage = () => (
    <>
        <Head>
            <title>K&T | faq</title>
            <meta
                name="description"
                content="Some questions and answers regarding Karen and Tim's wedding"
            />
        </Head>
        <FAQ />
    </>
);

export default FaqPage;
