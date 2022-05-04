import styled from 'styled-components';
import React, { useEffect, useState } from 'react';
import { Wrapper, Status } from '@googlemaps/react-wrapper';
import { useRouter } from 'next/router';
import ReactSimpleMap from '../../components/location/ReactSimpleMap';
import MapGoog from '../../components/location/MapGoog';


const LocationPage = () => {
    // const router = useRouter();

    // const loadLocationHandler = () => {
    //   //interact with API...
    //   router.push('/'); //example: programatic routing
    // };

    return (
        <StyledLocationPage className="wrapper">
            <div className="max-content">
                <h1>{'location'}</h1>
                {/*<button onClick={loadLocationHandler}>Button</button>*/}
                {/*<ReactSimpleMap />*/}
                <MapGoog />
            </div>
        </StyledLocationPage>
    );
};

const StyledLocationPage = styled.main`
  h1 {
    font-family: var(--font-emphasis);
    text-align: center;
    font-size: 5rem;
  }
`;

export default LocationPage;
