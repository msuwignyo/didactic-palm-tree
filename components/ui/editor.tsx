"use client";

import { useEffect, useRef } from "react";
import EditorJS from "@editorjs/editorjs";

export default function Editor() {
  const isReadyRef = useRef<boolean>(false);
  const editorRef = useRef<EditorJS>();

  useEffect(() => {
    let editor: EditorJS;

    if (!isReadyRef.current && !editorRef.current) {
      editor = new EditorJS({
        onReady() {
          isReadyRef.current = true;
        },
      });
      editorRef.current = editor;
    }

    return () => {
      if (isReadyRef.current) {
        editor.destroy();
      }
    };
  }, []);

  return <div id="editorjs" />;
}
