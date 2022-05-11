import { NextPage } from 'next';
import Head from 'next/head';
import OurStory from '../../components/about/OurStory';


const AboutPage: NextPage = () => (
    <>
        <Head>
            <title>K&T | Our Story</title>
            <meta
                name="description"
                content="Karen and Tim's love story"
            />
        </Head>
        <OurStory/>
    </>
);

export default AboutPage;
