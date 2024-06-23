import prisma from '@/lib/neet.prisma';
import jwt from "jsonwebtoken";
import { NextRequest } from 'next/server';

export const POST = async (request: Request, responds: Response) => {
  try {
    const { email, password } = await request.json();
    const user:any = await prisma.user.findFirst({ where: { email, password } });
    if (user) {
      const tokenData = {
        id: user.id,
        username: user.name,
        email: user.email,
        role: user.role
      };
      user['accessToken'] = await jwt.sign(
        tokenData,
        process.env.NEXT_PUBLIC_TOKEN_SECRET!,
        {
          expiresIn: '2d'
        }
      );
      return Response.json({
        status: true,
        message: 'Succesfully loggined',
        user
      });
    } else
      return Response.json({ status: false, message: 'Credentials are wrong' });
  } catch (error) {
    return Response.error();
  }
};


export const GET = async (request: NextRequest, response: Response) => {
  try {
    const userId = request.headers.get('userId');
    const user = await prisma.user.findFirst({where : {id: Number(userId) }})
    return Response.json({ status: true, user });
  } catch (error) {
    return Response.error();
  }
}