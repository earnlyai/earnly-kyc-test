// api/token.js
export default async function handler(req, res) {
  // Replace with your real Sumsub App Token (from Dev Space → App Tokens)
  const APP_TOKEN = "prd:ireNtoZO053T2DEnldpLSIpy.7MFlSMhM1feXMALrEHYFu7d0S70I1KW4";

  const applicantId = "user-" + Date.now() + "-" + Math.random().toString(36).substr(2, 6);

  try {
    const response = await fetch("https://api.sumsub.com/resources/accessTokens", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": `Basic ${Buffer.from(APP_TOKEN + ":").toString("base64")}`
      },
      body: JSON.stringify({
        userId: applicantId,
        ttlInSecs: 600 // token lasts 10 minutes
      })
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("Sumsub token error:", data);
      return res.status(500).json({ error: "Failed to create token" });
    }

    res.status(200).json({ accessToken: data.token, applicantId });
  } catch (err) {
    console.error("Server error:", err);
    res.status(500).json({ error: "Internal error" });
  }
}