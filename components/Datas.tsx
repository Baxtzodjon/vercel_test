// // app/page.tsx

'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

interface Product {
    id: number
    title: string
    body: string
}

interface DatasProps {
    url: string
}

const Datas = ({ url }: DatasProps) => {
    const [products, setProducts] = useState<Product[]>([])
    const [loading, setLoading] = useState<boolean>(true)

    // Функция для перемешивания данных
    const shuffleData = (data: Product[]) => {
        return data.sort(() => Math.random() - 0.5)
    }

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(url)
            const data = await res.json()
            const shuffledData = shuffleData(data)

            localStorage.setItem('products', JSON.stringify(shuffledData))

            setProducts(shuffledData)
            setLoading(false)

            console.log(data);
        }

        const savedProducts = localStorage.getItem('products');

        if (savedProducts) {
            setProducts(JSON.parse(savedProducts))
            setLoading(false)
        } else {
            fetchData();
        }
    }, [url]) // Зависимость от url, чтобы при его изменении перезапускать запрос

    if (loading) {
        return <div>Загрузка...</div>
    }

    return (
        <div className='flex flex-col gap-7 m-10'>
            <h1 className='text-[#000000] text-[32px] text-center leading-[24px]'>Главная страница</h1>

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

        </div>
    )
}

export default Datas;


// import { useState, useEffect } from 'react'
// import Link from 'next/link'

// interface Product {
//     id: number
//     title: string
//     body: string
// }

// const Datas = () => {
//     const [products, setProducts] = useState<Product[]>([])
//     const [loading, setLoading] = useState<boolean>(true)

//     // Функция для перемешивания данных
//     const shuffleData = (data: Product[]) => {
//         return data.sort(() => Math.random() - 0.5)
//     }

//     useEffect(() => {
//         const fetchData = async () => {
//             const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
//             const data = await res.json()
//             const shuffledData = shuffleData(data)

//             localStorage.setItem('products', JSON.stringify(shuffledData))

//             setProducts(shuffledData)
//             setLoading(false)
//         }

//         const savedProducts = localStorage.getItem('products');

//         if (savedProducts) {
//             setProducts(JSON.parse(savedProducts))
//             setLoading(false)
//         } else {
//             fetchData();
//         }
//     }, []) // Пустой массив в зависимостях - запрос выполняется один раз при монтировании компонента

//     if (loading) {
//         return <div>Загрузка...</div>
//     }

//     return (
//         <div className='flex flex-col gap-7 m-10'>

//             <h1 className='text-[#000000] text-[32px] text-center leading-[24px]'>Главная страница</h1>

//             <div className='flex items-center justify-center flex-wrap gap-10'>

//                 {products.map((product) => (

//                     <div key={product.id} className='flex items-center justify-center flex-col gap-5'>

//                         <span className='text-red-500 text-[26px] text-center leading-[24px]'>{product.id}</span>

//                         <h2 className='text-[#000000] text-[24px] text-center leading-[24px]'>{product.title}</h2>

//                         <p className='text-[#000000] text-[18px] text-center leading-[24px]'>{product.body}</p>

//                         <Link href={`/product/${product.id}`} className='px-3 py-5 bg-indigo-500 rounded text-white font-semibold hover:bg-red-500 duration-300'>Посмотреть подробнее</Link>

//                     </div>

//                 ))}

//             </div>

//         </div>
//     )
// }

// export default Datas;