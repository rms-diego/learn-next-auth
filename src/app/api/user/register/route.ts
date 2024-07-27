import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const data = await req.json();

  return new NextResponse(null);
}
