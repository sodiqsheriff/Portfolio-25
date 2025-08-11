import emailjs from "@emailjs/browser"

// Initialize EmailJS with your public key
export const initEmailJS = () => {
  emailjs.init("your_public_key_here") // Replace with your actual public key
}

// Email service configuration
export const EMAIL_CONFIG = {
  serviceId: "blaze_official",
  templateId: "template_ahnyvog",
  publicKey: "LOo1WzYuIB4eFQfHT", // Replace with your actual public key
}

// Send contact form email
export const sendContactEmail = async (formRef) => {
  try {
    const result = await emailjs.sendForm(
      EMAIL_CONFIG.serviceId,
      EMAIL_CONFIG.templateId,
      formRef,
      EMAIL_CONFIG.publicKey,
    )
    return { success: true, result }
  } catch (error) {
    console.error("EmailJS Error:", error)
    return { success: false, error }
  }
}
