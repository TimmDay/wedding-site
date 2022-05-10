import styled from 'styled-components';
import Countdown from '../common/Countdown';
import ThreePicBanner from './ThreePicBanner';
import CircleOffsetImg from '../common/CircleOffsetImg';
import LinkBox from './LinkBox';


const HomePage = () => {
    return (
        <StyledMain id="main wrapper">
            <section className="max-content">
                <h1>{'We are Eloping!'}</h1>
                <CircleOffsetImg
                    path={'2015__boston.jpeg'}
                    alt={'T&K Boston 2015'}
                />
                <p className="subheading">{'Sunday 19 June 2022 (11:15AM AEST)'}</p>
                <Countdown/>
                <p className="zoom-link">{`Ceremony Zoom Link: ${'tbc'}`}</p>
            </section>

            <section className="max-content">
                <p>{'We\'ve been planning this for a while...\nEnough setbacks, we\'re getting married!'}</p>
                <p>{'This will be a small ceremony with a handful of family members and a government celebrant, followed by activities.' +
                    ' Please don\'t be offended if you weren\'t invited - pretty much nobody was (to this version). We still love you.' +
                    '\nWe hope to have the Jewish part of the ceremony, including the Ketoubah signing, in future in the USA. ' +
                    'We also hope to visit with our dear friends in each of the cities we have called home for hugs, pubs and wine.'}
                </p>
            </section>

            <ThreePicBanner
                first={{ path: '2015__boston.jpeg', alt: 'T&K Boston 2015' }}
                second={{ path: '20181206_tub-ls.jpeg', alt: 'T&K Tübingen 2018' }}
                third={{ path: '20180919_karen_hausdermusik.jpeg', alt: 'K Haus der Musik ienna 2018' }}
            />
            <LinkBox/>
        </StyledMain>
    );
};

const StyledMain = styled.main`
  text-align: center;

  h1 {
    font-family: var(--font-emphasis);
    font-size: var(--xtra-big-ass-heading);
    line-height: 1.15;
    margin: var(--space-4) 0 var(--space-8) 0;
  }
  .zoom-link {
    color: var(--color-accent-1);
  }
  section > p {
    white-space: pre-line
  }

  // bigger than mobile
  //@media (min-width: 35rem) {
  //}
`;

export default HomePage;
