import { useState } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";
import "./Chatbot.css";

function Chatbot() {
  const { i18n } = useTranslation();

  const initialMessage = {
    sender: "bot",
    text: "Namaste! 🙏 I am your AI Culture Guide. Ask me about Indian monuments, festivals, traditions, food, or culture.",
  };

  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const [messages, setMessages] = useState([initialMessage]);

  const suggestedQuestions = [
    "Tell me about Hawa Mahal",
    "What is special about Rajasthan culture?",
    "Tell me about Diwali",
    "Tell me about Indian traditional food",
  ];

  const sendMessage = async (question = input) => {
    if (!question.trim() || loading) return;

    const userMessage = {
      sender: "user",
      text: question,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const res = await axios.post(
        "http://localhost:5000/api/chat/message",
        {
          message: question,
          language: i18n.language,
        }
      );

      const botMessage = {
        sender: "bot",
        text: res.data.response,
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.log(error);

      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: "Sorry, I couldn't connect to the AI server. Please try again.",
        },
      ]);
    }

    setLoading(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };

  // Clear Chat
  const clearChat = () => {
    setMessages([initialMessage]);
    setInput("");
  };

  return (
    <div className="chatbot-page">
      <div className="chatbot-container">

        {/* Header */}
        <div className="chatbot-header">

          <button className="page-back-btn" type="button" onClick={() => window.history.back()}>
            ← Back
          </button>

          <div>
            <h1>✦ AI Culture Guide</h1>
            <p>
              Explore India's heritage, monuments, festivals & traditions
            </p>
          </div>

          {/* Clear Chat Button */}
          <button
            className="clear-chat-btn"
            onClick={clearChat}
          >
            🗑️ Clear Chat
          </button>

        </div>

        {/* Messages */}
        <div className="chat-messages">

          {messages.map((msg, index) => (
            <div
              key={index}
              className={`message ${
                msg.sender === "user" ? "user" : "bot"
              }`}
            >
              <div className="message-bubble">
                {msg.text}
              </div>
            </div>
          ))}

          {/* Loading */}
          {loading && (
            <div className="message bot">
              <div className="message-bubble typing">
                AI is thinking...
              </div>
            </div>
          )}

        </div>

        {/* Suggested Questions */}
        <div className="suggested-questions">

          <p>Try asking:</p>

          <div className="suggestion-buttons">

            {suggestedQuestions.map((question, index) => (
              <button
                key={index}
                onClick={() => sendMessage(question)}
                disabled={loading}
              >
                {question}
              </button>
            ))}

          </div>

        </div>

        {/* Input */}
        <div className="chat-input-area">

          <input
            className="chat-input"
            type="text"
            placeholder="Ask about Indian culture..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            disabled={loading}
          />

          <button
            className="send-button"
            onClick={() => sendMessage()}
            disabled={loading}
          >
            {loading ? "..." : "Send"}
          </button>

        </div>

      </div>
    </div>
  );
}

export default Chatbot;