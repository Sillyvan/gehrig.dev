import type { RequestEvent } from '@sveltejs/kit';
import postmark from 'postmark';

export async function POST({ request }: RequestEvent) {
  const body = (await request.json()) as { from: string; message: string };
  const { from, message } = body;
  if (!from || !message) {
    return new Response('null', {
      status: 400,
    });
  }

  const client = new postmark.ServerClient(import.meta.env.VITE_EMAIL_KEY);
  if (
    from.match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    ) === null
  ) {
    return new Response(null, {
      status: 400,
    });
  }

  const mailInfo = await client.sendEmail({
    From: 'website@gehrig.dev',
    To: 'silvan@gehrig.dev',
    Subject: from,
    TextBody: message,
  });
  return new Response(JSON.stringify(mailInfo.Message));
}
