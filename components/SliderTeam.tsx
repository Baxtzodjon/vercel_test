"use client"

import Image from "next/image"

const SliderTeam = () => {
    return (
        <>

            <div className="flex flex-col gap-8">

                <div className="w-[370px] h-[430px] bg-[#F5F5F5] rounded flex items-end justify-center">

                    <Image src="/images/founder.png" alt="founder image" width="236" height="391" />

                </div>

                <div className="flex flex-col gap-4">

                    <div className="flex flex-col gap-2">

                        <h4 className="text-[#000000] text-[32px] font-medium leading-[30px]" style={{ letterSpacing: "4%" }}>Tom Cruise</h4>

                        <p className="text-[#000000] text-[16px] font-normal leading-[24px]">Founder & Chairman</p>

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

        </>
    )
}

export default SliderTeam;