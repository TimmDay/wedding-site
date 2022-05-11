import styled from 'styled-components';
import React from 'react';
import Carousel from './Carousel';


const OurStory = () => {
    return (
        <StyledOurStory className="wrapper">
            <section className="max-content">
                <h1>{'Our Story'}</h1>
                <p>
                    {
                        'In 2015, on the day after Valentine\'s Day, during Boston\'s heaviest snowfall on record, ' +
                        'Karen and Tim both opened the Tinder app.'
                    }
                </p>
                <p>
                    {
                        'With most of the city closed, Karen was cooped up with her housemate’s friend, who, sorry, was kind of annoying. ' +
                        'Tim was marvelling at the snowpocalypse with half of Boston\'s couchsurfing community through the living room window.'
                    }
                </p>
                <p>
                    {
                        'They both needed to get outside. So they swiped right.'
                    }
                </p>
            </section>

            <div className="full-bleed">
                <Carousel/>
            </div>

            <section className="max-content">
                <p>
                    {
                        'Karen wowed Tim by being prettier than her profile pictures and an avid conversationalist.' +
                        'Tim wowed Karen by speaking Australian and having a lumbersexual beard. ' +
                        'We met for coffee, then a drink, and another drink, then an unplanned dinner. ' +
                        'After that date, Karen felt pretty certain she had just been on the last first date of her life.' +
                        '\n\n '
                    }
                </p>
                <p>
                    {
                        'The rest is history, but Karen and Tim style, which is to say, not really conventional history. ' +
                        'After a magical year and a half in Cambridge, we moved to Germany for three years, ' +
                        'where we mastered a foreign language (jk lol sehr lustig), but we did something totally and utterly unique: ' +
                        'immersing ourselves in a foreign culture and getting to share every aspect of that experience with each other. ' +
                        '\nThis included: ' +
                        'living in the absolute worst and best apartments; ' +
                        'experiencing “the customer is always wrong”; ' +
                        'making wonderful friends from all over the world; ' +
                        'deciphering baffling German doctor visits (optometrist: "your eye is like... dog"); ' +
                        'exploring our beloved Tübingen Altstadt and Französisches Viertel; ' +
                        'shaking hands with everyone, everyday, in our German workplaces and going for workplace lunchtime team walks; ' +
                        'Thursday beers at Freistil; ' +
                        'common public nudity; ' +
                        'the most multicultural Passover Seders you have ever seen; ' +
                        'the phrase “rich bitch”; ' +
                        'and mostly just spending an ungodly amount of time together and just never really getting sick of each other.'
                    }
                </p>
                <p>
                    {
                        'Tim proposed to Karen on a beautiful day in August 2019, which included an eventful trip on a Stocherkahn (punt boat). ' +
                        'Along with our good friend Andy, Tim taught himself how to pilot it that morning, almost got sucked into a weir and dumped Andy in the river. ' +
                        'It\'s harder than it looks. '
                    }
                </p>
                <p>
                    {
                        'Then you guys know what happened next: ' +
                        'Karen went to the States to finish up her MBA at the end of 2019 while Tim stayed in Germany. ' +
                        'Then it was 2020, so we socially distanced across the entire m-f’n globe. ' +
                        'Tim\'s flights to the States were cancelled just before his lease ended, leaving him forever grateful to the life saving (perhaps literally) friends that lent him couches to sleep on while Tim and Karen tried to work out how to get back to each other. ' +
                        'More than 12 months later, Tim had failed to get into the States but had made to Aus via the Middle East, and Karen had sent 457654564 pages of info to Australian immigration. ' +
                        'The mysterious covid official known only as "Alex" approved Karen\'s travel exemption and she quarantined for 2 weeks in a 5 star tiny box, before, finally, being reunited with Tim in the Sydney sunshine.'
                    }
                </p>
                <p>
                    {
                        'Since then, we are back to spending ungodly amounts of time together again. ' +
                        'We have learned novel ways of staying in touch with our loved ones across the world, bored and delighted friends with Tim’s beautiful bird photos, and Karen has started writing words like “labour” in work emails and requesting flat whites (decaf) in cafes.'
                    }
                </p>
                <p>
                    {
                        'We’re grateful to have a network of friends and family that we love very much, and who we are able to stay in touch with regardless of distance. ' +
                        'Thanks for making everywhere we go feel both like an adventure, and like coming home.'
                    }
                </p>
            </section>
        </StyledOurStory>
    );
};

const StyledOurStory = styled.main`
  h1 {
    font-family: var(--font-emphasis);
    text-align: center;
    font-size: var(--xtra-big-ass-heading);
  }

  p {
    white-space: pre-line;
    text-align: justify;
  }
`;

export default OurStory;
