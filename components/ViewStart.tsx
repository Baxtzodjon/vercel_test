"use client"

import React, { useEffect, useState } from 'react';
import ReviewStars from '../components/ReviewStars';

const ViewStarts = () => {
    const [reviews, setReviews] = useState<{ reviews: number }[]>([]);

    useEffect(() => {
        const fetchReviews = async () => {
            const response = await fetch('http://localhost:3000/api/product'); // Здесь подставь свой эндпоинт для получения отзывов с бэкенда
            const { data } = await response.json();
            setReviews(data);
        };
        fetchReviews();
    }, []);

    return (
        <div>
            <h1>Отзывы</h1>
            {reviews.map((review, index) => (
                <div key={index}>
                    <ReviewStars rating={review.reviews} />
                    <p>Оценка: {review.reviews}</p>
                </div>
            ))}
        </div>
    );
};

export default ViewStarts;