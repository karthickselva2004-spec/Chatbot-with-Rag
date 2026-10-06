import { useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import { BASE_URL } from "../config/api";

function ChatPage() {

  const [question, setQuestion] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {

    if (!question.trim()) return;

    const userMessage = {
      sender: "user",
      text: question,
    };

    setMessages((prev) => [
      ...prev,
      userMessage,
    ]);

    const currentQuestion = question;

    setQuestion("");

    setLoading(true);

    try {

      const response = await axios.post(
        `${BASE_URL}/api/query/ask`,
        {
          question: currentQuestion,
        }
      );

      const aiMessage = {
        sender: "ai",
        text: response.data.answer,
        sources: response.data.sources,
      };

      setMessages((prev) => [
        ...prev,
        aiMessage,
      ]);

    } catch (error) {

      console.log(error);

      setMessages((prev) => [
        ...prev,
        {
          sender: "ai",
          text: "Error getting response from AI",
        },
      ]);

    } finally {

      setLoading(false);

    }
  };

  return (

    <div
      className="
      min-h-screen
      bg-[#f7f7f8]
      dark:bg-black
      dark:text-white
      flex flex-col
      transition-all duration-300
      "
    >

      <Navbar />

      <div className="flex-1 overflow-y-auto px-4 py-6">

        {messages.length === 0 && (

          <div className="h-full flex items-center justify-center">

            <h1 className="text-3xl font-bold text-gray-400">
              Ask Questions From Uploaded Documents
            </h1>

          </div>

        )}

        <div className="max-w-4xl mx-auto space-y-6">

          {messages.map((msg, index) => (

            <div
              key={index}
              className={`
              p-4 rounded-2xl shadow
              ${msg.sender === "user"
                  ? "bg-purple-600 text-white ml-auto max-w-xl"
                  : "bg-white dark:bg-gray-900 max-w-xl"}
              `}
            >

              <p>{msg.text}</p>

              {msg.sources && (

                <div className="mt-3 text-sm text-gray-500">

                  <p className="font-semibold">
                    Sources:
                  </p>

                  {[...new Set(msg.sources.map((src) => src.fileName))]
                    .map((file, i) => (

                      <p key={i}>
                        📄 {file}
                      </p>

                    ))}

                </div>

              )}

            </div>

          ))}

          {loading && (

            <div className="bg-white dark:bg-gray-900 p-4 rounded-2xl shadow w-fit">

              ⏳ Thinking...

            </div>

          )}

        </div>

      </div>

      <div className="p-4 border-t dark:border-gray-800">

        <div className="max-w-4xl mx-auto flex gap-3">

          <input
            type="text"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Ask something..."
            className="
            flex-1
            p-4
            rounded-2xl
            border
            dark:bg-gray-900
            "
          />

          <button
            onClick={sendMessage}
            disabled={loading}
            className="
            bg-purple-600
            hover:bg-purple-700
            text-white
            px-8
            rounded-2xl
            "
          >

            Send

          </button>

        </div>

      </div>

    </div>

  );
}

export default ChatPage;