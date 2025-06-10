import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { promptUser, namaPenerima, jenisUcapan } = await request.json();

    if (!namaPenerima) {
      return NextResponse.json(
        { error: 'Missing parameter: namaPenerima' },
        { status: 400 }
      );
    }

    const prompt = promptUser
      ? promptUser.replace('{namaPenerima}', namaPenerima)
      : `Buatkan ucapan ${jenisUcapan} untuk nama ${namaPenerima}.`;

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [
          {
            role: 'system',
            content:
              'Kamu adalah asisten yang membuat ucapan yang sopan dan hangat.',
          },
          { role: 'user', content: prompt },
        ],
        max_tokens: 100,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      return NextResponse.json(
        { error: data.error?.message || 'OpenAI API error' },
        { status: 500 }
      );
    }

    const ucapan = data.choices[0].message.content;

    return NextResponse.json({ ucapan }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || 'Unknown error' },
      { status: 500 }
    );
  }
}
