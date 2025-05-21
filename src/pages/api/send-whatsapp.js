export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, contact, phone, product, service, message } = req.body;

    // Validate required fields
    if (!name || !email || (!contact && !phone) || (!product && !service)) {
      return res.status(400).json({ error: 'Missing required fields: name, email, contact/phone, and product/service are required' });
    }

    // Use contact or phone, product or service
    const contactNumber = contact || phone;
    const selectedProduct = product || service;

    // Format the WhatsApp message
    const formattedMessage = `New Contact Form Submission:
Name: ${name}
Email: ${email}
Contact: ${contactNumber}
Product: ${selectedProduct}
Message: ${message || 'No message provided'}`;

    // Encode the message for URL
    const encodedMessage = encodeURIComponent(formattedMessage);

    // WhatsApp API URL with the provided phone number
    const whatsappNumber = '+918810524651';
    const whatsappUrl = `https://api.whatsapp.com/send/?phone=${encodeURIComponent(whatsappNumber)}&text=${encodedMessage}&type=phone_number&app_absent=0`;

    // Return the WhatsApp URL to the client
    res.status(200).json({ url: whatsappUrl });
  } catch (error) {
    console.error('Error in send-whatsapp:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}
