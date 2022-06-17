import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { TIMINGS, LINKS, TimingsType } from '../../data/locationData';
import { convertTimesToUserTZ } from '../../utils/tz-conversion-utils';


const Footer = () => {
    const [timings, setTimings] = useState<TimingsType>({ ...TIMINGS });

    useEffect(() => {
        const newTimings = convertTimesToUserTZ(timings);
        // @ts-ignore
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
                        <p>
                          <a href={LINKS.zoomCeremonyLink}>open zoom</a>
                          {` (pw: ${LINKS.zoomCeremonyPass})`}
                        </p>
                    </div>
                    <p>{`${timings.ceremonyStart} - ${timings.ceremonyEnd}`}</p>

                    <div>Ceremony</div>
                    <div className="align-left">
                        <p>{"Margaret Craig Room, Old Treasury Building"}</p>
                        <p>{"20 Spring St, East Melbourne 3000"}</p>
                    </div>
                    <p>{`${timings.ceremonyStart} - ${timings.ceremonyEnd}`}</p>

                    <p>Photos</p>
                    <div className="align-left">
                        <p>{"Old Treasury building, Treasury Gardens"}</p>
                    </div>
                    <p>{`${timings.photosStart} - ${timings.photosEnd}`}</p>
                    {/*<p>photo spots</p>*/}
                    {/*<div className="align-left">*/}
                    {/*    <p>{"Treasury Gardens, Albert Park Lake, Catani Gardens, St Kilda pier"}</p>*/}
                    {/*</div>*/}
                    {/*<p>{`${timings.photosStart} - ${timings.photosEnd}`}</p>*/}

                    <p>Casual tea and art</p>
                    <div className="align-left">
                        <p>{"National Gallery of Victoria"}</p>
                        <p>{"180 St Kilda Rd Melbourne 3006"}</p>
                    </div>
                    <p>{`${timings.ngvStart} - ${timings.ngvEnd}`}</p>

                    {/*<p>Luna Park</p>*/}
                    {/*<div className="align-left">*/}
                    {/*    <p>South Beach Reserve</p>*/}
                    {/*    <p>18 Lower Esplanade St Kilda 3182</p>*/}
                    {/*</div>*/}
                    {/*<p>{`${timings.lunaStart} - ${timings.lunaEnd}`}</p>*/}

                    <p>Cocktail Hour</p>
                    <div className="align-left">
                        <p>{"Donovans 40 Jacka Blvd, St Kilda 3182"}</p>
                    </div>
                    <p>{`${timings.cocktailHourStart} - ${timings.cocktailHourEnd}`}</p>

                    <p>Dinner</p>
                    <div className="align-left">
                        <p>{"Donovans 40 Jacka Blvd, St Kilda 3182"}</p>
                    </div>
                    <p>{`${timings.dinnerStart} - ${timings.dinnerEnd}`}</p>

                    <p>Toasts</p>
                    <div className="align-left">
                        <p>{"Donovans 40 Jacka Blvd, St Kilda 3182"}</p>
                    </div>
                    <p>{`${timings.zoomToastStart} - ${timings.zoomToastEnd}`}</p>

                    <div>zoom toasts link</div>
                    <div className="align-left">
                        <p>
                          <a href={LINKS.zoomToastsLink}>open zoom</a>
                          {` (pw: ${LINKS.zoomToastsPass})`}
                        </p>
                    </div>
                    <p>{`${timings.zoomToastStart} - ${timings.zoomToastEnd}`}</p>
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

  a {
    color: var(--color-secondary);
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
