import type { NextPage } from 'next';
import Head from 'next/head';
import { HomePage } from '../components/homepage';

const Home: NextPage = () => {
  return (
    <>
        <Head>
            <title>K & T get hitched</title>
            <meta
                name="description"
                content="homepage for Karen and Tim's wedding site"
            />
        </Head>
        <HomePage />
    </>
  );
};

export default Home;
