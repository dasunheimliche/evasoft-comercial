"use client";

import { useState } from "react";

interface AccoordionItemProps {
  number: string;
  title: string;
  children: React.ReactNode;
  isOpen?: boolean;
}

export default function AccordionItem({
  number,
  title,
  children,
  isOpen = false,
}: AccoordionItemProps) {
  const [open, setOpen] = useState(isOpen);

  return (
    <div
      className="w-full flex flex-col gap-[.75rem]"
      onClick={() => setOpen(!open)}
    >
      <div className="p-[1.5rem] flex justify-between cursor-pointer">
        <div className="flex gap-[5rem] text-[1.75rem] leading-[2.75rem] text-gradient">
          <div>{number}</div>
          <div>{title}</div>
        </div>
        <div className="text-[2rem] text-gray-100 font-extralight w-[3.125rem] h-[3.125rem] outline outline-[1px] outline-gray-100 rounded-full flex justify-center items-center">
          {isOpen ? "-" : "＋"}
        </div>
      </div>
      {open && children}
    </div>
  );
}
