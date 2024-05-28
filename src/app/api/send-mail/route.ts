import sendMail from '@/lib/send-mail';
import { NextRequest, NextResponse } from 'next/server';
import { ZodError, z } from 'zod';

const sendMailSchema = z.object({
  name: z
    .string({ required_error: 'Name is required' })
    .min(1, 'Name is required')
    .max(50, 'Too long name')
    .trim(),
  email: z
    .string({ required_error: 'Email is required', invalid_type_error: 'Invalid email' })
    .email()
    .max(50, 'Too long email')
    .trim(),
  phone: z
    .string({ invalid_type_error: 'Invalid phone number' })
    .max(20, 'Invalid phone number')
    .trim()
    .optional()
});

export const POST = async (req: NextRequest) => {
  try {
    const body = await req
      .json()
      .then((data) => data)
      .catch(() => null);
    if (!body) return NextResponse.json({ message: 'Invalid request sent' }, { status: 400 });

    const data = sendMailSchema.parse(body);
    if (!data) return NextResponse.json({ message: 'Invalid request sent' }, { status: 400 });
    sendMail({
      mail: 'astrogenesis.tech@gmail.com',
      subject: 'A client has tried to contact you from the browser.',
      text: `<strong>Name: ${data.name}</strong> <br> <strong>Email: ${data.email}</strong> <br> ${data.phone ? `<strong>Phone: ${data.phone}</strong>` : ''}`
    });
    return NextResponse.json({ message: 'Mail sent successfully' });
  } catch (err) {
    if (err instanceof Error) return NextResponse.json({ message: err.message });
    if (err instanceof ZodError) {
      return NextResponse.json({ message: err.issues[0].message }, { status: 400 });
    }
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
};
