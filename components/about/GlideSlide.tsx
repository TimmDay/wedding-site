import styled from 'styled-components';
import Image from 'next/image';


type GlideSlideProps = {
    src: string,
    alt: string,
    caption: string,
    isPortrait: boolean
};

const GlideSlide = ({ src, alt, caption, isPortrait }: GlideSlideProps) => {
    return (
        <StyledGlideSlide className="glide__slide">
            <figure className="glide__slide slider">
                <div style={{borderRadius: '5px', overflow: 'hidden'}}>
                <Image
                    src={src}
                    alt={alt}
                    width={isPortrait ? 291 : 800}
                    height={isPortrait ? 518 : 518}
                    loading="lazy"
                    // layout="responsive"
                    // layout="fill"
                    // objectFit="cover"
                />
                </div>
                <figcaption>{caption}</figcaption>
            </figure>
        </StyledGlideSlide>
    );
};

const StyledGlideSlide = styled.li`
  figure {
    border: 1px var(--color-grey-100) solid;
    max-width: fit-content;
    padding: var(--space-2);
    padding-bottom: 0;
    display: flex;
    align-content: center;
    flex-flow: column;
    margin: auto;
    border-radius: 5px;
    overflow: hidden;
    background-color: var(--color-primary-offset);
    position: relative;
    width: 740px;
    height: 550px;
    justify-content: center;
    align-items: center;
  }
  figcaption {
    color: var(--color-contrast);
    font: italic var(--font-size-base) sans-serif;
    padding: var(--space-2) var(--space-4);
    font-family: var(--font-caption);
    max-width: inherit;
  }
`;

export default GlideSlide;
