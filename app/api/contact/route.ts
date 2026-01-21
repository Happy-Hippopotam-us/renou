import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, message, serviceType } = body

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: 'Renou Homes <noreply@renou.homes>',
      to: ['hello@renou.homes'],
      replyTo: email,
      subject: `New Contact Form Submission - ${serviceType}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Service Needed:</strong> ${serviceType}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `
    })

    if (error) {
      console.error('Resend error details:', JSON.stringify(error, null, 2))
      return NextResponse.json({ error: 'Failed to send email', details: error.message }, { status: 500 })
    }

    return NextResponse.json({ success: true, data }, { status: 200 })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Failed to submit form' },
      { status: 500 }
    )
  }
}
