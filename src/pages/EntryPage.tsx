import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Parallax, Mousewheel } from "swiper/modules";
import styled from "styled-components";
import "swiper/css";
import { SnowEffect } from "@src/components/SnowEffect";
import { Link, Typography } from "@mui/material";
import { KeyboardDoubleArrowDown } from '@mui/icons-material';
import { Loading } from "@src/components/Loading";

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

interface SlidesInfo extends Omit<Slide, 'layers'> {
  images: string[];
}

const StyledSwiper = styled(Swiper)({
  height: '100%',
  background: '#000',
});

const StyledSwiperSlide = styled(SwiperSlide)({
  display: 'flex',
  justifyContent: 'center',
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

const StyledLink = styled(Link)({
  position: 'absolute',
  zIndex: 1,
  bottom: 20,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '10px',
  opacity: 0.3,
  transition: 'opacity 1s, transform .6s',
  transform: 'scale(.8) rotate(10deg)',

  '&:hover': {
    opacity: 1,
    transform: 'scale(1) rotate(0deg)',
  },
});

export const EntryPage = () => {
  const loadImage = async (url: string): Promise<string> => {
    const image = await import(`../assets/entry/${url}`);
    return image.default;
  };

  const [slides, setSlides] = useState<Slide[]>([]);
  const [isLoading, setIsLoading] = useState(true);

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

    return await Promise.all(imagePromises);
  };

  const loadSlidesAndSetState = async () => {
    try {
      const slidesData = await loadSlides();
      setSlides(slidesData);
    } catch (error) {
      console.error("Ошибка при загрузке слайдов:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadSlidesAndSetState();
  // eslint-disable-next-line react-hooks/exhaustive-deps
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
              {slide.layers.map((layer, layerIndex) => (
                <StyledLayer
                  key={layerIndex}
                  data-swiper-parallax={layer.parallax}
                  style={{ backgroundImage: `url(${layer.image})` }}
                ></StyledLayer>
              ))}
              <SnowEffect id={slide.name.toString()} color={slide.snowColor} />
              {slide.link && (
                <StyledLink
                  href={slide.link.href}
                  underline="none"
                  sx={{
                    fontSize: 64,
                    color: slide.snowColor,
                  }}
                >
                  <Typography variant="h4">{slide.link.text}</Typography>
                  <KeyboardDoubleArrowDown
                    fontSize="inherit"
                    sx={{
                      color: slide.snowColor,
                    }}
                  />
                </StyledLink>
              )}
            </StyledSwiperSlide>
          ))}
        </StyledSwiper>
      )}
    </>
  );
};
