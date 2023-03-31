export default function handler(req, res) {
  const { name, email, message } = req.body;

  // Send a success response back to the client
  res.status(200).json({
    message: 'Form submitted successfully!',
    data:`${ name, email, message }`
  });
}