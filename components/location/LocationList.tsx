import styled from 'styled-components';
import { locationData } from '../../data/locationData';
import LocationCard from './LocationCard';
import React, { Dispatch, SetStateAction } from 'react';


type LocationListProps = {
    focusIndex: number,
    setFocusIndex: Dispatch<SetStateAction<number>>
};

const LocationList = ({focusIndex, setFocusIndex}: LocationListProps) => {
    return (
        <StyledLocationList>


            {locationData.map(({ lat, lng, eventTitle, location, address, start, end }: any, index) => {

                return (
                    <LocationCard
                        key={index}
                        focusIndex={focusIndex}
                        setFocusIndex={setFocusIndex}
                        index={index}
                        eventTitle={eventTitle}
                        location={location}
                        address={address}
                        start={start}
                        end={end}
                    />
                )
            })}
        </StyledLocationList>
    );
};

const StyledLocationList = styled.div`
  height: 390px;
  overflow-y: scroll;
  padding: 3px var(--space-4) 0 var(--space-1);
  scroll-behavior: smooth;
  margin-top: var(--space-2);

  @media (min-width: 35rem) {
    height: 650px;
    margin-top: 0;
  }
`;

export default LocationList;
