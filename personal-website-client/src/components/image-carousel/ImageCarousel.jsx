// Special thanks to GreatFrontend for helping me become a better frontend engineer
// and providing great coding paradigms/conventions to follow.
// Carousel project is https://www.greatfrontend.com/questions/user-interface/image-carousel-iii

import { useState } from 'react';

import './ImageCarousel.css';

function getClassNames(...classNames) {
    return classNames.filter(Boolean).join(' ');
}

function shouldSlideLeft(curIndex, nextIndex, totalImages) {
    if (curIndex === totalImages - 1 && nextIndex === 0) {
        return true;
    }

    if (curIndex === 0 && nextIndex === totalImages - 1) {
        return false;
    }

    return curIndex < nextIndex;
}

export default function ImageCarousel({
    images
}) {
    const [curIndex, setCurIndex] = useState(0);
    const [nextIndex, setNextIndex] = useState(null);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const curImage = images[curIndex];
    const nextImage = nextIndex !== null ? images[nextIndex] : null;

    function changeImageIndex(index) {
        setNextIndex(index);
        requestAnimationFrame(() => {
            setIsTransitioning(true);
        })
    };

    // Which direction is the image sliding from
    const { exitClassName, enterClassName } = 
        nextIndex !== null && shouldSlideLeft(curIndex, nextIndex, images.length)
        ? {
            exitClassName: 'image-carousel__image--displaced-left',
            enterClassName: 'image-carousel__image--displaced-right'
        } 
        : {
            exitClassName: 'image-carousel__image--displaced-right',
            enterClassName: 'image-carousel__image--displaced-left'
        }

    return (
        <div className='image-carousel'>
            {/* Display the current image */}
            <img
                alt={curImage.alt}
                src={curImage.src}
                key={curImage.src}
                className={
                    getClassNames(
                        'image-carousel__image',
                        isTransitioning && exitClassName
                    )
                }
            />

            {/* Display the next image as part of the transition stage */}
            {
                nextImage !== null && (
                    <img
                        alt={nextImage.alt}
                        src={nextImage.src}
                        key={nextImage.src}
                        onTransitionEnd={() => {
                            setCurIndex(nextIndex);
                            setNextIndex(null);
                            setIsTransitioning(false);
                        }}
                        className={getClassNames(
                            'image-carousel__image',
                            !isTransitioning && enterClassName
                        )}
                    />
                )
            }
            <button
                aria-label='Previous image'
                disabled={isTransitioning}
                className='image-carousel__button image-carousel__button--prev'
                onClick={() => {
                    const nextIndex = (curIndex - 1 + images.length) % images.length;
                    changeImageIndex(nextIndex);
                }}>
                &lArr;
            </button>
            <div className='image-carousel__pages'>
                {
                    images.map(({alt, src}, index) => (
                        <button
                            className={getClassNames(
                                'image-carousel__pages__button',
                                index === curIndex && 'image-carousel__pages__button--active'
                            )}
                            aria-label={`Navigate to ${alt}`}
                            disabled={isTransitioning}
                            key={src}
                            onClick={() => {
                                changeImageIndex(index);
                            }}
                        />
                    ))
                }
            </div>
            <button
                aria-label='Next image'
                disabled={isTransitioning}
                className='image-carousel__button image-carousel__button--next'
                onClick={() => {
                    const nextIndex = (curIndex + 1) % images.length;
                    changeImageIndex(nextIndex);
                }}
            >
                &rArr;
            </button>
        </div>
    )
}