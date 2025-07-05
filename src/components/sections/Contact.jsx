import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import emailjs from "emailjs-com";
export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then((result) => {
        alert("Message Sent!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => alert("Oops! Something went wrong. Please try again."));
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="px-4 w-full min-w-[300px] md:w-[500px] sm:w-2/3 p-6">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {" "}
            Get In Touch
          </h2>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="relative">
              Email:
              <span className="font-bold text-green-300 ml-3.5">
                tewoldemarie6@gmail.com
              </span>
            </div>

            <div className="relative">
              Telegram:{" "}
              <span className="font-bold text-green-300 ml-3.5">
                {/* <link href="https://t.me/M_W_M_T_Y_A_L_S">Telegram</link> */}
                <a href="https://t.me/M_W_M_T_Y_A_L_S">Telegram</a>
              </span>
            </div>

            <div className="relative">
              linkedin:
              <span className="font-bold text-green-300 ml-3.5">
                {/* <link href="linkedin:https://www.linkedin.com/in/tewolde-marie-2879b230b/">
                  linkedin:
                </link> */}
                <a href="https://www.linkedin.com/in/tewolde-marie-2879b230b">
                  linedin
                </a>
              </span>
            </div>
          </form>
        </div>
      </RevealOnScroll>
    </section>
  );
};
