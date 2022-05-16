import styled from 'styled-components';
import Countdown from '../common/Countdown';
import CircleOffsetImg from '../common/CircleOffsetImg';
import LinkBox from './LinkBox';
import { TIMINGS, TimingsType } from '../../data/locationData';
import { useEffect, useState } from 'react';
import { convertTimesToUserTZ } from '../../utils/tz-conversion-utils';


const HomePage = () => {
    const [timings, setTimings] = useState<TimingsType>({ ...TIMINGS });

    useEffect(() => {
        const newTimings = convertTimesToUserTZ(timings);
        // @ts-ignore
        setTimings(newTimings);
    }, []);

    return (
        <StyledMain id="main wrapper">
            <section className="max-content title-block">
                <h1>{'We are Eloping!'}</h1>
                <CircleOffsetImg
                    path={'20220211_kt-stkildabeach.jpeg'}
                    alt={'Tim & Karen at St Kilda music festival 2022'}
                />
                <p className="subheading">{'Sunday 19 June 2022 (11:15AM AEST)'}</p>
                <Countdown targetDateTime={TIMINGS.ceremonyStart}/>
                <p className="zoom-link">{`Ceremony Zoom Link (${timings.ceremonyStart}): ${'tbc'}`}</p>
                <p className="zoom-link">{`Toasts Zoom Link (${timings.zoomToastStart}): ${'tbc'}`}</p>

            </section>

            <main className="max-content">
                <p>{'Enough already, we\'re getting married!'}</p>
                <p>{'This will be a small civil ceremony with a handful of family members. ' +
                    'Jewish ceremony to follow in the US at some undetermined future date. ' +
                    'We also hope to visit with our dear friends in each of the cities we have called home for hugs, pubs and wine.'}
                </p>
            </main>

            <LinkBox
                img1={'20180525_tk-mohercliffssitting.jpeg'}
                alt1={'Tim and Karen on cliffs of Moher,  Ireland 2018'}
                img2={'20180918_kt-slovakiakiss.jpg'}
                alt2={'Tim and Karen share a kiss in Slovakia 2018'}
                img3={'20180616_kt-worldcuptubingen.jpeg'}
                alt3={'Karen and Tim going to watch the soccer world cup in Tubingen 2018'}
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
      margin-top: var(--space-4);
      margin-bottom: calc(var(--space-8) + var(--space-2));
    }

    .subheading {
      margin-bottom: calc(-1 * var(--space-2));
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
