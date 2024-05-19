import React from 'react';
import styled from 'styled-components';
import { SnowEffect } from '@src/components/SnowEffect';
import { Box, Link, Typography } from '@mui/material';
import { KeyboardDoubleArrowDown } from '@mui/icons-material';
import { Slide } from '@src/components/types';

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
    backdropFilter: 'blur(25px) brightness(.98)',
    color: '#fff',

    '&:hover': {
        opacity: 1,
        transform: 'scale(1) rotate(0deg)',
    },
});

interface SlideContentProps {
    slide: Slide;
}

export const SlideContent: React.FC<SlideContentProps> = ({ slide }) => {
    const [loadedImages, setLoadedImages] = React.useState<boolean[]>(
        new Array(slide.layers.length).fill(false)
    );

    const handleImageLoad = (index: number) => {
        setLoadedImages((prevLoadedImages) => {
            const newLoadedImages = [...prevLoadedImages];
            newLoadedImages[index] = true;
            return newLoadedImages;
        });
    };

    return (
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            {slide.layers.map((layer, index) => (
                <StyledLayer
                    key={index}
                    data-swiper-parallax={layer.parallax}
                    src={layer.image}
                    alt={`Layer ${index}`}
                    loading="lazy"
                    onLoad={() => handleImageLoad(index)}
                    opacity={loadedImages[index] ? 1 : 0}
                />
            ))}
            <SnowEffect id={slide.name.toString()} color={slide.snowColor} />
            {slide.link && (
                <StyledLink
                    href={slide.link.href}
                    underline="none"
                    sx={{
                        fontSize: 64,
                    }}
                >
                    <Typography variant="h4">{slide.link.text}</Typography>
                    <KeyboardDoubleArrowDown fontSize="inherit" />
                </StyledLink>
            )}
        </Box>
    );
};
