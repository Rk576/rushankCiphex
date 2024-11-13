import { NextResponse } from "next/server";
import { cookies } from "next/headers";;

export async function GET() {
    try {
        const cookieStore = cookies();
        const token = cookieStore.get("session_token");

        if (!token) {
            return NextResponse.json({ message: "No session token found" }, { status: 401 });
        }

        cookieStore.delete("session_token")

        return NextResponse.json({
            message: "User deleted successfully",
        }, { status: 200 });

    } catch (error) {
        return NextResponse.json({ message: "Something went wrong", error }, { status: 500 });
    }
}
