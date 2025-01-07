/* // app/categories/[category]/page.tsx
import { notFound } from 'next/navigation'

interface CategoryPageProps {
    params: {
        category: string
    }
}

const CategoryPage = ({ params }: CategoryPageProps) => {
    const { category } = params

    // Данные категорий
    const categories: { [key: string]: string[] } = {
        phones: ['iPhone', 'Samsung Galaxy', 'Google Pixel'],
        computers: ['MacBook', 'Windows PC', 'Chromebook'],
        smartWatches: ['Apple Watch', 'Samsung Galaxy Watch', 'Fitbit'],
        cameras: ['Canon EOS', 'Nikon D3500', 'Sony Alpha'],
        headphones: ['AirPods', 'Sony WH-1000XM4', 'Bose QC35'],
        gaming: ['PlayStation 5', 'Xbox Series X', 'Nintendo Switch'],
    }

    const products = categories[category]

    if (!products) {
        notFound()  // Если категория не найдена
    }

    return (
        <div>
            <h1>Категория: {category}</h1>

            <ul>
                {products.map((product, index) => (
                    <li key={index}>{product}</li>
                ))}
            </ul>
            
        </div>
    )
}

export default CategoryPage; */

// app/categories/[category]/page.tsx
// "use client";

// import { notFound } from 'next/navigation';
// import { useEffect, useState } from 'react';
// import { useParams } from 'next/navigation';  // Используем useParams

// interface Product {
//     title: string;
//     description: string;
//     price: string;
//     reviews: string;
//     image: string;
//     category: string;
// }

// const CategoryPage = () => {
//     // Используем хук useParams для получения параметров маршрута
//     const { category } = useParams(); // Хук извлекает параметры маршрута

//     const [products, setProducts] = useState<Product[]>([]);

//     useEffect(() => {
//         // Загружаем продукты из localStorage на основе категории
//         const allProducts: Product[] = JSON.parse(localStorage.getItem('products') || '[]');
//         const filteredProducts = allProducts.filter(product => product.category === category);
//         setProducts(filteredProducts);

//         if (filteredProducts.length === 0) {
//             notFound(); // Если нет продуктов для этой категории
//         }
//     }, [category]); // Обновляем список продуктов при изменении категории

//     if (!category) {
//         notFound(); // Если категория не определена, показываем 404
//     }

//     return (
//         <div>
//             <h1>Категория: {category}</h1>

//             <ul>
//                 {products.map((product, index) => (
//                     <li key={index}>
//                         <div>
//                             <h2>{product.title}</h2>
//                             <p>{product.description}</p>
//                             <p><strong>Цена:</strong> {product.price}</p>
//                             <p><strong>Отзывы:</strong> {product.reviews}</p>
//                             <img src={product.image} alt={product.title} width={100} />
//                         </div>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// };

// export default CategoryPage;

"use client";

import { notFound } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';  // Хук для получения параметров маршрута

interface Product {
    _id: string;
    title: string;
    description: string;
    price: string;
    reviews: string;
    images: string;
    image_second: string;
    image_third: string;
    catg_prod: string; // Категория продукта
}

const CategoryPage = () => {
    const { category } = useParams(); // Получаем параметр category через хук useParams
    const [products, setProducts] = useState<Product[]>([]); // Состояние для продуктов
    const [loading, setLoading] = useState<boolean>(true); // Состояние загрузки
    const [error, setError] = useState<string | null>(null); // Состояние для ошибок

    useEffect(() => {
        // Загрузка продуктов с сервера
        const fetchProducts = async () => {
            try {
                const response = await fetch('http://localhost:3000/api/product');
                const data = await response.json();

                if (data.success) {
                    // Фильтруем продукты по категории
                    const filteredProducts = data.data.filter(
                        (product: Product) => product.catg_prod === category
                    );

                    setProducts(filteredProducts);

                    if (filteredProducts.length === 0) {
                        notFound(); // Если продукты не найдены
                    }
                } else {
                    setError('Ошибка при загрузке данных');
                }
            } catch (error) {
                setError('Ошибка при загрузке данных');
            } finally {
                setLoading(false); // Окончание загрузки
            }
        };

        fetchProducts();
    }, [category]); // Запрос при изменении категории

    if (loading) {
        return <div>Загрузка...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    if (!category) {
        notFound(); // Если категория не определена
    }

    return (
        <div>
            <h1>Категория: {category}</h1>

            <ul>
                {products.map((product) => (
                    <li key={product._id}>
                        <div>
                            <h2>{product.title}</h2>
                            <p>{product.description}</p>
                            <p><strong>Цена:</strong> {product.price}</p>
                            <p><strong>Отзывы:</strong> {product.reviews}</p>
                            <img src={product.images} alt={product.title} width={100} />
                            <div>
                                <img src={product.image_second} alt="Second image" width={100} />
                                <img src={product.image_third} alt="Third image" width={100} />
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CategoryPage;