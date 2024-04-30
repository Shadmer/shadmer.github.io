import React from "react";
import styled from "styled-components";
import { SnowEffect } from "@src/components/SnowEffect";
import { Box, Link, Typography } from "@mui/material";
import { KeyboardDoubleArrowDown } from '@mui/icons-material';
import { Slide } from "@src/components/types";
import { Loading } from "@src/components/Loading";

const StyledLayer = styled('img')<{ opacity: number }>(({ opacity }) => ({
    position: 'absolute',
    width: '100%',
    height: '100%',
    inset: 0,
    willChange: 'transform',
    transition: 'var(--transition) !important',
    objectFit: 'cover',
    opacity,

    '&::before': {
        content: '""',
        position: 'absolute',
        inset: 0,
        zIndex: 1,
        boxShadow: 'inset 0 0 250px rgb(0 0 0 / 0.3)',
    },
}));

const StyledLink = styled(Link)<{ opacity: number }>(({ opacity }) => ({
    position: 'absolute',
    zIndex: 1,
    bottom: 20,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '10px',
    opacity,
    transition: 'opacity 1s, transform .6s',
    transform: 'scale(.8) rotate(10deg)',

    '&:hover': {
        opacity: 1,
        transform: 'scale(1) rotate(0deg)',
    },
}));

interface SlideContentProps {
    slide: Slide
}

export const SlideContent: React.FC<{ slide: Slide }> = ({ slide }: SlideContentProps) => {
    const [loadedImagesCount, setLoadedImagesCount] = React.useState(0);
    const totalImagesCount = slide.layers.length;
    const imagesLoaded = React.useMemo(() => loadedImagesCount === totalImagesCount, [loadedImagesCount, totalImagesCount])

    const handleImageLoad = () => {
        setLoadedImagesCount((prevCount) => prevCount + 1);
    };

    return (
        <>
            {!imagesLoaded && (<Loading />)}
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                {slide.layers.map((layer, layerIndex) => (
                    <StyledLayer
                        key={layerIndex}
                        data-swiper-parallax={layer.parallax}
                        src={layer.image}
                        alt={`Layer ${layerIndex}`}
                        loading="lazy"
                        onLoad={handleImageLoad}
                        opacity={+imagesLoaded}
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
                        opacity={imagesLoaded ? 0.3 : 0}
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
            </Box>
        </>
    )
}
