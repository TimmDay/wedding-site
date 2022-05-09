import styled from 'styled-components';
import Image from 'next/image';
import Countdown from '../common/Countdown';


const HomePage = () => {
    return (
        <StyledMain id="main wrapper">
            <div className="max-content">
                <h1>We are Eloping!</h1>
                <p className="subheading">
                    Sunday 19 June 2022 (11:15AM AEST)
                </p>

                <Countdown/>

                <p>
                    {`Ceremony Zoom Link: ${"tbc"}`}
                </p>



                <p>
                    We've been planning this for a while...
                    We would have loved for ALL of our loved ones to be in one place, celebrating as a big crowd in a giant hall.
                    But more than that, we want to be married already!

                    This will be a small ceremony with a handful of family members and a government celebrant.
                    Followed by a dinner with some immediate family. Please don't be offended if you weren't invited, pretty much nobody was.

                    But we hope to be celebrating with each of you at some point!

                    We are planning:
                    - to have the Jewish portion of our ceremony in the USA in the future. We have postponed the signing of the Ketoubah for
                    this.
                    - to catch up with friends at some point in each of the cities we have called home for hugs, pubs and wine.
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

            <div className="max-content link-box">
                <div className="box">
                    Our Story
                </div>
                <div className="box">
                    Location & Schedule
                </div>
                <div className="box">
                    FAQs
                </div>
            </div>
        </StyledMain>
    );
};

const StyledMain = styled.main`
  text-align: center;

  h1 {
    font-family: var(--font-emphasis);
    font-size: var(--font-s);
    font-size: var(--xtra-big-ass-heading);
    line-height: 1.15;
  }

  // bigger than mobile
  @media (min-width: 35rem) {

  }
`;

export default HomePage;
