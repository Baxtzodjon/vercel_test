import { NextResponse } from "next/server";

// Массив для хранения категорий
const categories: string[] = [];

export async function GET() {
  return NextResponse.json(categories);
}

export async function POST(req: Request) {
  const { name } = await req.json();

  if (!name) {
    return NextResponse.json({ message: 'Name is required' }, { status: 400 });
  }

  // Добавляем категорию в массив
  categories.push(name);

  return NextResponse.json({ message: 'Category added successfully', name }, { status: 201 });
}