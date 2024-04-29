import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Parallax, Mousewheel } from "swiper/modules";
import styled from "styled-components";
import "swiper/css";
import { SnowEffect } from "@src/components/SnowEffect";
import { Box, Link, Tooltip } from "@mui/material";
import { KeyboardDoubleArrowDown } from '@mui/icons-material';

const StyledSwiper = styled(Swiper)({
  height: '100%',
  background: '#000',
});

const StyledSwiperSlide = styled(SwiperSlide)({
  overflow: 'hidden',
});

const StyledLayer = styled('div')({
  position: 'absolute',
  inset: 0,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  willChange: 'transform',
  transition: 'var(--transition) !important',

  '&::before': {
    content: '""',
    position: 'absolute',
    inset: 0,
    zIndex: 1,
    boxShadow: 'inset 0 0 250px rgb(0 0 0 / 0.3)',
  },
});

const StyledLinkBox = styled(Box)({
  position: 'absolute',
  bottom: 20,
  width: '100%',
  textAlign: 'center',
  zIndex: 2,
  cursor: 'pointer',
});

interface Layer {
  parallax: string;
  image: string;
}

interface Slide {
  name: string;
  layers: Layer[];
  snowColor: string;
  link?: {
    href: string;
    text: string;
  };
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
          name: '1',
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
          link: {
            href: 'https://shadmer.github.io/dnd-cheat-sheet',
            text: 'Шпаргалка по ДнД',
          },
        },
        {
          name: '2',
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
          snowColor: "#3D4232",
        },
        {
          name: '3',
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
      <StyledSwiper
        // direction="vertical"
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
            {slide.layers.map((layer, layerIndex) => (
              <StyledLayer
                key={layerIndex}
                data-swiper-parallax={layer.parallax}
                style={{ backgroundImage: `url(${layer.image})` }}
              ></StyledLayer>
            ))}
            <SnowEffect id={slide.name.toString()} color={slide.snowColor} />
            { slide.link &&
              <StyledLinkBox>
                <Tooltip
                  title={slide.link.text}
                  placement="top"
                >
                  <Link href={slide.link.href} sx={{ fontSize: 64 }}>
                    <KeyboardDoubleArrowDown
                      fontSize="inherit"
                      sx={{ color: slide.snowColor }}
                    />
                  </Link>
                </Tooltip>
              </StyledLinkBox>
            }
          </StyledSwiperSlide>
        ))}
      </StyledSwiper>
    </>
  );
};
