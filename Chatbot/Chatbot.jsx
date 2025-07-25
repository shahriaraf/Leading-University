import { useEffect } from "react";

const Chatbot = () => {
  useEffect(() => {
    // Prevent duplicate script loading
    if (document.getElementById("7adSeqiBOW8rofSsI5ILb")) return;

    // Define chatbase logic
    if (
      !window.chatbase ||
      window.chatbase("getState") !== "initialized"
    ) {
      window.chatbase = (...args) => {
        if (!window.chatbase.q) {
          window.chatbase.q = [];
        }
        window.chatbase.q.push(args);
      };

      window.chatbase = new Proxy(window.chatbase, {
        get(target, prop) {
          if (prop === "q") return target.q;
          return (...args) => target(prop, ...args);
        },
      });
    }

    // Script loader
    const loadScript = () => {
      const script = document.createElement("script");
      script.src = "https://www.chatbase.co/embed.min.js";
      script.id = "7adSeqiBOW8rofSsI5ILb"; // Your chatbot ID
      script.domain = "www.chatbase.co";
      document.body.appendChild(script);
    };

    // Load script on page load
    if (document.readyState === "complete") {
      loadScript();
    } else {
      window.addEventListener("load", loadScript);
    }

    // Optional cleanup
    return () => {
      const oldScript = document.getElementById("7adSeqiBOW8rofSsI5ILb");
      if (oldScript) document.body.removeChild(oldScript);
    };
  }, []);

  return null;
};

export default Chatbot;