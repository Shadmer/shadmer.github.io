import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Parallax, Mousewheel } from "swiper/modules";
import styled from "styled-components";
import "swiper/css";
import { Loading } from "@src/components/Loading";
import { SlideContent } from "@src/components/SlideContent";
import { Slide, SlidesInfo } from "@src/components/types";

const StyledSwiper = styled(Swiper)({
  height: '100%',
  background: '#000',
});

const StyledSwiperSlide = styled(SwiperSlide)({
  display: 'flex',
  justifyContent: 'center',
  overflow: 'hidden',
});

export const EntryPage = () => {
  const [slides, setSlides] = useState<Slide[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const loadImage = async (url: string): Promise<string> => {
    const image = await import(`../assets/entry/${url}`);
    return image.default;
  };

  useEffect(() => {
    const loadSlides = async () => {
      const slidesInfo: SlidesInfo[] = [
        { name: '1', images: ['screen-1/layer-back.jpg', 'screen-1/layer-middle.png', 'screen-1/layer-front.png'], snowColor: "#BE9164", link: { href: 'https://shadmer.github.io/dnd-cheat-sheet', text: '"Шпаргалка" по ДнД' } },
        { name: '2', images: ['screen-2/layer-back.jpg', 'screen-2/layer-gera.png', 'screen-2/layer-yen.png', 'screen-2/layer-front.png'], snowColor: "#3D4232" },
        { name: '3', images: ['screen-3/layer-back.jpg', 'screen-3/layer-middle.png', 'screen-3/layer-ciri.png', 'screen-3/layer-front.png'], snowColor: "#938086" },
      ];

      const imagePromises: Promise<Slide>[] = slidesInfo.map(async (slide) => {
        const loadedImages = await Promise.all(slide.images.map(loadImage));
        return {
          name: slide.name,
          layers: loadedImages.map((image, index) => ({ parallax: `${(index + 1) * 10}%`, image })),
          snowColor: slide.snowColor,
          link: slide.link,
        };
      });

      const loadedSlides = await Promise.all(imagePromises);
      setSlides(loadedSlides);
      setIsLoading(false);
    };

    loadSlides();
  }, []);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <StyledSwiper
          loop={true}
          spaceBetween={18}
          slidesPerView={1}
          speed={2400}
          parallax={true}
          mousewheel={{
            sensitivity: 2.4,
          }}
          modules={[Parallax, Mousewheel]}
        >
          {slides.map((slide) => (
            <StyledSwiperSlide key={slide.name}>
              <SlideContent slide={slide} />
            </StyledSwiperSlide>
          ))}
        </StyledSwiper>
      )}
    </>
  );
};
