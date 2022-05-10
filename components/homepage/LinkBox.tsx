import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';


type LinkBoxProps = {};

const LinkBox = ({}: LinkBoxProps) => {
    return (
        <StyledLinkBox className="max-content">
            <Link href="/about">
                <div>
                    <Image
                        src={`/images/2015__boston.jpeg`}
                        blurDataURL={`/images/2015__boston.jpeg`}
                        alt={'T&K Boston 2015'}
                        width={150}
                        height={150}
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
                        src={`/images/2015__boston.jpeg`}
                        blurDataURL={`/images/2015__boston.jpeg`}
                        alt={'T&K Boston 2015'}
                        width={150}
                        height={150}
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
                        src={`/images/2015__boston.jpeg`}
                        blurDataURL={`/images/2015__boston.jpeg`}
                        alt={'T&K Boston 2015'}
                        width={150}
                        height={150}
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
  justify-content: center;
  align-items: center;
  align-content: center;
  flex-wrap: wrap;

  div {
    cursor: pointer;
    margin: var(--space-1) var(--space-4);
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

    p {
      color: #F5F5F5;
      text-transform: uppercase;
      z-index: 10;
      font-size: var(--heading-2);
    }
  }
`;

export default LinkBox;
