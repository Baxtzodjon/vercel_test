"use client"

import Link from "next/link"

const Footer = () => {
    return (
        <footer className="w-full bg-[#000000] text-[#FFFFFF] flex justify-center flex-wrap gap-[87px] px-[5px] pt-20 pb-[124px] relative">

            <div className="flex flex-col gap-4 flex-wrap">

                <div className="flex flex-col flex-wrap gap-6">

                    <Link href="/">

                        <h4 className="text-[#FAFAFA] text-[20px] font-medium leading-[28px]">Logo</h4>

                    </Link>

                    <h4 className="text-[#FAFAFA] text-[20px] font-medium leading-[28px]">Subscribe</h4>

                    <p className="text-[#FAFAFA] text-[16px] font-normal leading-[24px]">Get 10% off your first order</p>

                </div>

                <div>

                    <input type="text" placeholder="Enter your email" className="w-[217px] h-[48px] bg-transparent rounded border-2 border-[#FAFAFA] outline-none text-[#FAFAFA] text-[16px] font-normal leading-[24px] px-4 focus:border-[#DB4444]" />

                </div>

            </div>

            <div className="flex flex-col flex-wrap gap-6">

                <h4 className="text-[#FAFAFA] text-[20px] font-medium leading-[28px]">Support</h4>

                <div className="flex justify-center flex-col flex-wrap gap-4">

                    <address className="text-[#FAFAFA] text-[16px] font-normal leading-[24px] not-italic">111 Bijoy sarani, Dhaka, <br />  DH 1515, Bangladesh.</address>

                    <a href="mailto:rasulovbaxtzod@gmail.com" className="text-[#FAFAFA] text-[16px] font-normal leading-[24px] hover:text-[#DB4444] transition-all">exclusive@gmail.com</a>

                    <a href="tel:+88015888889999" className="text-[#FAFAFA] text-[16px] font-normal leading-[24px] hover:text-[#DB4444] transition-all">+88015-88888-9999</a>

                </div>

            </div>

            <div className="flex flex-col flex-wrap gap-6">

                <h4 className="text-[#FAFAFA] text-[20px] font-medium leading-[28px]">Account</h4>

                <div className="flex justify-center flex-col flex-wrap gap-4">

                    <Link href="/" className="text-[#FAFAFA] text-[16px] font-normal leading-[24px] hover:text-[#DB4444] transition-all">My Account</Link>

                    <Link href="/" className="text-[#FAFAFA] text-[16px] font-normal leading-[24px] hover:text-[#DB4444] transition-all">Login / Register</Link>

                    <Link href="/" className="text-[#FAFAFA] text-[16px] font-normal leading-[24px] hover:text-[#DB4444] transition-all">Cart</Link>

                    <Link href="/" className="text-[#FAFAFA] text-[16px] font-normal leading-[24px] hover:text-[#DB4444] transition-all">Wishlist</Link>

                    <Link href="/" className="text-[#FAFAFA] text-[16px] font-normal leading-[24px] hover:text-[#DB4444] transition-all">Shop</Link>

                </div>

            </div>

            <div className="flex flex-col flex-wrap gap-6">

                <h4 className="text-[#FAFAFA] text-[20px] font-medium leading-[28px]">Quick Link</h4>

                <div className="flex justify-center flex-col flex-wrap gap-4">

                    <Link href="/" className="text-[#FAFAFA] text-[16px] font-normal leading-[24px] hover:text-[#DB4444] transition-all">Privacy Policy</Link>

                    <Link href="/" className="text-[#FAFAFA] text-[16px] font-normal leading-[24px] hover:text-[#DB4444] transition-all">Terms Of Use</Link>

                    <Link href="/" className="text-[#FAFAFA] text-[16px] font-normal leading-[24px] hover:text-[#DB4444] transition-all">FAQ</Link>

                    <Link href="/" className="text-[#FAFAFA] text-[16px] font-normal leading-[24px] hover:text-[#DB4444] transition-all">Contact</Link>

                </div>

            </div>

            <div className="absolute bottom-16 bg-[#FFFFFF] opacity-[40%] w-full h-[1px]"></div>

            <p className="absolute bottom-6 opacity-[60%] text-[#FFFFFF] text-[16px] font-normal leading-[24px]">&copy; Copyright Rimel 2022. All right reserved</p>

        </footer>
    )
}

export default Footer;