import { NextPage } from 'next';
import Head from 'next/head';
import Details from '../../components/location/Details';


const LocationPage: NextPage = () => {
    return (
        <>
            <Head>
                <title>K&T | Details</title>
                <meta
                    name="description"
                    content="Location and times for Karen and Tim's wedding day"
                />
            </Head>
            <Details />
        </>
    );
};

export default LocationPage;
