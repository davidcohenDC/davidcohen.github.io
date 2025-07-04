'use client';

import { useRef, useState } from 'react';

import Image from 'next/image';

const Avatar = () => {
  const typingIntervalRef = useRef(null);
  const [typedText, setTypedText] = useState('');
  const fullText = "Hey, It's so nice to see you here, thanks for visiting !";

  const handleMouseEnter = () => {
    startTypingAnimation();
  };

  const handleMouseLeave = () => {
    clearInterval(typingIntervalRef.current);
    setTypedText('');
  };

  const startTypingAnimation = () => {
    let index = 0;
    typingIntervalRef.current = setInterval(() => {
      setTypedText(fullText.substring(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(typingIntervalRef.current);
      }
    }, 50);
  };

  return (
      <div className="relative mt-5 flex h-44 w-44 items-center justify-center">
        <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="group absolute transition-all ease-in"
        >
          <div className="wrap-avater">
            <Image
                src="/images/icons/david-logo.png"
                alt="avatar"
                draggable="false"
                className="-mt-[55px] duration-500 group-hover:drop-shadow-[-1px_-1px_0px_#ec4899]"
                width={600}
                height={826}
                priority
            />
          </div>
          <div className="absolute bottom-0 -ml-[100px] mb-56 hidden w-32 flex-col items-center lg:group-hover:flex">
            <p className="whitespace-no-wrap relative z-10 h-[50px] w-32 rounded-md bg-background p-2 text-xs leading-none text-white shadow-lg">
              {typedText}
            </p>
            <div className='before:absolute before:-bottom-3 before:right-3 before:h-0 before:w-0 before:border-b-[20px] before:border-l-[12px] before:border-r-[24px] before:border-t-[12px] before:border-b-transparent before:border-l-transparent before:border-r-background before:border-t-background before:content-[""]'></div>
          </div>
        </div>
      </div>
  );
};

export default Avatar;

console.log(
    '%c   🎉 Congratulations! 🎉\nYou found absolutely nothing!',
    'font-size: 18px; color: #ff1493; font-family: monospace;'
);
