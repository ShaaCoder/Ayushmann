export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, phone, service, message } = req.body;

    // Validate required fields
    if (!name || !email || !phone || !service) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Format the WhatsApp message
    const formattedMessage = `New Contact Form Submission:
Name: ${name}
Email: ${email}
Phone: ${phone}
Service: ${service}
Message: ${message || 'No message provided'}`;

    // Encode the message for URL
    const encodedMessage = encodeURIComponent(formattedMessage);

    // WhatsApp API URL with the provided phone number
    const whatsappNumber = '+918708822925';
    const whatsappUrl = `https://api.whatsapp.com/send/?phone=${encodeURIComponent(whatsappNumber)}&text=${encodedMessage}&type=phone_number&app_absent=0`;

    // Return the WhatsApp URL to the client
    res.status(200).json({ url: whatsappUrl });
  } catch (error) {
    console.error('Error in send-whatsapp:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}
