import styled from 'styled-components';
import { useEffect } from 'react';
import Glide, { Options } from '@glidejs/glide';
import GlideSlide from './GlideSlide';
import { carouselData } from '../../data/carouselData';


const sliderConfiguration: Options = {
    type: 'slider',
    // gap: 20,
    perView: 1,
    startAt: 0,
};


const Carousel = () => {
    let glide = new Glide('.glide', sliderConfiguration);

    useEffect(() => {
        // @ts-ignore
        glide.destroy(); //warning incorrect. things break without this line
        glide = new Glide('.glide', sliderConfiguration);
        glide.mount();
    }, []);

    const Bullet = ({ index }: { index: number }) => <button className="glide__bullet" data-glide-dir={`=${index}`}/>;

    return (
        <StyledCarousel>
            <div className="glide">
                <div className="glide__track" data-glide-el="track">
                    <ul className="glide__slides">
                        {carouselData.map((slide) => (
                            <GlideSlide
                                key={slide.src}
                                src={slide.src}
                                alt={slide.alt}
                                caption={slide.caption}
                                isPortrait={slide.isPortrait}
                            />
                        ))}
                    </ul>
                </div>

                <div className="glide__bullets" data-glide-el="controls[nav]">
                    {carouselData.map((el, index) => (
                        <Bullet key={index} index={index}/>
                    ))}
                </div>

                {/* ❰ ❮ ❯ ❱*/}
                <div className="glide__arrows" data-glide-el="controls">
                    <button className="glide__arrow glide__arrow--left" data-glide-dir="<">❮</button>
                    <button className="glide__arrow glide__arrow--right" data-glide-dir=">">❯</button>
                </div>

            </div>
        </StyledCarousel>
    );
};

const StyledCarousel = styled.div`
  .glide__arrows {
    display: flex;
    align-content: center;
    align-items: center;
    justify-content: center;
  }
  .glide__arrow--left {
    position: absolute;
    display: block;
    bottom: -12px;
    left: calc(50% - 348px);
    font-size: 25px;
    color: var(--color-grey-100);
    border: none;
    background: none;
  }
  .glide__arrow--right {
    position: absolute;
    display: block;
    bottom: -12px;
    right: calc(50% - 348px); //calc(-45px - var(--space-2));
    font-size: 25px;
    color: var(--color-grey-100);
    border: none;
    background: none;
  }
  .glide__bullets {
    display: flex;
    align-content: center;
    align-items: center;
    justify-content: center;
    margin-top: var(--space-2);
  }
  .glide__bullet {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: var(--color-grey-100);
    border: none;
    padding: 0;
    margin: 0 calc(var(--space-1)/2);
    transition: transform 0.4s ease-out, background-color 0.3s ease-out;
  }
  .glide__bullet--active {
    background-color: var(--color-grey-300);
    transform: scale(1.2);
  }
`;

export default Carousel;


//https://github.com/glidejs/glide/issues/376#issuecomment-618050617
//https://glidejs.com/docs/setup
//https://www.youtube.com/watch?v=kpAt25cOBrU