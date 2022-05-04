import styled from 'styled-components';
import { useState, useEffect } from 'react';


const { zonedTimeToUtc, utcToZonedTime, format } = require('date-fns-tz');

type TimingsType = {
    ceremonyStart: string,
    ceremonyEnd: string,
    photosStart: string,
    photosEnd: string,
    picnicStart: string,
    picnicEnd: string,
    lunaStart: string,
    lunaEnd: string,
    dinnerStart: string
}

const Footer = () => {
    const [timings, setTimings] = useState<TimingsType>({
        ceremonyStart: '2022-06-19 11:15',
        ceremonyEnd: '2022-06-19 11:45',
        photosStart: '2022-06-19 12:00',
        photosEnd: '2022-06-19 13:30',
        picnicStart: '2022-06-19 13:30',
        picnicEnd: '2022-06-19 14:30',
        lunaStart: '2022-06-19 14:30',
        lunaEnd: '2022-06-19 18:00',
        dinnerStart: '2022-06-19 18:30',
    });

    useEffect(() => {
        const tz = Intl.DateTimeFormat().resolvedOptions().timeZone ?? 'Australia/Melbourne';
        // @ts-ignore
        const newTimings: TimingsType = Object.keys(timings).reduce(
            (acc, key) => {
                // @ts-ignore
                const localDateTime = utcToZonedTime(zonedTimeToUtc(timings[key], 'Australia/Melbourne'), tz);
                const formatString: string = key.includes('End') ? 'h:mm bbb (z)' : 'h:mm bbb';

                const resultTimeString = format(
                    localDateTime,
                    formatString,
                    { timeZone: tz }
                );
                // @ts-ignore
                acc[key] = resultTimeString;
                return acc;
            }, {}
        );
        setTimings(newTimings);
    }, []);


    return (
        <StyledWrapper className="full-bleed">
            <StyledFooter className="max-content">
                <div className="title-block">
                    <span className="title">K & T are eloping</span>
                    <span className="sub-title">love to everyone</span>
                </div>

                <div className="details">
                    <h4 className="col-header">What</h4>
                    <h4 className="col-header">Where</h4>
                    <h4 className="col-header">When</h4>

                    <div>zoom ceremony</div>
                    <div className="align-left">
                        <p>https:// ... </p>
                    </div>
                    <p>{`${timings.ceremonyStart} - ${timings.ceremonyEnd}`}</p>

                    <div>ceremony</div>
                    <div className="align-left">
                        <p>Margaret Craig Room</p>
                        <p>Old Treasury Building</p>
                        <p>20 Spring St, East Melbourne 3000</p>
                        <p>VIC Australia</p>
                    </div>
                    <p>{`${timings.ceremonyStart} - ${timings.ceremonyEnd}`}</p>


                    <p>photos</p>
                    <div className="align-left">
                        <p>Treasury Gardens</p>
                        <p>Albert Park Lake</p>
                        <p>St Kilda pier</p>
                    </div>
                    <p>{`${timings.photosStart} - ${timings.photosEnd}`}</p>


                    <p>picnic lunch</p>
                    <div className="align-left">
                        <p>South Beach Reserve</p>
                        <p>26 Jacka Blvd, St Kilda 3182</p>
                    </div>
                    <p>{`${timings.picnicStart} - ${timings.picnicEnd}`}</p>


                    <p>Luna Park</p>
                    <div className="align-left">
                        <p>South Beach Reserve</p>
                        <p>18 Lower Esplanade St Kilda 3182</p>
                    </div>
                    <p>{`${timings.lunaStart} - ${timings.lunaEnd}`}</p>


                    <p>Dinner</p>
                    <div className="align-left">
                        <p>Donovans</p>
                        <p>40 Jacka Blvd, St Kilda 3182</p>
                    </div>
                    <p>{`${timings.dinnerStart} - late`}</p>


                </div>

                {/*<div className="copyright">*/
                }
                {/*    © 2022 → present Tim Day. All Rights Reserved.*/
                }
                {/*</div>*/
                }
            </StyledFooter>
        </StyledWrapper>
    );
};

const StyledWrapper = styled.footer`
  background: var(--color-primary-offset);
`;

const StyledFooter = styled.div`
  display: grid;
  gap: var(--space-2);
  padding: var(--space-4);
  grid-template-columns: 1fr;

  // footer always at page base even when content doesnt fill viewport
  width: 100%;
  margin: 0 auto;

  .details {
    display: grid;
    gap: var(--space-1);
    grid-template-columns: 1fr 1fr 1fr;
    text-align: center;

    & h4.col-header {
      font-family: var(--font-emphasis);
      font-size: var(--heading-3);
      text-align: center;
      color: var(--color-secondary);
    }

    & p {
      margin: 0;
      font-size: var(--font-size-smallest);
      text-align: inherit;
    }

    & div {
      margin: 0;
      font-size: var(--font-size-smallest);
    }
  }

  .title-block {
    gap: 0;
    grid-column: span 3;
    display: flex;
    flex-direction: column;
    gap: var(--space-1);
    align-items: center;
    color: var(--color-contrast);
  }

  .title {
    color: var(--color-secondary);
    font-size: var(--heading-3);
    font-family: var(--font-emphasis);
  }

  .sub-title {
    display: none;
    color: var(--color-contrast-offset);
    font-size: var(--font-size-small);
  }

  .align-left {
    text-align: left;
  }

  //.copyright {
  //  color: var(--color-contrast-offset);
  //  font-size: var(--font-size-smallest);
  //  justify-content: flex-end;
  //  grid-column: span 3;
  //}

  // bigger than mobile
  @media (min-width: 35rem) {
    padding-inline: var(--space-8);
    grid-template-columns: 1fr 1fr 1fr 1fr;

    .title-block {
      grid-column: span 1;
      align-items: flex-start;
    }

    .sub-title {
      display: block;
    }

    .details {
      grid-column: span 3;
      align-items: center;
    }

    //.copyright {
    //  grid-column: span 2;
    //  text-align: center;
    //}
  }
`;

export default Footer;