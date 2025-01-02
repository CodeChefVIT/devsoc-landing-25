'use client'
import React from 'react'

interface Props {
  isOpen: boolean;
  onClose: () => void;
  content: string;
}

const FaqDialog = ({ isOpen, onClose, content }: Props) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#4B5862] bg-opacity-70 backdrop-blur-sm lg:hidden">
      <div className="relative bg-[#4B5862] border-8 border-[#FFCE00] text-white font-yerk p-6 rounded-lg shadow-lg w-[90%] max-w-md flex flex-col items-center">
        <div className="absolute top-0 left-0 m-2 w-4 h-4 bg-white rounded-full"></div>
        <div className="absolute top-0 right-0 m-2 w-4 h-4 bg-white rounded-full"></div>
        <div className="absolute bottom-0 left-0 m-2 w-4 h-4 bg-white rounded-full"></div>
        <div className="absolute bottom-0 right-0 m-2 w-4 h-4 bg-white rounded-full"></div>

        <p className="text-center text-lg font-medium my-12">{content}</p>
        <button
          onClick={onClose}
          className="bg-[#FFCE00] text-[#125A76] font-yerk py-2 px-6 rounded-lg hover:bg-[#e6b800] my-4"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default FaqDialog;
