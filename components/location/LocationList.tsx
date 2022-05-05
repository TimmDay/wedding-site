import styled from 'styled-components';
import { locationData } from './locationData';
import LocationCard from './LocationCard';
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';


type LocationListProps = {
    focusIndex: number,
    setFocusIndex: Dispatch<SetStateAction<number>>
};

const LocationList = ({focusIndex, setFocusIndex}: LocationListProps) => {
    return (
        <StyledLocationList>
            {locationData.map(({ lat, lng, eventTitle, location, address, start, end }: any, index) => (
                <LocationCard
                    key={index}
                    focusIndex={focusIndex}
                    setFocusIndex={setFocusIndex}
                    index={index}
                    lat={lat}
                    lng={lng}
                    eventTitle={eventTitle}
                    location={location}
                    address={address}
                    start={start}
                    end={end}
                />
            ))}
        </StyledLocationList>
    );
};

const StyledLocationList = styled.div`
  height: 650px;
  overflow-y: scroll;
  padding: 3px var(--space-4) 0 var(--space-1);
  scroll-behavior: smooth;

  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }

  &::-webkit-scrollbar-thumb {
    background-color: darkgrey;
    outline: 1px solid slategrey;
  }
`;

export default LocationList;
