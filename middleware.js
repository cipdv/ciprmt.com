export async function middleware(request) {
  console.log("middleware ran successfully");

  //   const currentUser = request.cookies.get("session")?.value;

  //   // const session = await auth();
  //   // console.log("session", session);

  //   let currentUserObj = null;
  //   if (currentUser) {
  //     currentUserObj = await decrypt(currentUser);
  //   }

  //   const userType = currentUserObj?.resultObj?.userType;

  //   if (
  //     !currentUser &&
  //     ![
  //       "/",
  //       "/auth/sign-in",
  //       "/auth/sign-up",
  //       "/password-reset",
  //       "/api/auth/signin",
  //       "/contact",
  //       new RegExp("^/password-reset/set-new-password/.*$"),
  //     ].some((path) =>
  //       typeof path === "string"
  //         ? path === request.nextUrl.pathname
  //         : path.test(request.nextUrl.pathname)
  //     )
  //   ) {
  //     return NextResponse.redirect(new URL("/auth/sign-in", request.url));
  //   }

  //   const dashboardPaths = {
  //     patient: "/dashboard/patient",
  //     rmt: "/dashboard/rmt",
  //     pending: "/dashboard/patient",
  //   };

  //   if (
  //     currentUser &&
  //     !request.nextUrl.pathname.startsWith(dashboardPaths[userType])
  //   ) {
  //     return NextResponse.redirect(
  //       new URL(dashboardPaths[userType], request.url)
  //     );
  //   }

  //   return await updateSession(request);
}

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/(api|trpc)(.*)"],
};

//good to know: middleware can get ip address from request.headers.get('x-real-ip')
