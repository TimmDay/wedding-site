import styled from 'styled-components';
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { Wrapper } from '@googlemaps/react-wrapper';
import Map from './Map';
import Marker from './Marker';
import { locationData } from '../../data/locationData';
import MapLoadingMsg from './MapLoadingMsg';
import { svgMarker, svgMarkerPOI } from './custom-markers';


const INITIAL_ZOOM = 13;
const INITIAL_LAT = -37.84706;
const INITIAL_LNG = 144.97250;
const API_KEY = process.env.gmaps_api_key || "";

type MapGoogPropsType = {
    focusIndex: number,
    setFocusIndex: Dispatch<SetStateAction<number>>
}

const MapGoog = ({ focusIndex=0, setFocusIndex }: MapGoogPropsType) => {
    const [zoom, setZoom] = useState(INITIAL_ZOOM);
    const [center, setCenter] = useState<google.maps.LatLngLiteral>({
        lat: INITIAL_LAT,
        lng: INITIAL_LNG
    });

    useEffect(() => {
    }, [focusIndex]);

    const onClick = (e: google.maps.MapMouseEvent) => {
    };
    const onIdle = (m: google.maps.Map) => {
        setZoom(m.getZoom()!);
        setCenter(m.getCenter()!.toJSON());
    };

    return (
        <StyledMapGoog>
            <Wrapper apiKey={API_KEY} render={MapLoadingMsg}>
                <Map
                    center={center}
                    zoom={zoom}
                    onClick={onClick}
                    onIdle={onIdle}
                >
                    {locationData.map(({ lat, lng, primaryLoc, eventTitle, location }, index) => (
                        <Marker
                            key={index}
                            position={{ lat, lng }}
                            // @ts-ignore
                            icon={primaryLoc
                                  ? svgMarker(index == focusIndex)
                                  : svgMarkerPOI(index == focusIndex)
                            }
                            title={eventTitle}
                            markerIndex={index}
                            setFocusIndex={setFocusIndex}
                        />
                    ))}
                </Map>
            </Wrapper>
        </StyledMapGoog>
    );
};

const StyledMapGoog = styled.div`
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
  }
`;

export default MapGoog;

//https://developers.google.com/maps/documentation/javascript/react-map#typescript
//https://www.npmjs.com/package/@googlemaps/js-api-loader
//https://www.npmjs.com/package/@googlemaps/react-wrapper
//https://github.com/googlemaps/js-samples/blob/09a6d80540ad197ff52669b08eec04b34f36798a/samples/react-map/index.tsx