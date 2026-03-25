import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Honeypot check
    if (body._gotcha) {
      return NextResponse.json({ success: true }, { status: 200 })
    }

    // Basic validation (simulated)
    if (!body.name || !body.email || !body.message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    // In a real app, you would send this email via Resend, SendGrid, or similar
    // Example using Resend:
    // const res = await fetch('https://api.resend.com/emails', {
    //   method: 'POST',
    //   headers: {
    //     'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({
    //     from: 'Radiance Med Spa <noreply@radiancemedspa.com>',
    //     to: ['info@radiancemedspa.com'],
    //     subject: `New Contact Form Submission from ${body.name}`,
    //     html: `<p><strong>Name:</strong> ${body.name}</p><p><strong>Email:</strong> ${body.email}</p><p><strong>Message:</strong> ${body.message}</p>`,
    //   }),
    // })

    console.log('Form Submission:', body)
    
    // Simulate success
    return NextResponse.json({ success: true }, { status: 200 })
  } catch (error) {
    console.error('Contact Form Error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}