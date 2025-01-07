/* 'use client'; */

/* import { useState } from 'react';

const CategoriesPage = () => {
    const [categoryName, setCategoryName] = useState('');
    const [message, setMessage] = useState<string>('');

    const handleAddCategory = async () => {
        if (!categoryName) {
            setMessage('Category name is required');
            return;
        }

        const response = await fetch('/api/categories', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name: categoryName }),
        });

        const data = await response.json();

        if (response.ok) {
            setMessage('Category added successfully!');
            setCategoryName('');
        } else {
            setMessage(data.message || 'Error adding category');
        }
    };

    return (
        <div className='flex items-center justify-center flex-col gap-5'>

            <h1>Add Category</h1>

            <input
                type="text"
                value={categoryName}
                onChange={(e) => setCategoryName(e.target.value)}
                placeholder="Enter category name"
                className='w-[470px] h-[50px] rounded bg-[#F5F5F5] px-4 focus:outline-[#DB4444]'
            />

            <select name="catg_prod" id="" className="w-[470px] h-[50px] rounded bg-[#F5F5F5] px-4 focus:outline-[#DB4444]">

                <option value="phones">Phones</option>
                <option value="computers">Computers</option>
                <option value="smartwatch">SmartWatch</option>
                <option value="camera">Camera</option>
                <option value="headphones">HeadPhones</option>
                <option value="gaming">Gaming</option>

            </select>

            <button onClick={handleAddCategory}>Add Category</button>

            {message && <p>{message}</p>}

        </div>
    );
};

export default CategoriesPage; */

// app/admin/page.tsx
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

interface Product {
    title: string;
    description: string;
    price: string;
    reviews: string;
    image: string;
    category: string;
}

const AdminPage = () => {
    const [formData, setFormData] = useState<Product>({
        title: '',
        description: '',
        price: '',
        reviews: '',
        image: '',
        category: '',
    });

    /* const router = useRouter(); */

    // Функция для обновления состояния формы
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    // Функция для отправки формы
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Извлекаем данные из localStorage, добавляем новый продукт и сохраняем
        const existingProducts = JSON.parse(localStorage.getItem('products') || '[]');
        const updatedProducts = [...existingProducts, formData];
        localStorage.setItem('products', JSON.stringify(updatedProducts));

        // Перенаправляем после добавления продукта
        /* router.push('/'); */
    };

    return (
        <div>
            <h1>Страница админки</h1>
            <form className='flex items-center justify-center gap-[60px]' onSubmit={handleSubmit}>
                <div className='flex flex-col gap-10'>

                    <div>
                        <label>Название</label>
                        <input
                            type="text"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            required
                            className='w-[470px] h-[50px] rounded bg-[#F5F5F5] px-4 focus:outline-[#DB4444]'
                        />
                    </div>

                    <div>
                        <label>Описание</label>
                        <textarea
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            required
                            className='w-[470px] h-[50px] rounded bg-[#F5F5F5] px-4 focus:outline-[#DB4444]'
                        />
                    </div>

                    <div>
                        <label>Цена</label>
                        <input
                            type="text"
                            name="price"
                            value={formData.price}
                            onChange={handleChange}
                            required
                            className='w-[470px] h-[50px] rounded bg-[#F5F5F5] px-4 focus:outline-[#DB4444]'
                        />
                    </div>

                </div>

                <div className='flex flex-col gap-10'>

                    <div>
                        <label>Отзывы</label>
                        <input
                            type="text"
                            name="reviews"
                            value={formData.reviews}
                            onChange={handleChange}
                            required
                            className='w-[470px] h-[50px] rounded bg-[#F5F5F5] px-4 focus:outline-[#DB4444]'
                        />
                    </div>

                    <div>
                        <label>Ссылка на изображение</label>
                        <input
                            type="text"
                            name="image"
                            value={formData.image}
                            onChange={handleChange}
                            required
                            className='w-[470px] h-[50px] rounded bg-[#F5F5F5] px-4 focus:outline-[#DB4444]'
                        />
                    </div>

                    <div>
                        <label>Категория</label>
                        <select
                            name="category"
                            value={formData.category}
                            onChange={handleChange}
                            required
                            className='w-[470px] h-[50px] rounded bg-[#F5F5F5] px-4 focus:outline-[#DB4444]'
                        >
                            <option value="phones">Телефоны</option>
                            <option value="gaming">Игры</option>
                            <option value="headphones">Наушники</option>
                            <option value="smartWatches">Умные часы</option>
                            <option value="cameras">Камеры</option>
                            <option value="computers">Компьютеры</option>
                        </select>
                    </div>

                </div>
                <button type="submit">Добавить продукт</button>
            </form>
        </div>
    );
};

export default AdminPage;