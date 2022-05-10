import styled from 'styled-components';
import { useState } from 'react';
import { useRouter } from 'next/router';
import MobileNavToggle from './IconMobileNavToggle';
import MainNavigation from './MainNavigation';

const Header = () => {
  const [expanded, setExpanded] = useState(false);
  const router = useRouter();
  const isHomePage = router.pathname.length === 1;

  return (
    <StyledHeader className='full-bleed' isHomePage={isHomePage}>
      <MobileNavToggle handleClick={() => setExpanded(!expanded)} isExpanded={expanded} />
      <MainNavigation isExpanded={expanded} />
    </StyledHeader>
  );
};

const StyledHeader = styled.header<{ isHomePage: boolean }>`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  padding: var(--space-4);
  position: ${({ isHomePage }) => (isHomePage === true ? 'initial' : 'sticky')};
  top: 0;
  z-index: 100;

  // bigger than mobile
  @media (min-width: 35rem) {
    gap: var(--space-8);
    justify-content: left;
    padding: var(--space-2) var(--space-8);
    max-height: var(--space-20);
    background: var(--color-primary-offset);
    box-shadow: var(--box-shadow); //0px 5px 9px 0 rgba(0,0,0,.11);
  }
`;

export default Header;
