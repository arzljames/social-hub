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
import React, { useRef, useEffect } from "react";

const EditorNoSSR = ({ type }: any) => {
  const editorRef = useRef(null);
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
    inlineCode: {
      class: InlineCode,
    },
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

  // function editorToHTML(editorData: any) {
  //   let html = "";

  //   editorData.blocks.forEach((block: any) => {
  //     switch (block.type) {
  //       case "paragraph":
  //         html += `<p>${block.data.text}</p>`;
  //         break;
  //       case "header":
  //         html += `<h${block.data.level}>${block.data.text}</h${block.data.level}>`;
  //         break;
  //       case "image":
  //         html += `<img src="${block.data.url}" alt="${block.data.caption}">`;
  //         break;
  //       case "list":
  //         html += `<${block.data.style === "ordered" ? "ol" : "ul"}>`;
  //         block.data.items.forEach((item) => {
  //           html += `<li>${item}</li>`;
  //         });
  //         html += `</${block.data.style === "ordered" ? "ol" : "ul"}>`;
  //         break;
  //       case "quote":
  //         html += `<blockquote>${block.data.text}</blockquote>`;
  //         break;
  //       case "code":
  //         html += `<pre><code>${block.data.code}</code></pre>`;
  //         break;
  //       case "delimiter":
  //         html += "<hr>";
  //         break;
  //       case "raw":
  //         html += block.data.html;
  //         break;
  //       // Add cases for other block types as needed
  //       default:
  //         // Unsupported block types can be skipped or handled differently
  //         break;
  //     }
  //   });

  //   return html;
  // }

  function editorToHTML(editorData: any) {
    let html = "";

    editorData.blocks.forEach((block: any) => {
      switch (block.type) {
        case "paragraph":
          html += block.data.text;
          break;
        case "header":
          html += `<h${block.data.level}>${block.data.text}</h${block.data.level}>`;
          break;
        case "image":
          html += `<img src="${block.data.url}" alt="${block.data.caption}">`;
          break;
        case "list":
          html += `<${block.data.style === "ordered" ? "ol" : "ul"}>`;
          block.data.items.forEach((item) => {
            html += `<li>${item}</li>`;
          });
          html += `</${block.data.style === "ordered" ? "ol" : "ul"}>`;
          break;
        case "quote":
          html += `<blockquote>${block.data.text}</blockquote>`;
          break;
        case "code":
          html += `<pre><code>${block.data.code}</code></pre>`;
          break;
        case "delimiter":
          html += "<hr>";
          break;
        case "raw":
          html += block.data.html;
          break;
        // Add cases for other block types as needed
        default:
          // Unsupported block types can be skipped or handled differently
          break;
      }
    });

    return html.replace("<br>", "\n");
  }

  const endpoint =
    "https://8-e28c8ff2ae-nlt6w4.api.zesty.io/v1/content/models/6-ea81cee6c6-2kbq03/items/7-8892d4e6c6-p4k2rw";
  const APP_SID = "f7dd1bb6ebd5837bd44ea280eed5cc5fc1885562";

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

  // const saveFunc = async () => {
  //   let headersList = {
  //     Accept: "*/*",
  //     "User-Agent": "Thunder Client (https://www.thunderclient.com)",
  //     Authorization: "Bearer e8813bc5b6382bf295fae21cd756828a464c2ac3",
  //     "Content-Type": "application/json",
  //   };

  //   let bodyContent = JSON.stringify({
  //     code: "<p>test</p>",
  //     fileName: "Test View 51",
  //     type: "templateset",
  //   });

  //   let response = await fetch(
  //     "https://8-e28c8ff2ae-nlt6w4.api.zesty.io/v1/web/views",
  //     {
  //       method: "POST",
  //       body: bodyContent,
  //       headers: headersList,
  //     }
  //   );

  //   let data = await response.text();
  //   console.log(data);
  // };

  return (
    <>
      <div ref={editorRef} id="editorjs"></div>
      <button onClick={saveFunc}>Save</button>
    </>
  );
};

export default EditorNoSSR;
