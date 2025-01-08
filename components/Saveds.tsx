// // app/page.tsx

'use client'

const Saveds = () => {

    //exam/app/admin/orders/page.tsx
    /* "use client"
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Order } from "@/models/order";

const AdminOrdersPage = () => {
    const [orders, setOrders] = useState<Order[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    // Получаем список заказов с сервера (можно заменить на запрос к API)
    useEffect(() => {
        // Здесь, например, может быть запрос к вашему API, чтобы получить список заказов
        fetch('/api/orders') // пример запроса
            .then(res => res.json())
            .then(data => {
                setOrders(data.orders); // Сохранение полученных данных
                setLoading(false);
            })
            .catch(err => console.error('Ошибка при получении заказов:', err));
    }, []);

    // Обработка изменения статуса
    const handleStatusChange = async (orderId: string, newStatus: string) => {
        try {
            const response = await fetch(`/api/orders/${orderId}/status`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ status: newStatus }),
            });

            if (response.ok) {
                const updatedOrder = await response.json();
                setOrders((prevState) =>
                    prevState.map((order) =>
                        order._id === orderId ? updatedOrder : order
                    )
                );
            } else {
                console.error('Ошибка при обновлении статуса');
            }
        } catch (err) {
            console.error('Ошибка при отправке запроса на изменение статуса:', err);
        }
    };

    return (
        <div className="p-8">
            <h1 className="text-2xl font-semibold mb-4">Заказы</h1>
            <table className="table-auto w-full">
                <thead>
                    <tr>
                        <th className="border px-4 py-2">Дата</th>
                        <th className="border px-4 py-2">Пользователь</th>
                        <th className="border px-4 py-2">Товары</th>
                        <th className="border px-4 py-2">Статус</th>
                        <th className="border px-4 py-2">Действия</th>
                    </tr>
                </thead>
                <tbody>
                    {loading ? (
                        <tr>
                            <td colSpan={5} className="text-center">Загрузка...</td>
                        </tr>
                    ) : (
                        orders.map((order) => (
                            <tr key={order._id} className={getStatusClass(order.status)}>
                                <td className="border px-4 py-2">{order.date}</td>
                                <td className="border px-4 py-2">{order.userId}</td>
                                <td className="border px-4 py-2">{order.products.join(', ')}</td>
                                <td className="border px-4 py-2">
                                    {order.status}
                                </td>
                                <td className="border px-4 py-2">
                                    <button
                                        className="bg-blue-500 text-white px-2 py-1 rounded"
                                        onClick={() => handleStatusChange(order._id, 'pending')}
                                    >
                                        В обработке
                                    </button>
                                    <button
                                        className="bg-green-500 text-white px-2 py-1 rounded ml-2"
                                        onClick={() => handleStatusChange(order._id, 'delivered')}
                                    >
                                        Доставлено
                                    </button>
                                </td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
        </div>
    );
};

// Функция для добавления стилей на основе статуса заказа
const getStatusClass = (status: string) => {
    switch (status) {
        case 'new':
            return 'bg-green-200';
        case 'pending':
            return 'bg-yellow-200';
        case 'delivered':
            return 'bg-white';
        default:
            return '';
    }
};

export default AdminOrdersPage; */


    // app/admin/page.tsx
    // 'use client'

    // import { Banner } from '@/models/banner'
    // import Image from 'next/image'
    // import { useEffect, useState } from 'react'

    // const AdminPage = () => {
    //     const [category, setCategory] = useState('')
    //     const [product, setProduct] = useState('')
    //     const [message, setMessage] = useState('')

    //     const handleSubmit = async (e: React.FormEvent) => {
    //         e.preventDefault()

    //         const res = await fetch('/api/categories', {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             },
    //             body: JSON.stringify({ category, product }),
    //         })

    //         const data = await res.json()

    //         if (res.ok) {
    //             setMessage('Продукт добавлен успешно')
    //         } else {
    //             setMessage(`Ошибка: ${data.message}`)
    //         }
    //     }


    //     const [bannerControl, setBannerControl] = useState<Banner[]>([]);
    //     const [isModalOpen, setIsModalOpen] = useState(false);
    //     const [isLoading, setIsLoading] = useState(false);
    //     const [showDropdown, setShowDropdown] = useState<boolean[]>([]);
    //     const [showPopup, setShowPopup] = useState(false);
    //     const [showConfirm, setShowConfirm] = useState(false);

    //     useEffect(() => {
    //         fetch('http://localhost:3000/api/banner')
    //             .then((res) => res.json())
    //             .then((data) => {
    //                 setBannerControl(data.data)
    //                 console.log(data.data);
    //                 setShowDropdown(new Array(data.data.length).fill(false));
    //             })
    //             .catch((error) => {
    //                 console.error('Ошибка:', error);
    //             })
    //     }, [])

    //     const handleDropdownToggle = (index: number) => {
    //         setShowDropdown((prevState) => {
    //             const newState = new Array(bannerControl.length).fill(false);
    //             newState[index] = !prevState[index];
    //             return newState;
    //         });
    //     };


    //     const handleChangeClick = () => {
    //         setShowPopup(true);
    //         setShowDropdown(new Array(bannerControl.length).fill(false));
    //     };

    //     const handleClosePopup = () => {
    //         setShowPopup(false);
    //     };

    //     const handleDeleteClick = () => {
    //         setShowConfirm(true);
    //         setShowDropdown(new Array(bannerControl.length).fill(false));
    //     };

    //     const handleCloseConfirm = () => {
    //         setShowConfirm(false);
    //     };

    //     const handleConfirmDelete = () => {
    //         console.log("Banner Deleted");
    //         setShowConfirm(false);
    //     };

    //     return (
    //         <>


    //             <h1 className="text-[#FFFFFF] text-[32px] font-semibold leading-[24px]">All Banners</h1>

    //             <div className="flex items-center justify-center gap-10">

    //                 {bannerControl.map((item, index) => (

    //                     <div className="relative max-w-sm rounded overflow-hidden shadow-lg bg-white transform transition-all hover:scale-105 hover:shadow-2xl" key={item?._id}>

    //                         <Image src={`/uploads/${item.image}`} alt="Banner Image" width={1200} height={344} className="w-full h-48 object-cover" />

    //                         <div className="absolute top-2 right-2">

    //                             <button onClick={() => handleDropdownToggle(index)} className="text-gray-500 hover:text-black p-2 rounded-full">

    //                                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="white">
    //                                     <circle cx="12" cy="4" r="2" />
    //                                     <circle cx="12" cy="12" r="2" />
    //                                     <circle cx="12" cy="20" r="2" />
    //                                 </svg>

    //                             </button>

    //                             {showDropdown[index] && (

    //                                 <div className="absolute top-10 right-0 bg-white shadow-md rounded-lg p-2 space-y-2">

    //                                     <button
    //                                         onClick={handleChangeClick}
    //                                         className="block w-full text-left text-blue-500 hover:bg-gray-100 p-2 rounded-lg"
    //                                     >
    //                                         Change
    //                                     </button>

    //                                     <button
    //                                         onClick={handleDeleteClick}
    //                                         className="block w-full text-left text-red-500 hover:bg-gray-100 p-2 rounded-lg"
    //                                     >
    //                                         Delete
    //                                     </button>

    //                                 </div>
    //                             )}

    //                         </div>

    //                     </div>

    //                 ))}

    //             </div>

    //             {showPopup && (

    //                 <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center z-50">

    //                     <div className="relative bg-white p-6 rounded-lg shadow-lg w-1/3">

    //                         <h2 className="text-lg font-semibold mb-4">Change Banner</h2>

    //                         <span className="absolute top-[15px] right-[15px] text-[32px] text-[#DB4444] hover:text-[#b83a3a] cursor-pointer" onClick={handleClosePopup}>&times;</span>

    //                         <form action="" className="flex justify-center flex-col gap-5">

    //                             <div className="bg_inp w-full p-5 bg-white rounded-lg font-mono flex flex-col gap-2">

    //                                 <label htmlFor="image" className="block text-white text-sm font-bold">Change Banner Image</label>

    //                                 <input type="file" name="image" id="image" accept="image/*" className="file:bg-gray-100 file:px-6 file:py-2 file:border file:border-gray-300 file:rounded-lg file:text-gray-700 file:cursor-pointer file:shadow-lg bg-white text-gray-700 rounded-lg cursor-pointer hover:shadow-lg duration-300 ease-in-out" required />

    //                             </div>

    //                             <button type="submit" className="text-sm text-white font-semibold w-full h-[50px] px-4 py-2 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-[#DB4444] hover:shadow-lg hover:border-blue-300 bg-[#DB4444]" disabled={isLoading}>{isLoading ? (
    //                                 <div className="btn_loader"></div>
    //                             ) : (
    //                                 "Change Banner"
    //                             )}</button>

    //                         </form>

    //                     </div>

    //                 </div>
    //             )}

    //             {showConfirm && (

    //                 <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center z-50">

    //                     <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">

    //                         <h2 className="text-lg font-semibold mb-4">Are you sure you want to delete this banner?</h2>

    //                         <div className="flex justify-between">

    //                             <button
    //                                 /* onClick={handleConfirmDelete} */
    //                                 /* onClick={() => handleDeleteBanner(item?._id)} */
    //                                 className="bg-[#DB4444] text-white p-2 rounded-lg w-1/3 hover:bg-[#b83a3a]"
    //                             >
    //                                 Yes
    //                             </button>

    //                             <button
    //                                 onClick={handleCloseConfirm}
    //                                 className="bg-[#000000] text-white p-2 rounded-lg w-1/3 hover:bg-gray-600"
    //                             >
    //                                 No
    //                             </button>

    //                         </div>

    //                     </div>

    //                 </div>
    //             )}


    //             <h1>Админ панель</h1>
    //             <form onSubmit={handleSubmit}>
    //                 <div>
    //                     <label>
    //                         Категория:
    //                         {/* <input
    //                             type="text"
    //                             value={category}
    //                             onChange={(e) => setCategory(e.target.value)}
    //                         /> */}

    //                         <select name="" id="" onChange={(e) => setCategory(e.target.value)}>

    //                             <option value={category}>gaming</option>

    //                         </select>
    //                     </label>
    //                 </div>
    //                 <div>
    //                     <label>
    //                         Продукт:
    //                         <input
    //                             type="text"
    //                             value={product}
    //                             onChange={(e) => setProduct(e.target.value)}
    //                         />
    //                     </label>
    //                 </div>
    //                 <button type="submit">Добавить</button>
    //             </form>
    //             {message && <p>{message}</p>}
    //         </>
    //     )
    // }

    // export default AdminPage;

    //exam/app/admin/all-products/page.tsx
    // const handleSubmit = async (e: React.FormEvent) => {
    //     e.preventDefault();
    //     setIsLoading(true);
    //     console.log("Отправка обновлений продукта", formData);

    //     if (!formData._id) {
    //         setMessage('Отсутствует ID продукта!');
    //         setIsLoading(false);
    //         return;
    //     }

    //     const { _id, ...updatedProductData } = formData;

    //     try {
    //         const response = await fetch(`/api/product/${_id}`, {
    //             method: 'PATCH',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             },
    //             body: JSON.stringify(updatedProductData),
    //         });

    //         if (!response.ok) {
    //             throw new Error(`Ошибка: ${response.statusText}`);
    //         }

    //         const data = await response.json();
    //         console.log("Ответ сервера:", data);

    //         if (data.success) {
    //             setMessage('Продукт успешно обновлен!');
    //             setProductControl((prevState) =>
    //                 prevState.map((product) =>
    //                     product._id === formData._id ? formData : product
    //                 )
    //             );
    //             setIsModalOpen(false);
    //         } else {
    //             setMessage(data.message || 'Не удалось обновить продукт.');
    //         }
    //     } catch (error) {
    //         console.error('Ошибка при обновлении продукта:', error);
    //         setMessage('Ошибка при обновлении продукта. Попробуйте снова.');
    //     } finally {
    //         setIsLoading(false);
    //     }
    // };

    // const handleSubmit = async (e: React.FormEvent) => {
    //     e.preventDefault();
    //     setIsLoading(true);

    //     const formDataToUpload = new FormData();

    //     // Проверка на наличие файлов
    //     if (formData.images) {
    //         formDataToUpload.append("image", formData.images);
    //     }

    //     if (formData.image_second) {
    //         formDataToUpload.append("image", formData.image_second);
    //     }

    //     try {
    //         // Отправляем запрос на загрузку файлов
    //         const uploadResponse = await fetch('/api/upload', {
    //             method: 'POST',
    //             body: formDataToUpload,
    //         });

    //         if (!uploadResponse.ok) {
    //             throw new Error('Ошибка загрузки файла.');
    //         }

    //         const uploadData = await uploadResponse.json();

    //         if (uploadData.success) {
    //             // Используем путь к загруженному файлу
    //             const filePath = uploadData.data;

    //             // Обновляем данные о продукте с новым путем к файлу
    //             const updatedProductData = {
    //                 ...formData,
    //                 images: filePath, // Новый путь к файлу

    //                 // Если у вас есть другие данные (например, title, description), их тоже нужно добавить:
    //                 title: formData.titles,      // Заголовок продукта
    //                 description: formData.description, // Описание продукта
    //                 // Можно добавить и другие поля из формы по аналогии, если они присутствуют
    //             };

    //             // Отправляем PATCH запрос для обновления продукта
    //             const response = await fetch(`/api/product/${formData._id}`, {
    //                 method: 'PATCH',
    //                 headers: {
    //                     'Content-Type': 'application/json',
    //                 },
    //                 body: JSON.stringify(updatedProductData),
    //             });

    //             if (!response.ok) {
    //                 throw new Error('Ошибка при обновлении продукта');
    //             }

    //             const data = await response.json();
    //             if (data.success) {
    //                 setMessage('Продукт успешно обновлен!');
    //                 setIsModalOpen(false);
    //             } else {
    //                 setMessage('Не удалось обновить продукт');
    //             }
    //         } else {
    //             setMessage('Ошибка при загрузке файла');
    //         }
    //     } catch (error) {
    //         console.error('Ошибка при загрузке и обновлении:', error);
    //         setMessage('Ошибка при загрузке и обновлении. Попробуйте снова.');
    //     } finally {
    //         setIsLoading(false);
    //     }
    // };

    // const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    //     const { name, value } = e.target;
    //     setFormData((prevState) => ({
    //         ...prevState,
    //         [name]: value,
    //     }));
    // };

    // const handleSubmit = async (e: React.FormEvent) => {
    //     e.preventDefault();
    //     setIsLoading(true);
    //     console.log("Отправка обновлений продукта", formData);

    //     if (!formData._id) {
    //         setMessage('Отсутствует ID продукта!');
    //         setIsLoading(false);
    //         return;
    //     }

    //     const { _id, ...updatedProductData } = formData;

    //     try {
    //         // Загружаем изображения, если они выбраны
    //         if (images.images && images.image_second && images.image_third) {
    //             const uploadImages = async (image: File | null) => {
    //                 const formData = new FormData();
    //                 formData.append("image", image!);

    //                 const response = await fetch("/api/upload", {
    //                     method: "POST",
    //                     body: formData,
    //                 });
    //                 const data = await response.json();
    //                 return data.data;
    //             };

    //             const uploadedImageFirst = await uploadImages(images.images);
    //             const uploadedImageSecond = await uploadImages(images.image_second);
    //             const uploadedImageThird = await uploadImages(images.image_third);

    //             // Добавляем пути к изображениям в данные продукта
    //             updatedProductData.images = uploadedImageFirst;
    //             updatedProductData.image_second = uploadedImageSecond;
    //             updatedProductData.image_third = uploadedImageThird;

    //             // Обновляем данные продукта
    //             const response = await fetch(`localhost:3000/api/product/${formData._id}`, {
    //                 method: 'PATCH',
    //                 headers: {
    //                     'Content-Type': 'application/json',
    //                 },
    //                 body: JSON.stringify(updatedProductData),
    //             });

    //             if (!response.ok) {
    //                 throw new Error(`Ошибка: ${response.statusText}`);
    //             }

    //             const data = await response.json();
    //             console.log("Ответ сервера:", data);

    //             if (data.success) {
    //                 setMessage('Продукт успешно обновлен!');
    //                 setProductControl((prevState) =>
    //                     prevState.map((product) =>
    //                         product._id === formData._id ? formData : product
    //                     )
    //                 );
    //                 setIsModalOpen(false);
    //             } else {
    //                 setMessage(data.message || 'Не удалось обновить продукт.');
    //             }
    //         } else {
    //             setMessage('Пожалуйста, выберите все изображения.');
    //         }
    //     } catch (error) {
    //         console.error('Ошибка при обновлении продукта:', error);
    //         setMessage('Ошибка при обновлении продукта. Попробуйте снова.');
    //     } finally {
    //         setIsLoading(false);
    //     }
    // };

    // const handleSubmit = async (e: React.FormEvent) => {
    //     e.preventDefault();
    //     setIsLoading(true);
    //     console.log("Отправка обновлений продукта", formData);

    //     if (!formData._id) {
    //         setMessage('Отсутствует ID продукта!');
    //         setIsLoading(false);
    //         return;
    //     }

    //     const { _id, ...updatedProductData } = formData;

    //     try {
    //         // Функция для загрузки изображений
    //         const uploadImage = async (image: File | null) => {
    //             if (!image) return null; // Если изображение не выбрано, возвращаем null

    //             const formData = new FormData();
    //             formData.append("image", image);

    //             const response = await fetch("/api/upload", {
    //                 method: "POST",
    //                 body: formData,
    //             });
    //             const data = await response.json();

    //             if (data.success) {
    //                 return data.data; // Вернем URL изображения после загрузки
    //             } else {
    //                 throw new Error(data.message || 'Ошибка загрузки изображения');
    //             }
    //         };

    //         // Загружаем изображения
    //         const uploadedImageFirst = await uploadImage(images.images);
    //         const uploadedImageSecond = await uploadImage(images.image_second);
    //         const uploadedImageThird = await uploadImage(images.image_third);

    //         // Добавляем пути к загруженным изображениям
    //         if (uploadedImageFirst && uploadedImageSecond && uploadedImageThird) {
    //             updatedProductData.images = uploadedImageFirst;
    //             updatedProductData.image_second = uploadedImageSecond;
    //             updatedProductData.image_third = uploadedImageThird;

    //             // Отправляем PATCH-запрос для обновления продукта
    //             const response = await fetch(`http://localhost:3000/api/product/${formData._id}`, {
    //                 method: 'PATCH',
    //                 headers: {
    //                     'Content-Type': 'application/json',
    //                 },
    //                 body: JSON.stringify(updatedProductData),
    //             });

    //             if (!response.ok) {
    //                 throw new Error(`Ошибка: ${response.statusText}`);
    //             }

    //             const data = await response.json();
    //             if (data.success) {
    //                 setMessage('Продукт успешно обновлен!');
    //                 setProductControl((prevState) =>
    //                     prevState.map((product) =>
    //                         product._id === formData._id ? { ...product, ...updatedProductData } : product
    //                     )
    //                 );
    //                 setIsModalOpen(false);
    //             } else {
    //                 setMessage(data.message || 'Не удалось обновить продукт.');
    //             }
    //         } else {
    //             setMessage('Пожалуйста, выберите все изображения.');
    //         }
    //     } catch (error) {
    //         console.error('Ошибка при обновлении продукта:', error);
    //         setMessage('Ошибка при обновлении продукта. Попробуйте снова.');
    //     } finally {
    //         setIsLoading(false);
    //     }
    // };

    /* return */
    {/* <input
        type="text"
        name="image_third"
        value={formData.image_third}
        onChange={handleInputChange}
        className="custom-input w-full p-2 border border-gray-300 rounded-md shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-[#DB4444] hover:shadow-lg hover:border-blue-300 bg-gray-100"
        id="image_third"
        required
    /> */}

    {/* <input
        type="text"
        name="image_second"
        value={formData.image_second}
        onChange={handleInputChange}
        className="custom-input w-full p-2 border border-gray-300 rounded-md shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-[#DB4444] hover:shadow-lg hover:border-blue-300 bg-gray-100"
        id="image_second"
        required
    /> */}

    {/* <input
        type="text"
        name="images"
        value={formData.images}
        onChange={handleInputChange}
        className="custom-input w-full p-2 border border-gray-300 rounded-md shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-[#DB4444] hover:shadow-lg hover:border-blue-300 bg-gray-100"
        id="images"
        required
    /> */}

    //exam/app/admin/add-products/page.tsx
    {/* smartwatch */ } {/* SmartWatch */ }
    {/* button Send {addProduct} */ }

    // exam/app/cart/page.tsx
    /* const handleManualQuantityChange = (productId: string, value: string) => {
        const quantity = Math.max(1, parseInt(value)); // Ограничиваем минимальное значение на 1
        setQuantities((prevQuantities) => ({
            ...prevQuantities,
            [productId]: quantity,
        }));
    }; */

    /* const calculateTotal = () => {
        let subtotalAmount = 0;
    
        // Перебираем все товары в корзине и рассчитываем subtotal без учета количества
        cart.forEach((product) => {
            // Суммируем только базовые цены товаров без учета их количества
            subtotalAmount += parseFloat(product.price);
        });
    
        // Устанавливаем новый subtotal
        setSubtotal(subtotalAmount);
    
        // Total остается с учетом количества и добавлением стоимости доставки
        let totalAmount = 0;
        cart.forEach((product) => {
            const quantity = quantities[product._id] || 1;
            totalAmount += parseFloat(product.price) * quantity;
        });
    
        // Устанавливаем итоговую сумму с доставкой
        setTotal(totalAmount + shopping); // Добавляем стоимость доставки к total
    }; */

    // exam/app/search/page.tsx
    // useEffect(() => {
    //     const fetchProducts = async () => {
    //         try {
    //             const res = await fetch("http://localhost:3000/api/product");
    //             const data = await res.json();
    //             if (data.success && data.data) {
    //                 setProducts(data.data);
    //             }
    //         } catch (error) {
    //             console.error("Error fetching products:", error);
    //         } finally {
    //             setLoading(false);
    //         }
    //     };

    //     fetchProducts();
    // }, []);

    // exam/app/contact/page.tsx
    // const [btnText, setBtnText] = useState('Send Message');
    // const [isSubmitting, setIsSubmitting] = useState(false);

    // async function handleSubmit(event: any) {
    //     event.preventDefault();

    //     if (isSubmitting) return;
    //     setIsSubmitting(true);

    //     const formData = new FormData(event.target);
    //     formData.append("access_key", "0d610a51-d65d-4a3b-93a8-2e54da1bc333");

    //     const object = Object.fromEntries(formData);
    //     const json = JSON.stringify(object);

    //     try {
    //         const response = await fetch("https://api.web3forms.com/submit", {
    //             method: "POST",
    //             headers: {
    //                 "Content-Type": "application/json",
    //                 Accept: "application/json",
    //             },
    //             body: json,
    //         });

    //         const result = await response.json();
    //         if (result.success) {
    //             console.log(result);
    //             setBtnText("Message Sent!");
    //             setTimeout(() => setBtnText("Send Message"), 3000);
    //         } else {
    //             setBtnText(result.message);
    //         }
    //     } catch (error) {
    //         console.error("Error:", error);
    //         setBtnText("Something went wrong. Please try again.");
    //     } finally {
    //         setIsSubmitting(false);
    //     }
    // }

    {/* <button type="submit" className="w-full lg:w-[215px] h-[56px] bg-[#DB4444] rounded text-[#FFFFFF] text-[16px] font-medium leading-[24px] hover:bg-[#b83a3a]" disabled={isSubmitting}>{btnText}</button> */ }

    // emailjs.com
    /* const templateParams = {
            name,
            email,
            phone,
            message,
        };

        emailjs
            .send(
                "service_sha512n", // Замените на ваш service ID
                "template_lpfgy3w", // Замените на ваш template ID
                templateParams,
                "B8Vj1n9a77DivjGuN" // Замените на ваш user ID
            )
            .then((response) => {
                alert("Message sent successfully!");
                console.log("Message sent successfully:", response);
            })
            .catch((error) => {
                alert("Failed to send message. Please try again later.");
                console.log("Failed to send message:", error);
            }); */

    // exam/app/admin/page.tsx
    // const dashboard_info = [
    //     { title: 'Total Sales', num: '$7890', bgColor: 'bg-[#000000]', textColor: 'text-white' },
    //     { title: 'Orders', num: '789', bgColor: 'bg-white', textColor: 'text-[#000000]' },
    // ];

    /*  */

    // exam/app/admin/add-products/page.tsx

    // const [file, setFile] = useState<File | null>(null);
    // const [addProduct, setAddProduct] = useState('Send');

    /* const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            setFile(event.target.files[0]);
        }
    };

    async function handleSubmit(e: any) {
        e.preventDefault();

        const fm = new FormData(e.target);

        const product: any = {};

        fm.forEach((val: any, key: any) => (product[key] = val));

        try {
            if (!file) {
                setMessage("Please select a file.");
                return;
            }
    
            const formData = new FormData();
            formData.append("image", file);
    
            const res = await fetch("/api/upload", {
                method: "POST",
                body: formData,
            });
    
            console.log(res);
    
            const data = await res.json();
    
            product.images = data.data;
            product.image_second = data.data;
            product.image_third = data.data;
    
            console.log(data);

            const response = await fetch('http://localhost:3000/api/product', {
                method: "POST",
                body: JSON.stringify(product),
                headers: {
                    "Content-Type": "application/json"
                }
            })

            if (!response.ok) {
                const errorData = await response.json();
                setMessage(errorData.message || "Image upload failed");
                return;
            }

            const product_data = await response.json();
            setMessage(product_data.message);
        } catch (error) {
            setMessage("Something went wrong: " + error);
        }
    } */

    /* async function onSubmit(e: any) {
        e.preventDefault();

        const fm = new FormData(e.target);

        const product: any = {};

        fm.forEach((val: any, key: any) => product[key] = val);

        const res = await fetch('http://localhost:3000/api/product', {
            method: "POST",
            body: JSON.stringify(product),
            headers: {
                "Content-Type": "application/json"
            }
        })

        const result = await res.json();

        if (result.success) {
            console.log(result);
            setAddProduct(result.message);
        } else {
            setAddProduct(result.message);
        }

        console.log(res);
    } */

    //app/product/[id]/route.ts
    // export const GET = async (res: NextResponse, req: NextRequest) => {
    //     try {
    //         const client = await clientPromise;
    //         const db = client.db("mydatabase");
    //         const product = await db.collection("product").find().toArray();
    //         return NextResponse.json({ success: true, data: product, message: "got product" });
    //     } catch (e: any) {
    //         return NextResponse.json({ success: false, message: e.message });
    //     }
    // };

    // export const PATCH = async (req: NextRequest, { params }: { params: { id: string } }) => {
    //     try {
    //         const client = await clientPromise;
    //         const db = client.db("mydatabase");
    //         const body = await req.json(); // Данные, которые мы будем обновлять
    //         const productId = params.id;  // Получаем ID из URL

    //         const updatedProduct = await db.collection("product").updateOne(
    //             { _id: new ObjectId(productId) }, // Находим продукт по ID
    //             { $set: body } // Обновляем данные
    //         );

    //         if (updatedProduct.matchedCount === 0) {
    //             return NextResponse.json({ success: false, message: "Product not found" });
    //         }

    //         return NextResponse.json({ success: true, message: "Product updated successfully" });
    //     } catch (e: any) {
    //         return NextResponse.json({ success: false, message: e.message });
    //     }
    // };

    //app/upload/route.ts
    // Основной обработчик POST запроса для загрузки файлов
    // export async function POST(req: Request) {
    //     try {
    //         // Убедимся, что директория для загрузки существует
    //         await ensureUploadDirExists();

    //         const formData = await req.formData();
    //         const file = formData.get("image") as File; // Получаем файл из формы

    //         if (!file) {
    //             return NextResponse.json(
    //                 { success: false, message: "No file uploaded" },
    //                 { status: 400 }
    //             );
    //         }

    //         // Генерация уникального имени для файла с использованием временной метки
    //         const fileExtension = path.extname(file.name); // Получаем расширение файла
    //         const timestamp = Date.now(); // Получаем текущую временную метку (в миллисекундах)
    //         const fileName = `${timestamp}${fileExtension}`; // Генерируем уникальное имя файла

    //         // Путь для сохранения файла
    //         const filePath = path.join(uploadDir, fileName);

    //         // Чтение данных из файла
    //         const buffer = await file.arrayBuffer();
    //         await fs.writeFile(filePath, Buffer.from(buffer));

    //         // Относительный путь, который будет возвращен
    //         const relativePath = `/uploads/${fileName}`;

    //         return NextResponse.json({
    //             success: true,
    //             message: "Image uploaded successfully",
    //             data: relativePath, // Возвращаем относительный путь
    //         });
    //     } catch (error: any) {
    //         return NextResponse.json(
    //             { success: false, message: error.message },
    //             { status: 500 }
    //         );
    //     }
    // }

    return (
        <div>

            {/* exam/app/admin/page.tsx */}
            {/* <div className="p-6 bg-gray-100 min-h-screen">
                <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
                    <h1 className="text-2xl font-semibold mb-6">Админ панель</h1>
                    {error ? (
                        <p className="text-red-500">{error}</p>
                    ) : (
                        <div className="space-y-4">
                            <div className="flex justify-between">
                                <span className="font-semibold">Активные пользователи:</span>
                                <span>{stats.activeUsers}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="font-semibold">Общее количество пользователей:</span>
                                <span>{stats.totalUsers}</span>
                            </div>
                        </div>
                    )}
                </div>
            </div> */}


            {/* exam/app/admin/add-products/page.tsx */}
            {/* <div className="w-full p-5 bg-white rounded-lg font-mono flex flex-col gap-2">

                <label htmlFor="image" className="block text-gray-700 text-sm font-bold">Image First</label>

                <input
                    className="text-sm custom-input w-full h-[50px] px-4 py-2 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-[#DB4444] hover:shadow-lg hover:border-blue-300 bg-gray-100"
                    type="text"
                    placeholder="Enter image url here"
                    name="images"
                    id="image"
                    required
                />

            </div> */}

            {/* <div className="w-full p-5 bg-white rounded-lg font-mono flex flex-col gap-2">

                <label htmlFor="image_sec" className="block text-gray-700 text-sm font-bold">Image Second</label>

                <input type="text" name="image_second" id="image_sec" className="file:bg-gray-100 file:px-6 file:py-2 file:border file:border-gray-300 file:rounded-lg file:text-gray-700 file:cursor-pointer file:shadow-lg bg-white text-gray-700 rounded-lg cursor-pointer hover:shadow-lg duration-300 ease-in-out" required />

            </div>

            <div className="w-full p-5 bg-white rounded-lg font-mono flex flex-col gap-2">

                <label htmlFor="image_thr" className="block text-gray-700 text-sm font-bold">Image Third</label>

                <input type="text" name="image_third" id="image_thr" className="file:bg-gray-100 file:px-6 file:py-2 file:border file:border-gray-300 file:rounded-lg file:text-gray-700 file:cursor-pointer file:shadow-lg bg-white text-gray-700 rounded-lg cursor-pointer hover:shadow-lg duration-300 ease-in-out" required />

            </div> */}

            {/* exam/app/components/ProductSearch.tsx */}
            {/* <input
                type="search"
                value={searchQuery}
                onChange={handleSearch}
                placeholder="Search products..."
                className="w-full p-3 mb-6 text-lg border rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            /> */}

            {/* exam/app/wishlist/page.tsx */}
            {/* <div className="absolute left-0 bottom-0 w-full h-[41px] bg-[#000000] rounded-bl-[4px] rounded-br-[4px] flex items-center justify-center gap-2 cursor-pointer opacity-0 group-hover:opacity-100 duration-300">

                <Image src="/icons/white_cart.png" alt="icon cart" width="24" height="24" />

                <small className="text-[#FFFFFF] text-[12px] font-normal leading-[18px]">Add To Cart</small>

            </div> */}
        </div>
    )
}

export default Saveds;