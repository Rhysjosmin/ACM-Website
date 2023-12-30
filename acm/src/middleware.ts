// import { withAuth } from "next-auth/middleware";
// import { NextResponse } from "next/server";

// export default withAuth(function middleware(req) {}, {
//   callbacks: {
//     authorized: (params) => {
//       let { token } = params;
//       return !!token;
//     },
//   },
// });

// export const config = { matcher: ["/"] };

export { default } from "next-auth/middleware";

export const config = {
  matcher: ["/Papers/:path*", "/Internship-details/:path*"],
};
