// // app/categories/[category]/page.tsx
// "use client"
// import Image from 'next/image';
// import { notFound } from 'next/navigation';
// import { useEffect, useState } from 'react';

// interface Product {
//     title: string;
//     description: string;
//     price: string;
//     reviews: string;
//     image: string;
//     category: string;
// }

// interface CategoryPageProps {
//     params: {
//         category: string;
//     };
// }

// const CategoryPage = ({ params }: CategoryPageProps) => {
//     const { category } = params;

//     const [products, setProducts] = useState<Product[]>([]);

//     // Функция для загрузки продуктов из localStorage
//     useEffect(() => {
//         if (typeof window !== 'undefined') {
//             const allProducts: Product[] = JSON.parse(localStorage.getItem('products') || '[]');
//             const filteredProducts = allProducts.filter(product => product.category === category);
//             setProducts(filteredProducts);
    
//             if (filteredProducts.length === 0) {
//                 notFound(); // Если нет продуктов для этой категории
//             }
//         }
//     }, [category]);

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
//                             <Image src={product.image} alt={product.title} width={100} height={100} />
//                         </div>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// };

// export default CategoryPage;

const CategoryPage = () => {
    return (
        <div>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit sed quasi ad harum est accusantium iure distinctio obcaecati saepe, laudantium, rerum quisquam, numquam velit ducimus ipsa non tempore. Veniam, perspiciatis!</p>

        </div>
    )
}

export default CategoryPage;