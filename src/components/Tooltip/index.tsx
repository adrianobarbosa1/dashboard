"use client";
import { useState } from "react";

type TooltipProps = {
  content: string;
  children: React.ReactNode;
};

const Tooltip = ({ content, children }: TooltipProps) => {
  const [show, setShow] = useState(false);

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      {children}

      {show && (
        <div className="absolute opacity-0 w-28 bg-black text-white text-center text-xs rounded-lg py-2 z-10 group-hover:opacity-100 bottom-full -left-1/2 ml-14 px-3 pointer-events-none">
          {content}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
