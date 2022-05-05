import styled from 'styled-components';


const HomeIcon = () => {
    return (
        <StyledHomeIcon>
            <div>Karen</div>
            <div>and</div>
            <div>Tim</div>
        </StyledHomeIcon>
    );
};

const StyledHomeIcon = styled.div`
  position: relative;
  height: 100px;
  width: 100px;
  color: var(--color-contrast-offset);
  
  div:first-child {
    font-family: var(--font-emphasis);
    text-transform: capitalize;
    position: absolute;
    top: -5px;
    font-size: 2.7rem; //var(--font-size-large);
  }
  div:nth-child(2) {
    font-family: var(--font-emphasis);
    text-transform: lowercase;
    position: absolute;
    right: -10px;
    top: 42px;
  }
  div:last-child {
    font-family: var(--font-emphasis);
    text-transform: capitalize;
    position: absolute;
    top: 40px;
    left: 30px;
    font-size: 2.3rem;
  }
`;

export default HomeIcon;
