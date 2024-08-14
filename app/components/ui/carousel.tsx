'use client'

import { Media } from "@/app/models/media";
import Image from "next/image";
import { Carousel } from "react-bootstrap";

interface ImageCarouselProps {
    images: Media[],
    caption?: string
}

export default function ImageCarousel({images, caption}: ImageCarouselProps) {
    const slides = images.map(
        (image) =>
            <Carousel.Item key={image.itemuid}>
                <Image src={image.itemurl_preview} alt="" width={856} height={640}/>
                <Carousel.Caption>
                    <h5>{caption}</h5>
                </Carousel.Caption>
            </Carousel.Item>
    )
    return (
        <Carousel>{slides}</Carousel>
    );
}
