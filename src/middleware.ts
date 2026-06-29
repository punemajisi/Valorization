import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  console.log(`[ACCESS LOG] ${request.method} ${request.url}`);
  return NextResponse.next();
}
