import EditorJS from "@editorjs/editorjs";
import { useRef, useEffect } from "react";

function useEditor() {
  const isReadyRef = useRef<boolean>(false);
  const editorInstanceRef = useRef<EditorJS>();

  useEffect(() => {
    let editor: EditorJS;

    if (!isReadyRef.current && !editorInstanceRef.current) {
      editor = new EditorJS({
        onReady() {
          isReadyRef.current = true;
        },
      });
      editorInstanceRef.current = editor;
    }

    return () => {
      if (isReadyRef.current) {
        editor.destroy();
        editorInstanceRef.current = undefined;
      }
    };
  }, []);

  return {
    isReady: isReadyRef.current,
    editorInstance: editorInstanceRef.current,
  };
}

export default useEditor;
