export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { message } = req.body;

  try {
    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.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}`
      },
      body: JSON.stringify({
        model: "google/gemma-2-9b-it",
        messages: [{ role: "user", content: message }]
      })
    });

    const data = await response.json();
    const reply = data?.choices?.[0]?.message?.content || "⚠️ No response";

    res.status(200).json({ reply });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
  }
