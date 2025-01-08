"use client"

import Link from "next/link";
import { useEffect, useState } from "react";

/* interface Product {
    _id: string;
    titles: string;
    description: string;
    price: number;
    reviews: number;
    images: string[];
} */

interface Product {
    id: number
    title: string
    body: string
}

const ProductItem = () => {
    const [products, setProducts] = useState<Product[]>([])
    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch('https://jsonplaceholder.typicode.com/comments?_limit=2')
            const data  = await res.json()

            setLoading(false)
            setProducts(data)
        }

        fetchData()
    }, [])

    if (loading) {
        return <div>Загрузка...</div>
    }

    return (
        <>
            {/* {products.map((product) => (
                <div key={product._id} className='flex items-center justify-center flex-col gap-5'>
                    <div className="flex flex-col gap-4">
                        <div className="relative w-[270px] h-[250px] bg-[#F5F5F5] rounded flex items-center justify-center group">
                            <Image 
                                src={product.images[0] || "/default-image.jpg"} 
                                alt={product.titles} 
                                width={190} 
                                height={180} 
                                className="object-contain" 
                            />
                            <div className="absolute top-3 right-3 w-[34px] h-[34px] bg-[#FFFFFF] rounded-full flex items-center justify-center cursor-pointer">
                                <Link href="/">Like</Link>
                            </div>

                            <div className="absolute top-[54px] right-3 w-[34px] h-[34px] bg-[#FFFFFF] rounded-full flex items-center justify-center cursor-pointer">
                                <Link href={`/product/${product._id}`}>Eye</Link>
                            </div>

                            <div className="absolute left-0 bottom-0 w-[270px] h-[41px] bg-[#000000] rounded-bl-[4px] rounded-br-[4px] flex items-center justify-center gap-2 cursor-pointer opacity-0 group-hover:opacity-100 duration-300">
                                <small className="text-[#FFFFFF] text-[12px] font-normal leading-[18px]">Add To Cart</small>
                            </div>

                        </div>

                        <div className="flex items-start justify-start flex-col gap-2">
                            <Link href={`/product/${product._id}`}>
                                <p className="text-[#000000] text-[16px] font-medium leading-[24px]">{product.titles}</p>
                            </Link>

                            <small className="text-[#DB4444] text-[16px] font-medium leading-[24px]">$ {product.price.toFixed(2)}</small>

                            <small className="text-[#000000] text-[14px] font-semibold leading-[21px] opacity-[50%]">({product.reviews})</small>
                        </div>
                    </div>
                </div>
            ))} */}

            <div className='flex items-center justify-center flex-wrap gap-10'>

                {products.map((product) => (
                    <div key={product.id} className='flex items-center justify-center flex-col gap-5'>

                        <span className='text-red-500 text-[26px] text-center leading-[24px]'>{product.id}</span>

                        <h2 className='text-[#000000] text-[24px] text-center leading-[24px]'>{product.title}</h2>

                        <p className='text-[#000000] text-[18px] text-center leading-[24px]'>{product.body}</p>

                        <Link href={`/product/${product.id}`} className='px-3 py-5 bg-indigo-500 rounded text-white font-semibold hover:bg-red-500 duration-300'>
                            Посмотреть подробнее
                        </Link>

                    </div>
                ))}

            </div>
        </>
    )
}

export default ProductItem;