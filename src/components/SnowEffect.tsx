import { useCallback } from 'react';
import Particles from 'react-particles';
import type { Engine } from 'tsparticles-engine';
import { loadSlim } from 'tsparticles-slim';

interface ISnowEffectProps {
    id: string;
    color: string;
}

export const SnowEffect = ({ id, color }: ISnowEffectProps) => {
    const particlesInit = useCallback(async (engine: Engine) => {
        await loadSlim(engine);
    }, []);

    return (
        <Particles
            id={id}
            init={particlesInit}
            options={{
                particles: {
                    number: {
                        value: 400,
                        density: {
                            enable: true,
                        },
                    },
                    color: {
                        value: color,
                    },
                    shape: {
                        type: 'circle',
                    },
                    opacity: {
                        value: 1,
                    },
                    size: {
                        value: 2,
                    },
                    move: {
                        enable: true,
                        speed: 3,
                        direction: 'bottomRight',
                        straight: true,
                    },
                    wobble: {
                        enable: true,
                        distance: 10,
                        speed: 10,
                    },
                    zIndex: {
                        value: {
                            min: 0,
                            max: 100,
                        },
                        opacityRate: 10,
                        sizeRate: 10,
                        velocityRate: 10,
                    },
                },
            }}
        />
    );
};
