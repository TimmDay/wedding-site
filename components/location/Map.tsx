import styled from 'styled-components';
import { useEffect, useRef } from 'react';
import React from 'react';
import { overrideMapStyles } from './override-map-styles';


interface MapProps extends google.maps.MapOptions {
    onClick?: (e: google.maps.MapMouseEvent) => void;
    onIdle?: (map: google.maps.Map) => void;
    center?: google.maps.LatLngLiteral,
    zoom?: number,
    style?: { [key: string]: string },
    children: any
}

const Map = ({ center, zoom, children, onClick, onIdle }: MapProps) => {
    const ref = useRef<any>();
    const [map, setMap] = React.useState<google.maps.Map>();

    useEffect(() => {
        if (ref.current && !map) {
            setMap(new window.google.maps.Map(ref.current, {
                center,
                zoom,
                styles: overrideMapStyles
            }));
        }
    }, [ref, map, center, zoom]);

    useEffect(() => {
        if (map) {
            ["click", "idle"].forEach((eventName) =>
                google.maps.event.clearListeners(map, eventName)
            );
            if (onClick) map.addListener("click", onClick);
            if (onIdle) map.addListener("idle", () => onIdle(map));
        }
    }, [map, onClick, onIdle]);

    return (
        <StyledMap>
            <div ref={ref} id="map"/>
            {React.Children.map(children, (child) => {
                if (React.isValidElement(child)) {
                    // set the map prop on the child component
                    // @ts-ignore
                    return React.cloneElement(child, { map });
                }
            })}
        </StyledMap>
    );
};

const StyledMap = styled.div`
  #map {
    overflow: hidden;
    width: 305px;
    height: 645px;
    border-radius: 8px;
  }

  // bigger than mobile
  @media (min-width: 35rem) {
    #map {
      width: 380px;
    }
  }
`;

export default Map;
