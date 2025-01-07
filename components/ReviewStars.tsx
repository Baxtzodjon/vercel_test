// components/ReviewStars.tsx
import React from 'react';

interface ReviewStarsProps {
    rating: number;  // Оценка, например 3.8
}

const ReviewStars: React.FC<ReviewStarsProps> = ({ rating }) => {
    const fullStars = Math.floor(rating); // Полные звезды
    const halfStar = rating % 1 >= 0.5; // Половина звезды
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0); // Пустые звезды

    return (
        <div className="stars">
            {Array(fullStars).fill(0).map((_, index) => (
                <svg key={index} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="yellow">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
            ))}
            {halfStar && (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="yellow">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" opacity="0.5" />
                </svg>
            )}
            {Array(emptyStars).fill(0).map((_, index) => (
                <svg key={index} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="yellow" strokeWidth="2">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
            ))}
        </div>
    );
};

export default ReviewStars;