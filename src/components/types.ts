export interface Slide {
    name: string;
    layers: {
        parallax: string;
        image: string;
    }[];
    snowColor: string;
    link?: {
        href: string;
        text: string;
    };
}

export interface SlidesInfo extends Omit<Slide, 'layers'> {
    images: string[];
}
