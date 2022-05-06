import styled from 'styled-components';
import Image from 'next/image';


const HomePage = () => {
    return (
            <StyledMain id="main wrapper">
                <div className="max-content">
                    <h1>Wedding Details</h1>
                    <p>We are Eloping!</p>
                    <p>Sunday 19 June 2022</p>
                    <p>
                        Meet us on... Zoom!

                        We are apologetic to all our loved ones that this cannot be a bigger celebration.
                        We would love to have everyone in one place, celebrating in a big crowd in a giant hall and free of worry about global air travel, pandemics and immigration.

                        But more than that, we want to be married!

                        This will be a small ceremony with a handful of family members and a government celebrant.
                        Followed by a dinner with Paula, David and Tim's immediate family.

                        We will be celebrating with the rest of you at some point!

                        We are planning:
                         - to have the Jewish portion of our ceremony in the USA in the future. We have postponed the signing of the Ketoubah for this.
                         - to catch up with friends at some point in each of the cities we have called home


                    </p>
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
