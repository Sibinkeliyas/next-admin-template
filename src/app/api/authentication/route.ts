import prisma from '@/lib/neet.prisma';

export const POST = async (request: Request, responds: Response) => {
  try {
    const { email, password } = await request.json();
    const user = await prisma.user.findFirst({ where: { email, password } });
    if (user)
      return Response.json({ status: true, message: 'Succesfully loggined' });
    else
      return Response.json({ status: false, message: 'Credentials are wrong' });
  } catch (error) {
    Promise.reject({ status: false, message: error });
  }
};
