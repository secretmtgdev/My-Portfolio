import ImageCarousel from "../image-carousel/ImageCarousel";

export default function TopProjectsCarousel() {
    const images = [
        {
            src: 'https://img.itch.zone/aW1nLzE4ODA0NjAxLnBuZw==/315x250%23c/CMwkH%2F.png',
            alt: 'Duskveil cover'
        },
        {
            src: 'https://img.itch.zone/aW1hZ2UvMzE0NzgzNi8xODgwMzgyMS5wbmc=/347x500/ad6qkM.png',
            alt: 'Duskveil gameplayer'
        },
        {
            src: 'https://img.itch.zone/aW1hZ2UvMzE0NzgzNi8xODgwMzg1Mi5wbmc=/347x500/P8vvVf.png',
            alt: 'Duskveil paused'
        }
    ];

    return (
        <div className="carousel-container">
            <ImageCarousel images={images} />
        </div>
    );
}