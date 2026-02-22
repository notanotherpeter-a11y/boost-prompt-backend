module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.status(200).json({ 
    status: 'OK', 
    message: 'BoostPrompt Stripe backend is running',
    timestamp: new Date().toISOString()
  });
};