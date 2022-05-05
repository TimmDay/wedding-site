import styled from 'styled-components';
import Link from 'next/link';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import HomeIcon from './HomeIcon';


const ThemeToggle = dynamic(() => import('./IconThemeToggle'), { ssr: false, });


type MainNavigationProps = { isExpanded: boolean }

const MainNavigation = ({ isExpanded }: MainNavigationProps) => {
    const router = useRouter();

    return (
        <StyledNav
            id="primary-navigation"
            className="max-content"
            isExpanded={isExpanded}
        >
            <ul>
                <li>
                    <Link href="/" passHref prefetch={false} replace>
                        <a>
                            <HomeIcon/>
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="/about" passHref prefetch={false} replace>
                        <a className={router.pathname == '/about' ? 'active' : ''}>
                            Our Story
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="/location">
                        <a className={router.pathname == '/location' ? 'active' : ''}>
                            Details
                        </a>
                    </Link>
                </li>
                {/*<li>*/}
                {/*    <Link href="/guestbook">*/}
                {/*        <a className={router.pathname == '/guestbook' ? 'active' : ''}>*/}
                {/*            Say Hi*/}
                {/*        </a>*/}
                {/*    </Link>*/}
                {/*</li>*/}
                {/*<li>*/}
                {/*    <Link href="/registry">*/}
                {/*        <a className={router.pathname == '/registry' ? 'active' : ''}>*/}
                {/*            Gifts*/}
                {/*        </a>*/}
                {/*    </Link>*/}
                {/*</li>*/}
                <li>
                    <ThemeToggle/>
                </li>
            </ul>
        </StyledNav>
    );
};


const StyledNav = styled.nav<{ isExpanded: boolean }>`
  transform: ${({ isExpanded }) => (isExpanded === false) ? 'translateX(100%)' : 'translateX(0)'};
  transition: transform 250ms ease-out;
  position: fixed;
  inset: 0 0 0 25%;
  flex-direction: column;
  justify-content: space-between;
  padding: var(--space-8);
  width: 100%;
  z-index: 1000;
  margin: 0 auto;
  display: flex;
  //justify-content: center;
  @supports (backdrop-filter: blur(1.5rem)) {
    backdrop-filter: blur(2.5rem);
  }

  ul {
    display: flex;
    list-style: none;
    gap: var(--space-4);
    flex-direction: column;
    margin: var(--space-4) 0 0 0;
    padding: 0;
    height: 100%;
  }

  & li {
    text-transform: uppercase;
  }

  li:last-child {
    display: flex;
    flex-direction: row;
    flex-grow: 1;
    align-items: flex-end;
  }

  & a.active {
    color: var(--color-contrast);
  }

  //for logo to home
  //li:first-child {
  //  display: none;
  //}


  // bigger than mobile
  @media (min-width: 35rem) {
    background: inherit;
    transform: none;
    position: relative;
    inset: revert;
    padding: 0;

    ul {
      list-style: none;
      display: flex;
      align-items: center;
      flex-direction: row;
      gap: var(--space-12);
      margin: 0;
    }

    li:last-child {
      justify-content: flex-end;
      margin: 0;
      align-items: center;
    }

    //for logo link to home
    li:first-child {
      display: flex;
      flex-direction: row;
      flex-grow: 1;
      align-items: flex-start;
    }

    & li {
      text-transform: uppercase;
    }

    & a {
      color: var(--color-secondary);
      font-size: var(--font-size-nav);
    }

    & a:hover,
    & a.active {
      color: var(--color-contrast);
      cursor: pointer;
    }
  }
`;

export default MainNavigation;
