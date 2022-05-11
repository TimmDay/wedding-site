import styled from 'styled-components';
import Image from 'next/image';


type CirleOffsetImgProps = {
    path: string,
    alt: string
};

const CirleOffsetImg = ({ path, alt }: CirleOffsetImgProps) => {
    return (
        <StyledCirleOffsetImg>
            <div>
                <Image
                    src={`/images/${path}`}
                    alt={`${alt}`}
                    loading="lazy"
                    layout="fill"
                    objectFit="cover"
                    objectPosition="50% 50%"
                    placeholder="blur"
                    blurDataURL={`/images/${path}`}
                />
            </div>
            <div></div>
        </StyledCirleOffsetImg>
    );
};

const StyledCirleOffsetImg = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: var(--space-8);
  div {
    border-radius: 50%;
    overflow: hidden;
    height: 10rem;
    width: 9.5rem;
    border: 3.5px solid var(--color-primary);
  }
  &>div:first-child {
    position: relative;
    transform: translateX(2.8rem);
    z-index: 8;
  }
  &>div:last-child {
    background: linear-gradient(var(--color-grey-100), var(--color-grey-200));
    transform: translate(-2.8rem, -1.2rem);
    z-index: 7;
  }
`;

export default CirleOffsetImg;
