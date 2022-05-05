import styled from 'styled-components';
import { Status } from '@googlemaps/react-wrapper';
import React, { ReactElement } from 'react';


const MapLoadingMsg = (status: Status): ReactElement | any => {

    if (status === Status.LOADING) return (
        <StyledMapLoadingMsg>
            <h3>
                {status.toString()} ...
            </h3>
        </StyledMapLoadingMsg>
    );

    if (status === Status.FAILURE) return (
        <StyledMapLoadingMsg>
            <h3>
                {status.toString()} ...
            </h3>
        </StyledMapLoadingMsg>
    );
    return null;
};

const StyledMapLoadingMsg = styled.div`
  color: var(--color-contrast-offset);
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  
  h3 {
    font-family: var(--font-body);
  }

`;

export default MapLoadingMsg;
