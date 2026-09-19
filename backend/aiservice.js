const Groq = require("groq-sdk");

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});


 function cleanAIResponse(text) {
  if (!text || typeof text !== "string") {
    return "Sorry, I could not generate an answer.";
  }

  let clean = text.trim();

  // Remove markdown formatting
  clean = clean.replace(/\*\*/g, "");
  clean = clean.replace(/\*/g, "");

  // Remove headings
  clean = clean.replace(/^#+\s*/gm, "");

  // Remove table separators
  clean = clean.replace(/^\s*\|?[\s:-]+\|[\s|:-]*$/gm, "");

  // Remove table pipes
  clean = clean.replace(/\|/g, " ");

  // Remove bullet points
  clean = clean.replace(/^\s*[-•]\s+/gm, "");

  // Remove numbered lists
  clean = clean.replace(/^\s*\d+[.)]\s+/gm, "");

  // Remove horizontal lines
  clean = clean.replace(/[-_=]{3,}/g, " ");

  // Remove extra spaces
  clean = clean.replace(/[ \t]+/g, " ");

  // Remove unnecessary empty lines
  clean = clean.replace(/\n+/g, " ");

  clean = clean.trim();

  // Safety check
  if (!clean) {
    return "Sorry, I could not generate an answer.";
  }

  // Keep maximum 5 sentences
  const sentences = clean.match(/[^.!?]+[.!?]+/g);

  if (sentences && sentences.length > 5) {
    clean = sentences.slice(0, 5).join(" ").trim();
  }

  return clean;
}

async function getAIResponse(message, language = "en") {
  try {
    const response = await groq.chat.completions.create({
      model: "openai/gpt-oss-20b",

      messages: [
        {
          role: "system",
          content: `
You are the AI Culture Guide for CultureAR.

Your job is to answer questions about Indian culture, heritage, monuments, festivals, traditions, food, art, music, dance and historical places.

IMPORTANT RESPONSE RULES:

1. Give a SHORT answer.
2. Normally use only 3 to 5 simple sentences.
3. Answer directly and do not add unnecessary information.
4. Use simple language that a beginner can understand.
5. Write only normal sentences in paragraph form.
6. NEVER use tables.
7. NEVER use bullet points.
8. NEVER use numbered lists.
9. NEVER use headings.
10. NEVER use Markdown.
11. NEVER use these symbols for formatting: *, **, |, #, ---, -.
12. Do not divide the answer into sections.
13. Do not give long explanations.
14. For monument questions, give the location and one or two important facts.
15. For festival questions, briefly explain its importance and where it is celebrated.
16. For food questions, mention only a few important dishes and briefly describe them.
17. If you do not know something, say that you are not sure instead of inventing information.
18. Stay focused on Indian culture and heritage.
19. Reply in the language represented by this locale: ${language}.
20. Do not repeat the user's question.
21. Do not start with phrases like "Here are the highlights", "Certainly", or "Sure".
22. Keep the answer short, but make sure you fully answer the user's question.

Return ONLY the final answer.
`,
        },
        {
          role: "user",
          content: message,
        },
      ],

      temperature: 0.3,
      max_tokens: 300,
    });

    const rawAnswer = response.choices[0].message.content;

    // Clean AI formatting before sending to frontend
    const cleanAnswer = cleanAIResponse(rawAnswer);

    return cleanAnswer;

  } catch (error) {
    console.error("========== GROQ ERROR ==========");
    console.error(error);
    console.error("================================");

    return "AI service error. Please check the backend terminal.";
  }
}

module.exports = { getAIResponse };