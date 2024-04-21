import React, { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import "./herocarousel.css";
import Autoplay from "embla-carousel-autoplay";
import animatedPsico from "../../assets/video/animatedPsico.mp4";
import depresionCarousel from "../../assets/img/carousel/depresionCarousel.png";
import confundidoCarousel from "../../assets/img/carousel/confundidoCarousel.png";
import { DotButton, useDotButton } from "./HeroCarouselDotButton";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "./HeroCarouselArrowButtons";

const HeroCarousel = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: false },
    [Autoplay({ delay: 10000 })],
    options
  );
  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);
  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  useEffect(() => {
    if (emblaApi) {
      console.log(emblaApi.slideNodes()); // Access API
    }
  }, [emblaApi]);
  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          <div className="embla__slide">
            <div className="w-full h-svh">
              <video
                src={animatedPsico}
                autoPlay
                loop
                muted
                className="object-cover  w-full h-[50rem]"
              />
            </div>
          </div>
          <div className="embla__slide">
            <div className="embla__slide">
              <div className="w-full h-[50rem]">
                <img
                  src={depresionCarousel}
                  className="object-fill w-full h-[50rem]"
                  alt="La depresion puede ser mortal... estamos para ayudarte..."
                />
              </div>
            </div>
          </div>
          <div className="embla__slide">
            {" "}
            <div className="w-full h-[50rem]">
              <img
                src={confundidoCarousel}
                className="object-fill w-full h-[50rem]"
                alt="La depresion puede ser mortal... estamos para ayudarte..."
              />
            </div>
          </div>
        </div>
      </div>

      {/* <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>

        <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={"embla__dot".concat(
                index === selectedIndex ? " embla__dot--selected" : ""
              )}
            />
          ))}
        </div>
      </div> */}
    </section>
  );
};

export default HeroCarousel;
