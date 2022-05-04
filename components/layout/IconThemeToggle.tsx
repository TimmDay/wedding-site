import { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';


const IconThemeToggle = () => {
    const [activeTheme, setActiveTheme] = useState(document?.body?.dataset?.theme ?? 'light');
    const inactiveTheme = activeTheme === 'light' ? 'dark' : 'light';

    useEffect(() => {
        document.body.dataset.theme = activeTheme;
        window.localStorage.setItem('wedding-site-theme', activeTheme);
    }, [activeTheme]);

    return (
        <ToggleButton
            aria-label={`Switch to ${inactiveTheme} theme`}
            title={`Switch to ${inactiveTheme} mode`}
            onClick={() => setActiveTheme(inactiveTheme)}
            theme={activeTheme ?? 'dark'}
            role="button"
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 470 470">
                <g className="toggle-sun">
                    <path
                        d="M403.2 167V69.2H305.4L236.2 0 L 167 69.2H69.2V167L0 236.2l69.2 69.2 v 97.8 H 167 l 69.2 69.2 l 69.2 -69.2h97.8V305.4l69.2 -69.2Zm-167 198.2 a 129 129 0 1 1 129 -129 A 129 129 0 0 1 236.2 365.2 Z"
                    />
                </g>
                <g className="toggle-circle">
                    <circle className="cls-1" cx="236.2" cy="236.2" r="100"/>
                </g>
            </svg>
        </ToggleButton>
    );
};


const ToggleButton = styled.button`
  cursor: pointer;
  background: 0;
  border: 0;
  opacity: 0.8;
  border-radius: 50%;
  display: flex;
  align-content: center;
  position: relative;

  svg {
    fill: var(--color-contrast);
  }

  .toggle-circle {
    transform: ${(props) => (props?.theme === 'light') ? 'translateX(-15%)' : 'translateX(0)'};
    transition: transform 250ms ease-out;
  }

  .toggle-sun {
    transform: rotate(0deg);
    transform-origin: center center;
    transition: transform 400ms cubic-bezier(.45, 1.38, .81, 1.16);
    ${props => props.theme === 'dark' && css`transform: rotate(60deg);`}
  }

  // bigger than mobile - inlcude hover, focus and tooltip
  @media (min-width: 35rem) {
    //tooltip
    &::after {
      content: attr(aria-label);
      position: absolute;
      color: var(--color-primary);
      background: var(--color-contrast);
      width: max-content; //always one line
      font-size: var(--font-size-small);
      top: 90%;
      left: 0;
      right: 0;
      margin: 0 auto;
      padding: var(--space-1) var(--space-2);
      border-radius: 0.5rem;
      opacity: 0;
      transform: scale(0); //disappear
      transform-origin: left;
      transition: transform 0ms linear 300ms, opacity 300ms linear;
    }

    &:hover,
    &:focus {
      background: hsl(0 0% 50% / 0.1);
      opacity: 1;
    }

    &:hover::after,
    &:focus-visible::after {
      opacity: 0.7;
      transform: scale(1);
      transition: transform 100ms linear, opacity 100ms linear;
    }
  }

  //only matters if JS is disabled AND user has dark color scheme selected
  //@media (prefers-color-scheme: dark) {
  //}

`;

export default IconThemeToggle;
