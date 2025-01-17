import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const {name, email, password} = await req.json();

        console.log("Name ", name);
        console.log("Email ", email);
        console.log("Password ", password);

        return NextResponse.json({ message: "User registered."}, { status: 201 });
    } catch (error) {
        // Логируем ошибку
        console.error("Error occurred: ", error);
        
        return NextResponse.json({ message: "An error occurred while registering the user." }, { status: 500 });
    }
}