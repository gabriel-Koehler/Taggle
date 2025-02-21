// import { getCookie } from 'cookies-next'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  console.log(request);
  console.log(request.cookies.get("token"));
  const token = request.cookies.get("token")
  if (!token && 
      request.nextUrl.pathname!="/Login/Sign-In" &&
      request.nextUrl.pathname!="/Login/Sign-Up"
    ){
    return NextResponse.redirect(new URL('/Login/Sign-In',request.url))
  }else{
    return NextResponse.next()
  }
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/',
            '/Login/Sign-In',
            '/Login/Sign-Up',
            '/Home'
  ]
}
// import { NextResponse, type NextRequest } from "next/server";

// export function middleware(req: NextRequest) {
//   const { pathname } = req.nextUrl;

//   if (pathname.startsWith("/_next")) return NextResponse.next();

//   if (pathname === "/") {
//     req.nextUrl.pathname = "/blog";
//     return NextResponse.redirect(req.nextUrl);
//   }

//   return NextResponse.next();
// }