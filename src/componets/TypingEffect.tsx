import React, { useState, useEffect } from "react";

interface Typing {
  text: string;
  speed: number;
}

export const TypingEffect: React.FC<Typing> = ({
  text,
  speed,
}): JSX.Element => {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= text.length) {
        setDisplayText(text.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return <span className="whitespace-pre-wrap pt-4 ">{displayText}</span>;
};
