import { HStack, Text } from "@chakra-ui/react";
import { useEffect, useRef } from "react";

import "./KillerHeader.css";

export default function KillerHeader() {
  const tabletWidth = 992;

  const text1Ref = useRef(null);
  const text2Ref = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth > tabletWidth) {
        if (text1Ref.current) {
          const rect = text1Ref.current.getBoundingClientRect();
          if (rect.top <= window.innerHeight * 0.9999) {
            text1Ref.current.classList.add("animation-left");
          }
        }
        if (text2Ref.current) {
          const rect = text2Ref.current.getBoundingClientRect();
          if (rect.top <= window.innerHeight * 0.9999) {
            text2Ref.current.classList.add("animation-right");
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {};
  });

  useEffect(() => {
    if (window.innerWidth < tabletWidth) {
      text1Ref.current.classList.add("animation-left");
      text2Ref.current.classList.add("animation-right");
    }

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
      <Text ref={text1Ref} className="red-hat-text-bold text-line-1">
        Full-Service
      </Text>
      <Text ref={text2Ref} className="red-hat-text-bold text-line-2">
        Marketing
      </Text>
      <HStack className="container">
        <Text className="red-hat-text-bold text-line-3">Agency with </Text>
        <div className="rotating-text-container">
          <div className="rotating-text">
            <p>
              <span className="word red-hat-text-bold w-1">Consultancy.</span>
              <span className="word red-hat-text-bold w-2">Branding.</span>
              <span className="word red-hat-text-bold w-3">Advertising.</span>
              <span className="word red-hat-text-bold w-4">Marketing.</span>
            </p>
          </div>
        </div>
      </HStack>
    </div>
  );
}
