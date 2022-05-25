import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';


type LinkBoxProps = {
    img1: string,
    alt1: string,
    img2: string,
    alt2: string,
    img3: string,
    alt3: string,
};

const LinkBox = ({ img1, img2, img3, alt1, alt2, alt3 }: LinkBoxProps) => {
    return (
        <StyledLinkBox className="max-content">
            <Link href="/about">
                <div>
                    <Image
                        src={`/images/${img1}`}
                        blurDataURL={`/images/${img1}`}
                        alt={alt1}
                        loading="lazy"
                        layout="fill"
                        objectFit="cover"
                        objectPosition="50% 50%"
                        placeholder="blur"
                    />
                    <p>
                        Our Story
                    </p>
                </div>
            </Link>

            <Link href="/location">
                <div>
                    <Image
                        src={`/images/${img2}`}
                        blurDataURL={`/images/${img2}`}
                        alt={alt2}
                        loading="lazy"
                        layout="fill"
                        objectFit="cover"
                        objectPosition="50% 50%"
                        placeholder="blur"
                    />
                    <p>
                        Details
                    </p>
                </div>
            </Link>

            <Link href="/faq">
                <div>
                    <Image
                        src={`/images/${img3}`}
                        blurDataURL={`/images/${img3}`}
                        alt={alt3}
                        loading="lazy"
                        layout="fill"
                        objectFit="cover"
                        objectPosition="50% 50%"
                        placeholder="blur"
                    />
                    <p>
                        FAQs
                    </p>
                </div>
            </Link>
        </StyledLinkBox>
    );
};

const StyledLinkBox = styled.div`
  display: flex;
  gap: var(--space-8);
  justify-content: center;
  align-items: center;
  align-content: center;
  flex-wrap: wrap;
  margin-bottom: var(--space-8);
  
  div {
    cursor: pointer;
    position: relative;
    overflow: hidden;
    height: 140px;
    width: 140px;
    border-radius: 50%;
    background: linear-gradient(var(--color-primary), var(--color-grey-50));
    box-shadow: var(--box-shadow);
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    -webkit-tap-highlight-color: transparent; //accessibility note: ok with this, as component inherantly provides strong visual feedback

    p {
      color: #F5F5F5;
      text-transform: uppercase;
      z-index: 10;
      font-size: var(--heading-2);
      opacity: 1;
      transition: opacity .4s;
    }
  }
  div:hover {
    p {
      opacity: 0;
    }
  }

  div:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: var(--color-grey-200);
    opacity: 0.5;
    transition: opacity .5s;
  }
  div:hover:after {
    opacity: 0;
  }

  //bigger than mobile
  @media (min-width: 35rem) {
    gap: var(--space-12);
  }
`;

export default LinkBox;
