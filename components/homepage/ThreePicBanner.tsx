import styled from 'styled-components';
import Image from 'next/image';

type ImgDataType = { path: string, alt: string };
type ThreePicBannerProps = {
    first: ImgDataType,
    second: ImgDataType,
    third: ImgDataType
};

const ThreePicBanner = ({ first, second, third }: ThreePicBannerProps) => {
    return (
        <StyledThreePicBanner className="max-content">
            <div className="img-container">
                <Image
                    src={`/images/${first.path}`}
                    alt={`${first.alt}`}
                    width={300}
                    height={200}
                    loading="lazy"
                    layout="responsive"
                />
            </div>
            <div className="img-container">
                <Image
                    src={`/images/${second.path}`}
                    alt={`${second.alt}`}
                    width={300}
                    height={200}
                    loading="lazy"
                    layout="responsive"
                />
            </div>
            <div className="img-container">
                <Image
                    src={`/images/${third.path}`}
                    alt={`${third.alt}`}
                    width={300}
                    height={200}
                    loading="lazy"
                    layout="responsive"
                />
            </div>
        </StyledThreePicBanner>
    );
};

const StyledThreePicBanner = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;

export default ThreePicBanner;
