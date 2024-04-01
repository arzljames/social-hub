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
import React, { useEffect } from "react";

const EditorNoSSR = () => {
  let editor: any;
  const TOOLS = {
    embed: Embed,
    table: Table,
    marker: Marker,
    list: List,
    warning: Warning,
    code: Code,
    linkTool: LinkTool,
    image: {
      class: Image,
      config: {
        endpoints: {
          byFile: "http://localhost:3000/editor", // Your backend file uploader endpoint
          byUrl: "http://localhost:3000/fetchUrl", // Your endpoint that provides uploading by Url
        },
      },
    },
    raw: Raw,
    header: Header,
    quote: Quote,
    checklist: CheckList,
    delimiter: Delimiter,
    inlineCode: InlineCode,
    simpleImage: SimpleImage,
  };

  useEffect(() => {
    editor = new EditorJs({
      /**
       * Id of Element that should contain the Editor
       */
      holder: "editorjs",
      tools: TOOLS,
    });

    return () => {
      editor.destroy();
    };
  }, []);




  const endpoint = process.env.NEXT_PUBLIC_ENDPOINT;
  const APP_SID = process.env.NEXT_PUBLIC_APP_SIDE;

  const saveFunc = () => {
    editor
      .save()
      .then(async (outputData) => {
        await fetch(endpoint, {
          mode: "cors",
          method: "PATCH",
          headers: {
            "Access-Control-Allow-Origin": "*",
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${APP_SID}`,
          },
          body: JSON.stringify({
            data: {
              test: JSON.stringify(outputData),
            },
          }),
        });
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
