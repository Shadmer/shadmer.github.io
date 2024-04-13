import { Swiper, SwiperSlide } from "swiper/react";
import { Parallax, Mousewheel } from "swiper/modules";
import { slideData } from "./slideData";
import "swiper/css";
import "./App.css";

import layerBack_1 from "./assets/img/screen-1/layer-back.jpg";
import layerMiddle_1 from "./assets/img/screen-1/layer-middle.png";
import layerFront_1 from "./assets/img/screen-1/layer-front.png";

import Particles from "react-particles";

import { SnowEffect } from "./SnowEffect";
import { snowEffect } from "./options";

export const App = () => {
  return (
    <Swiper
      className="swiper slider"
      // direction='vertical'
      spaceBetween={18}
      slidesPerView={1}
      speed={2400}
      parallax={true}
      mousewheel={{
        sensitivity: 2.4,
      }}
      modules={[Parallax, Mousewheel]}
    >
      {slideData.map((slide, index) => (
        <SwiperSlide key={index} className="swiper-slide slider__item">
          {slide.layers.map((layer, layerIndex) => (
            <>
              <div
                key={layerIndex}
                className="slider__layer"
                data-swiper-parallax={layer.parallax}
                style={{ backgroundImage: `url(${layer.image})` }}
              ></div>
            </>
          ))}
          <SnowEffect id={index.toString()} color={slide.color} />
        </SwiperSlide>
      ))}
    </Swiper>

    // <Swiper
    //   className="swiper slider"
    //   spaceBetween={18}
    //   slidesPerView={1}
    //   speed={2400}
    //   parallax={true}
    //   mousewheel={{
    //     sensitivity: 2.4,
    //   }}
    //   modules={[Parallax, Mousewheel]}
    // >
    //   <SwiperSlide className="swiper-slide slider__item">
    //     {/* <div
    //       className="slider__layer"
    //       style={{
    //         backgroundImage: `url(${layerBack_1})`,
    //       }}
    //     ></div>
    //     <div
    //       className="slider__layer"
    //       style={{
    //         backgroundImage: `url(${layerMiddle_1})`,
    //       }}
    //     ></div>
    //     <div
    //       className="slider__layer"
    //       style={{
    //         backgroundImage: `url(${layerFront_1})`,
    //       }}
    //     ></div> */}
    //     <SnowEffect id="foo" />
    //     {/* <Particles options={{ snowEffect }} /> */}
    //   </SwiperSlide>
    //   <SwiperSlide className="swiper-slide slider__item">
    //     <SnowEffect id="bar" />
    //   </SwiperSlide>
    // </Swiper>
  );
};
