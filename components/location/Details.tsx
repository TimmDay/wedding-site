import styled from 'styled-components';
import MapGoog from './MapGoog';
import LocationList from './LocationList';
import React, { useState } from 'react';


type DetailsProps = {};

const Details = ({}: DetailsProps) => {
    const [focusIndex, setFocusIndex] = useState(0);

    return (
        <StyledDetails className="wrapper">
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
        </StyledDetails>
    );
};

const StyledDetails = styled.main`
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

export default Details;
