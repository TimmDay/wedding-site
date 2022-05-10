import styled from 'styled-components';
import { convertTimeToUserTZ } from '../../utils/tz-conversion-utils';
import React from 'react';


type MapInfoBoxProps = {
    eventTitle: string,
    location: string,
    start: string,
    end: string
};

const MapInfoBox = ({ eventTitle, location, start, end }: MapInfoBoxProps) => {
    return (
        <StyledMapInfoBox>
            <h3>{eventTitle}</h3>
            <p>{location}</p>
            {start &&
                <p>{`${convertTimeToUserTZ(start)} - ${end && convertTimeToUserTZ(end)}`}</p>
            }
        </StyledMapInfoBox>
    );
};

const StyledMapInfoBox = styled.div`
  padding-left: var(--space-2);
  color: #FCFFFF;
  position: absolute;
  bottom: 220px;

  h3 {
    font-family: var(--font-emphasis);
  }
  p {
    padding: 0;
    margin: 0;
  }

   //bigger than mobile
  @media (min-width: 35rem) {
    bottom: 150px;
  }
`;

export default MapInfoBox;
