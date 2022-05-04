import styled from 'styled-components';


type MobileNavToggleProps = {
    handleClick: () => void,
    isExpanded: boolean
};

const IconMobileNavToggle = ({ handleClick, isExpanded }: MobileNavToggleProps) => {
    return (
        <StyledMobileNavToggle
            isExpanded={isExpanded}
            onClick={handleClick}
            role="button"
            aria-controls="primary-navigation"
            aria-expanded={isExpanded}
            aria-label={`${isExpanded ? 'close' : 'expand'} the menu`}
        >
            <span className="sr-only">Nav Menu</span>
            <svg width="60" height="40" viewBox="0 0 81 59" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g className="top-feather">
                    <path
                        d="M18.5 12.9 79.3 10.5 78.8 10.5 41.5 10.1 3.3 11.5C2.8 9.5 0 3.3 1 5.3 1.7 6.4 4.2 7.3 4.1 8.7 4.4 8 5.5 8 5.7 8.9L5.8 9.4C8.8 5.2 13 1.8 14.1 1.7L9.8 7.2 17 3.7C29.7 3.3 36.8 3.7 45.8 4.2 42 6 43 7.6 42.6 8.5L52.4 4.7C56.4 5 61.6 5.6 61.5 5.8 69 6.5 80.1 10.1 79.3 10.5 73.3 13.1 70.7 13.6 70.2 13.6 70.1 14.2 65.3 15.5 40.6 15.9L35.1 12.9 36.3 15.9C33.5 15.9 30.3 16 27 16 25.7 16.2 22.3 15.8 18.5 12.9Z"
                    />
                </g>
                <g className="middle-feather">
                    <path
                        d="M19.7 31.4 80.5 29 80 29 42.7 28.6 4.5 30C4 28 1.2 21.8 2.2 23.8 2.9 24.9 5.4 25.8 5.3 27.2 5.6 26.5 6.7 26.5 6.9 27.4L7 27.9C10 23.7 14.2 20.3 15.3 20.2L11 25.7 18.2 22.2C30.9 21.8 38 22.2 47 22.7 43.2 24.5 44.2 26.1 43.8 27L53.6 23.2C57.6 23.5 62.8 24.1 62.7 24.3 70.2 25 81.3 28.6 80.5 29 74.5 31.6 71.9 32.1 71.4 32.1 71.3 32.7 66.5 34 41.8 34.4L36.3 31.4 37.5 34.4C34.7 34.4 31.5 34.5 28.2 34.5 26.9 34.7 23.5 34.3 19.7 31.4Z"
                    />
                </g>
                <g className="bottom-feather">
                    <path
                        d="M18.5 50.4 79.3 48 78.8 48 41.5 47.6 3.3 49C2.8 47 0 40.8 1 42.8 1.7 43.9 4.2 44.8 4.1 46.2 4.4 45.5 5.5 45.5 5.7 46.4L5.8 46.9C8.8 42.7 13 39.3 14.1 39.2L9.8 44.7 17 41.2C29.7 40.8 36.8 41.2 45.8 41.7 42 43.5 43 45.1 42.6 46L52.4 42.2C56.4 42.5 61.6 43.1 61.5 43.3 69 44 80.1 47.6 79.3 48 73.3 50.6 70.7 51.1 70.2 51.1 70.1 51.7 65.3 53 40.6 53.4L35.1 50.4 36.3 53.4C33.5 53.4 30.3 53.5 27 53.5 25.7 53.7 22.3 53.3 18.5 50.4Z"
                    />
                </g>
            </svg>
        </StyledMobileNavToggle>
    );
};

const StyledMobileNavToggle = styled.button<{ isExpanded: boolean }>`
  position: absolute;
  right: var(--space-4);
  top: var(--space-4);
  z-index: 2000;
  cursor: pointer;

  background: 0;
  border: 0;
  opacity: 0.8;
  padding: var(--space-1);
  border-radius: 50%;
  display: flex;
  align-content: center;

  svg {
    fill: var(--color-contrast);
  }

  .top-feather {
    transform: ${(props) => (props?.isExpanded)
                            ? 'translateY(-55%) translateX(95%) scaleX(-1)'
                            : 'translateY(0) translateX(0)'};
    transition: transform 250ms ease-out;
  }
  .middle-feather {
    transform: ${(props) => (props?.isExpanded)
                            ? 'rotate(-45deg)'
                            : 'rotate(0)'};
    transform-origin: center center;
    transition: transform 250ms ease-out;
  }
  .bottom-feather {
    transform: ${(props) => (props?.isExpanded)
                            ? 'scaleX(-1) translateY(-25%) translateX(-10%) rotate(-45deg)'
                            : 'scaleX(1) translateY(0) translateX(0) rotate(0)'};
    transform-origin: center center;
    transition: transform 250ms ease-out;
  }

  @media (min-width: 35rem) {
    display: none;
  }
`;

export default IconMobileNavToggle;
