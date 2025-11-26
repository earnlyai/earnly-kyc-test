// api/token.js
export default async function handler(req, res) {
  const APP_TOKEN = "prd:ireNtoZO053T2DEnldpLSIpy.7MFlSMhM1feXMALrEHYFu7d0S70I1KW4";

  try {
    // Generate a unique user ID
    const userId = "user-" + Date.now() + "-" + Math.random().toString(36).substr(2, 6);

    // Use the correct endpoint for WebSDK 2.0
    const response = await fetch("https://api.sumsub.com/resources/accessTokens/sdk", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": `Basic ${btoa(APP_TOKEN + ":")}` // Use btoa instead of Buffer
      },
      body: JSON.stringify({
        userId: userId,
        ttlInSecs: 600,
        levelName: "basic-kyc-level" // Optional, but recommended
      })
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("Sumsub API error:", data);
      return res.status(500).json({ 
        error: "Failed to create token",
        details: data 
      });
    }

    res.status(200).json({ accessToken: data.token, userId });
  } catch (err) {
    console.error("Server error:", err);
    res.status(500).json({ 
      error: "Internal server error",
      message: err.message 
    });
  }
}