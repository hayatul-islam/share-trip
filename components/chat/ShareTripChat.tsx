"use client";
import { useState } from "react";
import ChatLauncher from "./Chatlauncher";
import ChatWindow from "./ChatWindow";
import LauncherCard from "./LauncherCard";

export default function ShareTripChat() {
  const [state, setState] = useState<string>("messages");
  const [firstTimeOpen, setFirstTimeOpen] = useState<boolean>(true);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleOpen = (type: string) => {
    setFirstTimeOpen(false);
    setIsOpen(true);
    setState(type);
  };

  return (
    <div className="fixed bottom-3 right-3 z-50 flex flex-col items-end gap-3 z-[999]">
      {isOpen && <ChatWindow onClose={() => setIsOpen(false)} state={state} />}
      {firstTimeOpen && (
        <>
          <div className="hidden lg:block">
            <LauncherCard onOpen={handleOpen} />
          </div>
          <div className="lg:hidden">
            <ChatLauncher isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
          </div>
        </>
      )}

      {!firstTimeOpen && (
        <ChatLauncher isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
      )}
    </div>
  );
}
