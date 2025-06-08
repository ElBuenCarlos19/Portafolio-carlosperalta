import { type NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"

// Rate limiting storage (en producción deberías usar Redis o una base de datos)
const rateLimitMap = new Map<string, number>()

// Configurar el transporter de nodemailer
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "carlosperalta19102004@gmail.com",
    pass: "qnon qmtd qkjs lfkv",
  },
})

// Función para verificar rate limiting
function checkRateLimit(ip: string): boolean {
  const now = Date.now()
  const lastRequest = rateLimitMap.get(ip)

  if (lastRequest && now - lastRequest < 15000) {
    // 15 segundos
    return false
  }

  rateLimitMap.set(ip, now)
  return true
}

export async function POST(request: NextRequest) {
  try {
    // Obtener IP del cliente
    const ip = request.headers.get("x-forwarded-for") || request.headers.get("x-real-ip") || "unknown"

    // Verificar rate limiting
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        {
          success: false,
          message: "Por favor espera 15 segundos antes de enviar otro mensaje",
        },
        { status: 429 },
      )
    }

    const body = await request.json()
    const { name, email, subject, message, language } = body

    // Validar campos requeridos
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        {
          success: false,
          message: language === "es" ? "Todos los campos son requeridos" : "All fields are required",
        },
        { status: 400 },
      )
    }

    // Validar formato de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        {
          success: false,
          message: language === "es" ? "Por favor ingresa un email válido" : "Please enter a valid email",
        },
        { status: 400 },
      )
    }

    // Configurar el email
    const mailOptions = {
      from: "carlosperalta19102004@gmail.com",
      to: "carlosperalta19102004@gmail.com",
      subject: `Nuevo mensaje de contacto: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #53d2b2;">Nuevo mensaje de contacto</h2>
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Nombre:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Asunto:</strong> ${subject}</p>
          </div>
          <div style="background-color: #ffffff; padding: 20px; border-left: 4px solid #53d2b2; margin: 20px 0;">
            <h3>Mensaje:</h3>
            <p style="line-height: 1.6;">${message.replace(/\n/g, "<br>")}</p>
          </div>
          <hr style="border: none; border-top: 1px solid #eee; margin: 30px 0;">
          <p style="color: #666; font-size: 12px;">
            Este mensaje fue enviado desde tu portafolio web.
          </p>
        </div>
      `,
      replyTo: email,
    }

    // Enviar el email
    await transporter.sendMail(mailOptions)

    return NextResponse.json({
      success: true,
      message:
        language === "es"
          ? "Mensaje enviado correctamente. Te responderé pronto!"
          : "Message sent successfully. I'll get back to you soon!",
    })
  } catch (error) {
    console.error("Error sending email:", error)

    return NextResponse.json(
      {
        success: false,
        message: "Error interno del servidor. Por favor intenta más tarde.",
      },
      { status: 500 },
    )
  }
}
