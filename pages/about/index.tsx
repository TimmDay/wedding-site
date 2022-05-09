import styled from 'styled-components';
import React from 'react';
import Carousel from '../../components/about/Carousel';


const About = () => {

    return (
        <StyledAbout className="wrapper">
            <div className="max-content">
                <h1>{'Our Story'}</h1>
                <p>
                    In 2015, on the day after Valentine's Day, during Boston's heaviest snowfall on record, Karen and Tim both opened the Tinder app.
                    With most of the city closed, Karen was cooped up with an insufferable friend of her housemate, while Tim was non-stop partying with half of Bostons couchsurfing community.
                    They both needed to get outside. So they swiped right.
                </p>
            </div>

            <div className="full-bleed">
                <Carousel />
            </div>

            <p className="max-content">
                Karen wowed Tim by speaking Spanish and playing Mozart on piano.
                Tim wowed Karen by speaking Australian, and having a coherant tinder profile. They met for coffee, then a drink, and another drink, then an unplanned dinner.
                The second date was The Imitation Game at the movies. On date 3, completely ignorant to the rules of Kosher, Tim cooked Karen a big bowl of garlic prawns.

                Now he knows how to bless the candles, and Karen has built a strong vocabulary of Aussie idioms.
            </p>

        </StyledAbout>
    );
};

const StyledAbout = styled.main`
  h1 {
    font-family: var(--font-emphasis);
    text-align: center;
    font-size: var(--xtra-big-ass-heading);
  }
`;

export default About;
