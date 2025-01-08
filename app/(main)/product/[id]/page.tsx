// app/product/[id]/page.tsx

// import { notFound } from 'next/navigation'

// interface Product {
//     id: number
//     title: string
//     body: string
// }

// interface ProductPageProps {
//     params: {
//         id: string
//     }
// }

// const ProductPage = async ({ params }: ProductPageProps) => {
//     const { id } = params

//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)

//     if (!res.ok) {
//         notFound()  // Если товар не найден, показываем 404
//     }

//     const product: Product = await res.json()

//     return (
//         <div>
//             <h1>{product.title}</h1>

//             <p>{product.body}</p>
            
//             <p>Дополнительная информация о товаре...</p>
//         </div>
//     )
// }

// export default ProductPage;

const ProductPage = () => {

    return (
        <>

            <p>Дополнительная информация о товаре...</p>
            
        </>
    )
}

export default ProductPage;