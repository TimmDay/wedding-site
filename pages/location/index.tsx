import styled from 'styled-components';
import React, { useState } from 'react';
import MapGoog from '../../components/location/MapGoog';
import LocationList from '../../components/location/LocationList';


const LocationPage = () => {
    const [focusIndex, setFocusIndex] = useState(0);

    return (
        <StyledLocationPage className="wrapper">
            <div className="max-content">
                <MapGoog
                    focusIndex={focusIndex}
                    setFocusIndex={setFocusIndex}
                />
                <LocationList
                    focusIndex={focusIndex}
                    setFocusIndex={setFocusIndex}
                />
            </div>
        </StyledLocationPage>
    );
};

const StyledLocationPage = styled.main`
  & > div {
    display: grid;
    grid-template-columns: 1fr;
    gap: 0;
  }

  //bigger than mobile / when event cards dont get squashed
  @media (min-width: 55rem) {
    & > div {
      grid-template-columns: 1fr 1fr;
      gap: var(--space-1);
    }
  }
`;

export default LocationPage;
