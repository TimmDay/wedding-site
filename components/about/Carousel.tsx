import styled from 'styled-components';
import { useEffect } from 'react';
import Glide, { Options } from '@glidejs/glide';
import GlideSlide from './GlideSlide';
import { carouselData } from './carouselData';


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
  .glide__arrow--left {
    position: absolute;
    display: block;
    bottom: 40%;
    left: 28.9%;
    font-size: 80px;
    color: var(--color-grey-100);
    border: none;
    background: none;
  }
  .glide__arrow--right {
    position: absolute;
    display: block;
    bottom: 40%;
    right: 28.9%;
    font-size: 80px;
    color: var(--color-grey-100);
    border: none;
    background: none;
  }
  
  .glide__bullets {
    text-align: center;
    button {
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background: var(--color-grey-100);
      border: none;
      padding: 0;
      margin: 0 calc(var(--space-1)/2);
      margin-top: var(--space-1);
    }
  }
`;

export default Carousel;


//https://github.com/glidejs/glide/issues/376#issuecomment-618050617
//https://glidejs.com/docs/setup
//https://www.youtube.com/watch?v=kpAt25cOBrU