import styled from 'styled-components';
import React, { ReactElement, useEffect, useRef, useState } from 'react';
import { Wrapper, Status } from '@googlemaps/react-wrapper';
import Map from './Map';
import Marker from './Marker';
import { locationData, nightModeStyles } from './locationData';


const API_KEY = '';


const render = (status: Status): ReactElement | any => {
    if (status === Status.LOADING) return <h3>{status} ..</h3>;
    if (status === Status.FAILURE) return <h3>{status} ...</h3>;
    return null;
};


const MapGoog = () => {
    const [clicks, setClicks] = useState<google.maps.LatLng[]>([]);
    const [zoom, setZoom] = useState(13);
    const [center, setCenter] = useState<google.maps.LatLngLiteral>({ lat: -37.83785, lng: 144.97612 });

    const onClick = (e: google.maps.MapMouseEvent) => {
        setClicks([...clicks, e.latLng!]); // avoid directly mutating state
    };

    const onIdle = (m: google.maps.Map) => {
        console.log('onIdle');
        setZoom(m.getZoom()!);
        setCenter(m.getCenter()!.toJSON());
    };

    {/*    {*/}
    {/*    flexGrow: '1',*/}
    {/*    height: '100%',*/}
    {/*    overflow: 'none'*/}
    {/*}}*/}
    return (
        <StyledMapGoog>
            {/*<p>{API_KEY}</p>*/}

            <Wrapper apiKey={API_KEY} render={render}>
                <Map
                    center={center}
                    zoom={zoom}
                    onClick={onClick}
                    onIdle={onIdle}
                    // style={nightModeStyles}

                >
                    {locationData.map(({ lat, lng }, index) => (
                        <Marker position={{ lat, lng }} key={index}/>
                    ))}
                </Map>
            </Wrapper>

        </StyledMapGoog>
    );
};

const StyledMapGoog = styled.div`
  color: red;

  .gmnoprint {
    display: none;
  }
  .gm-fullscreen-control {
    display: none;
  }
  .gm-style-cc {
    display: none;
  }
  a > div > img {
    display: none;
    //background: red;
  }
`;

export default MapGoog;

//https://developers.google.com/maps/documentation/javascript/react-map#typescript
//https://www.npmjs.com/package/@googlemaps/js-api-loader
//https://www.npmjs.com/package/@googlemaps/react-wrapper
//https://github.com/googlemaps/js-samples/blob/09a6d80540ad197ff52669b08eec04b34f36798a/samples/react-map/index.tsx