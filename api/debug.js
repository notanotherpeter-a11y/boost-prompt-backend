module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  
  const stripeKey = process.env.STRIPE_SECRET_KEY;
  
  res.status(200).json({
    hasStripeKey: !!stripeKey,
    keyLength: stripeKey ? stripeKey.length : 0,
    keyStart: stripeKey ? stripeKey.substring(0, 10) + '...' : 'undefined',
    allEnvVars: Object.keys(process.env).filter(key => key.includes('STRIPE'))
  });
};