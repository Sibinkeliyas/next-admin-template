import jwtDecode from 'jwt-decode';
import { NextRequest, NextResponse } from 'next/server';
import { verifyToken } from './context/jwtContext';

const isAdminRoutes = (pathname: string) => {
  return ['/api/employee'].includes(pathname);
};

export async function middleware(req: NextRequest) {
  const token = req.headers.get('authorization');

  const { pathname } = req.nextUrl;
  if (token && verifyToken(token)) {
    const decoded: any = jwtDecode(token!);
    if (isAdminRoutes(pathname) && decoded.role !== 'admin') {
      return NextResponse.json({ message: 'Un Authorized' }, { status: 401 });
    }
    const response = NextResponse.next();
    response.headers.append('userId', decoded.id);
    return response;
  }
  return NextResponse.next();
}

export const config = {
  matcher: ['/api/employee', '/api/authentication']
};
