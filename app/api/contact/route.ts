import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, message, serviceType } = body

    // TODO: Replace with your actual email service
    // Options: Resend, SendGrid, Postmark, or your own SMTP
    
    // For now, just log it (you'll replace this with actual email sending)
    console.log('Contact form submission:', {
      name,
      email,
      phone,
      message,
      serviceType,
      timestamp: new Date().toISOString()
    })

    // Example using Resend (you'll need to: npm install resend)
    /*
    const resend = new Resend(process.env.RESEND_API_KEY)
    
    await resend.emails.send({
      from: 'contact@renouhomes.com',
      to: 'info@renouhomes.com',
      subject: `New Contact Form: ${serviceType}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Service Type:</strong> ${serviceType}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `
    })
    */

    return NextResponse.json({ success: true }, { status: 200 })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Failed to submit form' },
      { status: 500 }
    )
  }
}
