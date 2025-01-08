"use client"

import { Swiper, SwiperSlide } from "swiper/react";

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/free-mode'

import { FreeMode, Pagination } from "swiper/modules";
import { ServiceData } from "@/app/constants";
import Image from "next/image";

const ActiveSlider = () => {

    return (
        <div className="flex items-center justify-center flex-col h-screen bg-[#6c34af]">

            <Swiper
                modules={[FreeMode, Pagination]} // Подключаем модули
                direction="horizontal" // Устанавливаем горизонтальную прокрутку
                breakpoints={{
                    340: {
                        slidesPerView: 2,
                        spaceBetween: 15,
                    },
                    700: {
                        slidesPerView: 3,
                        spaceBetween: 15,
                    },
                }}
                freeMode={true}
                pagination={{ clickable: true }}
                className="max-w-[90%] lg:max-w-[80%]"
            >
                {ServiceData.map((item) => {
                    return (
                        <SwiperSlide key={item.id}>

                            <div className="flex items-center justify-center gap-[30px]">

                                <div className="flex flex-col gap-8">

                                    <div className="w-[370px] h-[430px] bg-[#F5F5F5] rounded flex items-end justify-center">

                                        <Image src="/images/founder.png" alt="founder image" width="236" height="391" />

                                    </div>

                                    <div className="flex flex-col gap-4">

                                        <div className="flex flex-col gap-2">

                                            <h4 className="text-[#000000] text-[32px] font-medium leading-[30px]" style={{ letterSpacing: "4%" }}>{item.name}</h4>

                                            <p className="text-[#000000] text-[16px] font-normal leading-[24px]">{item.title}</p>

                                        </div>

                                        <div className="flex gap-4">

                                            <a href="#">

                                                <Image src="/icons/icon_twitter_black.png" alt="twitter icon" width="24" height="24" />

                                            </a>

                                            <a href="#">

                                                <Image src="/icons/icon_instagram_black.png" alt="instagram icon" width="24" height="24" />

                                            </a>

                                            <a href="#">

                                                <Image src="/icons/icon_linkedin_black.png" alt="linkedin icon" width="24" height="24" />

                                            </a>

                                        </div>

                                    </div>

                                </div>

                            </div>

                        </SwiperSlide>
                    );
                })}
            </Swiper>

        </div>
    )
}

export default ActiveSlider;