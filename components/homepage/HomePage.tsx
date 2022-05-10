import styled from 'styled-components';
import Countdown from '../common/Countdown';
import CircleOffsetImg from '../common/CircleOffsetImg';
import LinkBox from './LinkBox';


const HomePage = () => {
    return (
        <StyledMain id="main wrapper">
            <section className="max-content title-block">
                <h1>{'We are Eloping!'}</h1>
                <CircleOffsetImg
                    path={'20220211_kt-stkildabeach.jpeg'}
                    alt={'Tim & Karen at St Kilda music festival 2022'}
                />
                <p className="subheading">{'Sunday 19 June 2022 (11:15AM AEST)'}</p>
                <Countdown/>
                <p className="zoom-link">{`Ceremony Zoom Link: ${'tbc'}`}</p>
            </section>

            <main className="max-content">
                <p>{'We\'ve been planning this for a while...\nEnough setbacks, we\'re getting married!'}</p>
                <p>{'This will be a small ceremony with a handful of family members and a government celebrant, followed by activities.' +
                    ' Please don\'t be offended if you weren\'t invited - pretty much nobody was (to this version). We still love you.' +
                    '\nWe hope to have the Jewish part of the ceremony, including the Ketoubah signing, in future in the USA. ' +
                    'We also hope to visit with our dear friends in each of the cities we have called home for hugs, pubs and wine.'}
                </p>
            </main>

            <LinkBox
                img1={"20170412_t-neckarmueller.jpeg"}
                alt1={"Tim at Neckarmueller Tubingen 2017"}
                img2={"20180918_kt-slovakiakiss.jpg"}
                alt2={"Tim and Karen share a kiss in Slovakia 2018"}
                img3={"20170412_k-neckarmueller.jpeg"}
                alt3={"Karen at Neckarmueller Tubingen 2017"}
            />

        </StyledMain>
    );
};

const StyledMain = styled.main`
  text-align: center;

  .title-block {
    h1 {
      font-family: var(--font-emphasis);
      font-size: var(--xtra-big-ass-heading);
      line-height: 1.15;
      margin: var(--space-4) 0 calc(var(--space-8) + var(--space-2)) 0;
    }
    .subheading {
      margin-bottom: calc(-1*var(--space-2));
    }
    .zoom-link {
      color: var(--color-accent-1);
      margin-top: calc(-1 * var(--space-2));
    }
    section > p {
      white-space: pre-line
    }
  }
  main {
    margin-top: calc(-1 * var(--space-6));
  }

  // bigger than mobile
  //@media (min-width: 35rem) {
  //}
`;

export default HomePage;
