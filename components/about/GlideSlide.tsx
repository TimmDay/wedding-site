import styled from 'styled-components';
import Image from 'next/image';


type GlideSlideProps = {
    src: string,
    alt: string,
    caption: string
};

const GlideSlide = ({ src, alt, caption }: GlideSlideProps) => {
    return (
        <StyledGlideSlide className="glide__slide">
            <figure className="glide__slide slider">
                <Image
                    src={src}
                    alt={alt}
                    width={700}
                    height={400}
                    loading="lazy"
                />
                <figcaption>{caption}</figcaption>
            </figure>
        </StyledGlideSlide>
    );
};

const StyledGlideSlide = styled.li`
  figure {
    border: thin var(--color-grey-100) solid;
    max-width: fit-content;
    padding: 5px;
    display: flex;
    align-content: center;
    flex-flow: column;
    margin: auto;
    border-radius: 5px;
    background-color: var(--color-primary-offset);
    width: 700px;
    height: 400px;
  }
  figcaption {
    color: var(--color-contrast);
    font: italic smaller sans-serif;
    padding: 3px;
    text-align: center;
    font-family: var(--font-caption);
    max-width: inherit;
  }
`;

export default GlideSlide;
