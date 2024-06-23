import { NextRequest, NextResponse } from 'next/server';

export const GET = async (request: NextRequest) => {
  try {
    return NextResponse.json({ status: true });
  } catch (error) {}
};
