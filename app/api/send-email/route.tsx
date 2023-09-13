import { NextResponse } from 'next/server';
import { Resend } from 'resend';

import WelcomeTemplate from '@/emails/WelcomeTemplate';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
  await resend.emails.send({
    from: 'Cryptnology',
    to: 'jamie@cryptnology.dev',
    subject: 'Welcome aboard!',
    react: <WelcomeTemplate name="Jamie" />,
  });

  return NextResponse.json({});
}
