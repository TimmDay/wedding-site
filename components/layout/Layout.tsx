import React from 'react';
import Header from './Header';
import Footer from './Footer';
import SkipToContent from './SkipToContent';
import styled from 'styled-components';


type LayoutProps = { children: React.ReactNode }

const Layout = ({ children }: LayoutProps) => {
        return (
            <StyledLayout>
                <SkipToContent/>
                <div className="page-wrap">
                    <Header/>
                    {children}
                    <Footer/>
                </div>
            </StyledLayout>
        );
    }
;

//push footer to base of page when content doesn't fill vertical space
const StyledLayout = styled.div`
  .page-wrap {
    min-height: 100vh;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr auto;
    align-items: flex-start;
  }
`

export default Layout;
