import styled from 'styled-components';
import Image from 'next/image';


const HomePage = () => {
    return (
            <StyledMain id="main wrapper">
                <div className="max-content">
                    <h1>Wedding Details</h1>
                    <p>We are Eloping!</p>
                    <p>Sunday 19 June 2022</p>
                </div>

                <div className="full-bleed">
                    <Image
                        src={'/images/20181206_tub-ls.jpeg'}
                        alt={'banner picture of Karen and Tim'}
                        width={1200}
                        height={700}
                        loading="lazy"
                        layout={'responsive'}
                    />
                </div>

                <div className="max-content">
                    <p>We would like to thank all the lovely people out there whom we love</p>
                    <p>Given the logistical details of covid, continents, immigration, air travel and our previously cancelled wedding plans
                        - we are just doing it!</p>
                    <p>It will be a small wedding, in a government office, with limited numbers.</p>
                    <p>Please don't take your lack of invite as an insult</p>
                </div>
            </StyledMain>
    );
};

const StyledMain = styled.main`
  .home {
  }

  // bigger than mobile
  @media (min-width: 35rem) {
    .home {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-template-rows: auto 1fr;
      gap: var(--space-8);
      margin-top: var(--space-8);
      padding-inline: var(--space-8);
    }
  }
`;

export default HomePage;
