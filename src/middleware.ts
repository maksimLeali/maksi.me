import { NextRequest, NextResponse } from "next/server";

const LOCALES = ["it", "en", "fr", "es"] as const;
type Locale = (typeof LOCALES)[number];
const DEFAULT_LOCALE: Locale = "it";

function detectLocale(request: NextRequest): Locale {
    const accept = request.headers.get("accept-language") ?? "";
    for (const segment of accept.split(",")) {
        const base = segment.trim().split(";")[0].split("-")[0].toLowerCase();
        if ((LOCALES as readonly string[]).includes(base)) {
            return base as Locale;
        }
    }
    return DEFAULT_LOCALE;
}

function hasLocalePrefix(pathname: string): boolean {
    return LOCALES.some(
        (l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`),
    );
}

function extractLocale(pathname: string): Locale {
    return (
        LOCALES.find(
            (l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`),
        ) ?? DEFAULT_LOCALE
    );
}

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    if (
        pathname.startsWith("/_next") ||
        pathname.startsWith("/api") ||
        pathname.startsWith("/favicon") ||
        /\.[a-zA-Z0-9]+$/.test(pathname)
    ) {
        return NextResponse.next();
    }

    if (!hasLocalePrefix(pathname)) {
        const locale = detectLocale(request);
        const url = request.nextUrl.clone();
        url.pathname = `/${locale}${pathname}`;
        return NextResponse.redirect(url);
    }

    const response = NextResponse.next();
    response.headers.set("x-locale", extractLocale(pathname));
    return response;
}

export const config = {
    matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
