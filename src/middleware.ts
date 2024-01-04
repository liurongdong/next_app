import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
    // console.log("come in middleware");
    //
    // return NextResponse.redirect(new URL('/dashboard', request.url))
}

// See "Matching Paths" below to learn more
export const config = {
    // matcher: '/unlock/:path*',
}