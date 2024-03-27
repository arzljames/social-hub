"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Editor from "../../utils/editor";

const EditorPage = () => {
  return (
    <div className="w-full max-h-[100vh] p-4 flex items-center justify-center scroll-auto">
      <div className="border shadow-sm w-full max-w-[600px] p-4 rounded-lg h-full">
        <Editor />
      </div>
    </div>
  );
};

export default EditorPage;
