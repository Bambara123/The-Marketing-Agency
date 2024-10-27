import { HStack, Text, VStack } from "@chakra-ui/react";
import { useEffect } from "react";

import "./KillerHeader.css";

export default function KillerHeader() {
  useEffect(() => {
    let words = document.querySelectorAll(".word");
    words.forEach((word) => {
      let letters = word.textContent.split("");
      word.textContent = "";
      letters.forEach((letter) => {
        let span = document.createElement("span");
        span.textContent = letter;
        span.className = "letter";
        word.append(span);
      });
    });

    let currentWordIndex = 0;
    let maxWordIndex = words.length - 1;
    words[currentWordIndex].style.opacity = "1";

    let rotateText = () => {
      let currentWord = words[currentWordIndex];
      let nextWord =
        currentWordIndex === maxWordIndex
          ? words[0]
          : words[currentWordIndex + 1];
      // rotate out letters of current word
      Array.from(currentWord.children).forEach((letter, i) => {
        setTimeout(() => {
          letter.className = "letter out";
        }, i * 80);
      });
      // reveal and rotate in letters of next word
      nextWord.style.opacity = "1";
      Array.from(nextWord.children).forEach((letter, i) => {
        letter.className = "letter behind";
        setTimeout(() => {
          letter.className = "letter in";
        }, 340 + i * 80);
      });
      currentWordIndex =
        currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;
    };

    rotateText();
    const intervalId = setInterval(rotateText, 3000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="killer-header-dev">
      <Text className="zen-antque-regular text-line-1">Full-Service</Text>
      <Text className="zen-antque-regular text-line-2">MARKETING</Text>
      <HStack className="container">
        <Text className="zen-antque-regular text-line-3">Agency with </Text>
        <div className="rotating-text-container">
          <div className="rotating-text">
            <p>
              <span className="word zen-antque-regular w-1">Consultancy.</span>
              <span className="word zen-antque-regular w-2">Branding.</span>
              <span className="word zen-antque-regular w-3">Advertising.</span>
              <span className="word zen-antque-regular w-4">Marketing.</span>
            </p>
          </div>
        </div>
      </HStack>
    </div>
  );
}
