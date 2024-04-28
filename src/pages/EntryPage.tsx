import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Parallax, Mousewheel } from "swiper/modules";
import styled from "styled-components";
import "swiper/css";
import { SnowEffect } from "@src/components/SnowEffect";
import { Link } from "react-router-dom";

const StyledSwiper = styled(Swiper)`
  height: 100%;
  background: #000;
`;

const StyledSwiperSlide = styled(SwiperSlide)`
  overflow: hidden;
`;

const SliderLayer = styled.div`
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center;
  will-change: transform;
  transition: var(--transition) !important;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    z-index: 1;
    box-shadow: inset 0 0 250px rgb(0 0 0 / 0.3);
  }
`;

interface Layer {
  parallax: string;
  image: string;
}

interface Slide {
  layers: Layer[];
  snowColor: string;
}

export const EntryPage = () => {
  const loadImage = async (url: string): Promise<string> => {
    const image = await import(`../assets/entry/${url}`);
    return image.default;
  };

  const [slides, setSlides] = useState<Slide[]>([]);

  useEffect(() => {
    const loadSlides = async () => {
      const slidesData: Slide[] = [
        {
          layers: [
            {
              parallax: "35%",
              image: await loadImage("screen-1/layer-back.jpg"),
            },
            {
              parallax: "25%",
              image: await loadImage("screen-1/layer-middle.png"),
            },
            {
              parallax: "14%",
              image: await loadImage("screen-1/layer-front.png"),
            },
          ],
          snowColor: "#BE9164",
        },
        {
          layers: [
            {
              parallax: "40%",
              image: await loadImage("screen-2/layer-back.jpg"),
            },
            {
              parallax: "34%",
              image: await loadImage("screen-2/layer-gera.png"),
            },
            {
              parallax: "30%",
              image: await loadImage("screen-2/layer-yen.png"),
            },
            {
              parallax: "14%",
              image: await loadImage("screen-2/layer-front.png"),
            },
          ],
          snowColor: "#525A6D",
        },
        {
          layers: [
            {
              parallax: "48%",
              image: await loadImage("screen-3/layer-back.jpg"),
            },
            {
              parallax: "35%",
              image: await loadImage("screen-3/layer-middle.png"),
            },
            {
              parallax: "29%",
              image: await loadImage("screen-3/layer-ciri.png"),
            },
            {
              parallax: "16%",
              image: await loadImage("screen-3/layer-front.png"),
            },
          ],
          snowColor: "#938086",
        },
      ];
      setSlides(slidesData);
    };

    loadSlides();
  }, []);

  return (
    <>
      <Link to="/inner">Inner Page</Link>
      <StyledSwiper
        // direction="vertical"
        spaceBetween={18}
        slidesPerView={1}
        speed={2400}
        parallax={true}
        mousewheel={{
          sensitivity: 2.4,
        }}
        modules={[Parallax, Mousewheel]}
      >
        {slides.map((slide, index) => (
          <StyledSwiperSlide key={index}>
            {slide.layers.map((layer, layerIndex) => (
              <SliderLayer
                key={layerIndex}
                data-swiper-parallax={layer.parallax}
                style={{ backgroundImage: `url(${layer.image})` }}
              ></SliderLayer>
            ))}
            <SnowEffect id={index.toString()} color={slide.snowColor} />
          </StyledSwiperSlide>
        ))}
      </StyledSwiper>
    </>
  );
};
