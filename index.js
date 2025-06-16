const text = "Fast, Accurate, and Confidential.";
    const typingElement = document.getElementById("typing-text");

    function startTyping() {
      typingElement.textContent = "";
      let index = 0;

      const typeInterval = setInterval(() => {
        typingElement.textContent += text.charAt(index);
        index++;

        if (index === text.length) {
          clearInterval(typeInterval);
          setTimeout(startTyping, 30000); // Wait 30s before repeating
        }
      }, 100); // Typing speed (ms per character)
    }

    startTyping();