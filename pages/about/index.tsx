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
                    With most of the city closed, Karen was cooped up with an insufferable friend of her housemate Maddy, while Tim was cooped up with half of BOstons couchsurfing community.
                    They both needed to get outside. They swiped right.
                </p>
            </div>

            <div className="full-bleed">
                <Carousel />
            </div>

            <p  className="max-content">
                Karen wowed Tim by speaking Spanish and playing Mozart on piano.
                Tim wowed Karen by speaking Australian, and having a coherant tinder profile.
                Date 2 was The Imitation Game
                On date 3, completely ignorant to the rules of Kosher, Tim cooked Karen a big bowl of garlic prawns.
            </p>

            <p className="full-bleed">
                qwertyuiqwertyuiqwertyuqwert yuiqwertyuiqwertyuqwertyuiq wertyuiqwertyu
                qwertyuiqwertyuiqwertyuqwertyuiqwertyuiqwertyuqwertyuiqwertyuiqwertyuq wertyuiqwertyuiqwert
                yuqwertyuiqwertyuiqwertyuqwertyuiqwertyuiqwertyuqwertyuiqwertyuiqwertyuqwertyuiqwertyuiqwertyuqwertyuiqw ertyuiqwert
                yuqwertyuiq wertyuiqwertyuqwe rtyuiqwertyuiqw emrtyu
            </p>
        </StyledAbout>
    );
};

const StyledAbout = styled.main`
  h1 {
    font-family: var(--font-emphasis);
    text-align: center;
    font-size: 5rem;
  }
`;

export default About;
