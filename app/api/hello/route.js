export default async function handler(req, res) {
  const message = req.body;
  console.log(`Received message from Arduino: ${message}`);
  res.status(200).send("Message received successfully");
}
