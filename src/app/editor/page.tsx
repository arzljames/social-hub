"use client";
import Editor from "../../utils/editor";

const EditorPage = () => {
  return (
    <div className="w-full p-4 flex items-center justify-center scroll-auto">
      <div className="border shadow-sm w-full max-w-[600px] p-4 rounded-lg h-full">
        <Editor />
      </div>
    </div>
  );
};

export default EditorPage;
