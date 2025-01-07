// pages/api/reviews.ts
import { NextApiRequest, NextApiResponse } from 'next';

// Пример данных, если у тебя есть MongoDB, используй mongoose для получения данных
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const reviews = [
        { rating: 3.8 },
        { rating: 4.5 },
        { rating: 2.7 },
        { rating: 4.9 },
        { rating: 4.2 },
    ];

    res.status(200).json(reviews);
}