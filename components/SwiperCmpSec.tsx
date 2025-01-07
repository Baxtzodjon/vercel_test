"use client"

import Image from 'next/image';
import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';

// Тип данных для слайдов
type SlideData = {
    id: number;
    title: string;
    description: string;
    image: string;
};

// Пример данных для слайдов
const slideData: SlideData[] = [
    { id: 1, title: 'Card 1', description: 'Description for Card 1', image: 'https://via.placeholder.com/300x200' },
    { id: 2, title: 'Card 2', description: 'Description for Card 2', image: 'https://via.placeholder.com/300x200' },
    { id: 3, title: 'Card 3', description: 'Description for Card 3', image: 'https://via.placeholder.com/300x200' },
    { id: 4, title: 'Card 4', description: 'Description for Card 4', image: 'https://via.placeholder.com/300x200' },
    { id: 5, title: 'Card 5', description: 'Description for Card 5', image: 'https://via.placeholder.com/300x200' },
    { id: 6, title: 'Card 6', description: 'Description for Card 6', image: 'https://via.placeholder.com/300x200' },
    { id: 7, title: 'Card 7', description: 'Description for Card 7', image: 'https://via.placeholder.com/300x200' },
    { id: 8, title: 'Card 8', description: 'Description for Card 8', image: 'https://via.placeholder.com/300x200' },
];

const CustomSlider = () => {
    // const [currentIndex, setCurrentIndex] = useState(0);
    // const startX = useRef(0); // Начальная позиция при касании или перетаскивании
    // const [isDragging, setIsDragging] = useState(false); // Статус перетаскивания

    // const cardsToShow = 4; // Количество карточек, которые мы показываем на экране

    // Функции для изменения слайда
    /* const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slideData.length);
    };

    const prevSlide = () => {
        setCurrentIndex(
            (prevIndex) => (prevIndex - 1 + slideData.length) % slideData.length
        );
    }; */

    const [currentIndex, setCurrentIndex] = useState(0);
    const [cardsToShow, setCardsToShow] = useState(4); // По умолчанию 4 карточки на экране

    // Функция для обновления количества карточек в зависимости от ширины экрана
    const updateCardsToShow = () => {
        const width = window.innerWidth;
        if (width >= 1200) {
            setCardsToShow(4); // Для больших экранов
        } else if (width >= 768) {
            setCardsToShow(3); // Для планшетов
        } else if (width >= 480) {
            setCardsToShow(2); // Для мобильных телефонов
        } else {
            setCardsToShow(1); // Для очень маленьких экранов
        }
    };

    useEffect(() => {
        updateCardsToShow();
        // Добавляем обработчик события изменения размера окна
        window.addEventListener('resize', updateCardsToShow);
        return () => {
            window.removeEventListener('resize', updateCardsToShow);
        };
    }, []);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slideData.length);
    };

    const prevSlide = () => {
        setCurrentIndex(
            (prevIndex) => (prevIndex - 1 + slideData.length) % slideData.length
        );
    };

    return (
        <>

            <div
                className="slider-container relative w-full max-w-[900px] mx-auto mt-10"
            >
                <div className="slider-wrapper scroll_blc">
                    <div
                        className="slider-content flex transition-transform duration-500"
                        style={{
                            transform: `translateX(-${(currentIndex * 100) / cardsToShow}%)`,
                        }}
                    >
                        {slideData.map((slide) => (
                            <div key={slide.id} className="slide flex-shrink-0 w-[25%] px-2">
                                <div className="card bg-white p-6 rounded-lg shadow-lg text-center">
                                    <img
                                        src={slide.image}
                                        alt={slide.title}
                                        className="w-full h-[200px] object-cover rounded-md mb-4"
                                    />
                                    <h3 className="text-2xl font-semibold text-gray-800 mb-2">{slide.title}</h3>
                                    <p className="text-gray-600">{slide.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <button
                    onClick={prevSlide}
                    className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
                >
                    &#8249;
                </button>
                <button
                    onClick={nextSlide}
                    className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
                >
                    &#8250;
                </button>
            </div>

            {/* <div className="slider-container relative w-full max-w-[1170px] mx-auto">
                <div className="slider-wrapper scroll_blc">
                    <div
                        className="slider-content flex transition-transform duration-500"
                        style={{
                            transform: `translateX(-${(currentIndex * 100) / cardsToShow} %)`,
                        }}
                    >
                        <div className="flex items-center justify-center gap-5 md:gap-10">
                            {slideData.map((slide) => (
                                <div
                                    key={slide.id}
                                    className="flex items-center justify-center flex-col gap-5 w-full md:w-auto"
                                >
                                    <div className="flex flex-col gap-4">
                                        <div className="relative w-full max-w-[260px] h-[250px] bg-[#F5F5F5] rounded flex items-center justify-center group">
                                            <img
                                                src={slide.image || '/default-image.jpg'}
                                                alt={slide.title}
                                                width={190}
                                                height={180}
                                                className="object-contain"
                                            />
                                            <div className="absolute top-3 right-3 w-[34px] h-[34px] bg-[#FFFFFF] rounded-full flex items-center justify-center cursor-pointer"></div>
                                            <div className="absolute top-[54px] right-3 w-[34px] h-[34px] bg-[#FFFFFF] rounded-full flex items-center justify-center cursor-pointer"></div>
                                            <Link
                                                href="/cart"
                                                className="absolute left-0 bottom-0 w-full h-[41px] bg-[#000000] rounded-bl-[4px] rounded-br-[4px] flex items-center justify-center gap-2 cursor-pointer opacity-0 group-hover:opacity-100 duration-300"
                                            >
                                                <Image src="/icons/white_cart.png" alt="icon cart" width="24" height="24" />
                                                <small className="text-[#FFFFFF] text-[12px] font-normal leading-[18px]">Add To Cart</small>
                                            </Link>
                                        </div>

                                        <div className="flex items-start justify-start flex-col gap-2">
                                            <Link href="/">
                                                <p className="text-[#000000] text-[16px] font-medium leading-[24px]">{slide.title}</p>
                                            </Link>
                                            <small className="text-[#DB4444] text-[16px] font-medium leading-[24px]">${slide.id}</small>
                                            <div className="flex gap-2">
                                                <div className="flex">
                                                    {[...Array(5)].map((_, index) => (
                                                        <svg
                                                            key={index}
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 24 24"
                                                            fill={index < slide.id ? '#FFAD33' : '#00000080'}
                                                            className="w-5 h-5"
                                                        >
                                                            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                                        </svg>
                                                    ))}
                                                </div>
                                                <small className="text-[#000000] text-[14px] font-semibold leading-[21px] opacity-[50%]">
                                                    ({slide.id})
                                                </small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div >
                </div >

                <button
                    className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
                    onClick={prevSlide}
                >
                    &#8249;
                </button>
                <button
                    className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
                    onClick={nextSlide}
                >
                    &#8250;
                </button>
            </div> */}

        </>
    );
};

export default CustomSlider;