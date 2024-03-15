"use client";
import EditorJs from "@editorjs/editorjs";
import Embed from "@editorjs/embed";
import Table from "@editorjs/table";
import List from "@editorjs/list";
import Warning from "@editorjs/warning";
import Code from "@editorjs/code";
import LinkTool from "@editorjs/link";
import Image from "@editorjs/image";
import Raw from "@editorjs/raw";
import Header from "@editorjs/header";
import Quote from "@editorjs/quote";
import Marker from "@editorjs/marker";
import CheckList from "@editorjs/checklist";
import Delimiter from "@editorjs/delimiter";
import InlineCode from "@editorjs/inline-code";
import SimpleImage from "@editorjs/simple-image";

const EditorNoSSR = ({ type }: any) => {
  const TOOLS = {
    embed: Embed,
    table: Table,
    marker: Marker,
    list: List,
    warning: Warning,
    code: Code,
    linkTool: LinkTool,
    image: Image,
    raw: Raw,
    header: Header,
    quote: Quote,
    checklist: CheckList,
    delimiter: Delimiter,
    inlineCode: {
      class: InlineCode,
    },
    simpleImage: SimpleImage,
  };

  const editor = new EditorJs({
    /**
     * Id of Element that should contain the Editor
     */
    holder: "editorjs",
    tools: TOOLS,
  });

  const saveFunc = () => {
    editor
      .save()
      .then((outputData) => {
        console.log("data:", outputData.blocks);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div id="editorjs"></div>
      <button onClick={saveFunc}>Save</button>
    </>
  );
};

export default EditorNoSSR;
