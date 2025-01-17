import React from "react";

interface ButtonProps {
  label: string;
  onClick: () => void;
}

export default function Button({ label, onClick }: ButtonProps) {
  return (
    <button
      className="rounded-lg bg-black text-white px-4 py-2"
      onClick={onClick}
    >
      {label}
    </button>
  );
}
