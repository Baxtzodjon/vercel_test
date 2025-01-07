// components/SwiperComponent.tsx
"use client"
import { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { SwiperOptions } from "swiper/types";

// Интерфейс для данных
interface SlideData {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
}

interface SwiperComponentProps {
    slides: SlideData[];
}

const SwiperCmp: FC<SwiperComponentProps> = ({ slides }) => {

    // Параметры Swiper с адаптивной настройкой
    /* const swiperConfig: SwiperOptions = {
        centeredSlides: true,  // Центрирование слайдов
        loop: true,            // Зацикливание слайдов
        autoplay: {
            delay: 3000,         // Интервал автопереключения в миллисекундах
            disableOnInteraction: false, // Автопереключение не остановится при взаимодействии
        },
        spaceBetween: 30,      // Расстояние между слайдами
        direction: "horizontal",
        breakpoints: {
            320: {
                slidesPerView: 1,  // Для мобильных устройств 1 слайд
                spaceBetween: 10,  // Меньшее расстояние между слайдами
            },
            768: {
                slidesPerView: 2,  // Для планшетов 2 слайда
                spaceBetween: 20,  // Среднее расстояние
            },
            1024: {
                slidesPerView: 3,  // Для десктопов 3 слайда
                spaceBetween: 30,  // Большое расстояние
            },
            1400: {
                slidesPerView: 4,  // Для очень больших экранов 4 слайда
                spaceBetween: 40,  // Еще большее расстояние
            },
        },
    }; */

    /* const slidesData = [
        { id: 1, title: 'Слайд 1', imageUrl: '/images/slide1.jpg' },
        { id: 2, title: 'Слайд 2', imageUrl: '/images/slide2.jpg' },
        { id: 3, title: 'Слайд 3', imageUrl: '/images/slide3.jpg' },
    ]; */

    return (
        <div className="flex items-center justify-center">

            {/* <Swiper {...swiperConfig} className="flex">

                <div className="flex">

                    {slides.map((slide) => (
                        <SwiperSlide key={slide.id} className="flex">
                            <div className="flex">

                                <div className="flex text-center">
                                    <img
                                        src={slide.imageUrl}
                                        alt={slide.title}
                                        style={{ width: "100%", maxHeight: "400px", objectFit: "cover" }}
                                    />
                                    <h3>{slide.title}</h3>
                                    <p>{slide.description}</p>
                                </div>

                            </div>
                        </SwiperSlide>
                    ))}

                </div>

            </Swiper> */}

            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
            >
                {slides.map((slide) => (
                    <SwiperSlide key={slide.id}>
                        <div style={{ textAlign: 'center' }}>
                            <img src={slide.imageUrl} alt={slide.title} style={{ width: '450px', height: '450px' }} />
                            <h3>{slide.title}</h3>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

        </div>
    );
};

export default SwiperCmp;