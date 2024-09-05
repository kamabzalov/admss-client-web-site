import { NextResponse } from "next/server";
import { sendContactForm } from "@/app/http";

export async function POST(request: Request) {
    const body = await request.json();
    const apiResponse = await sendContactForm(body)
    return NextResponse.json(apiResponse);
}
