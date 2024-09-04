"use client";

import { Button } from "@/components/ui/button";
import Editor from "@/components/ui/editor";
import ScoreStat from "@/components/ui/score-stat";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import SuggestionCard from "@/components/ui/suggestion-card";
import { useCallback, useEffect, useState } from "react";
import EditorJS from "@editorjs/editorjs";

export default function Home() {
  const [editorInstance, setEditorInstance] = useState<EditorJS | null>(null);

  const initializeEditor = useCallback((element: HTMLElement | null) => {
    if (element === null) return;

    const saveData = localStorage.getItem("local");
    const parsedData = saveData ? JSON.parse(saveData) : null;

    const editor = new EditorJS({
      holder: element,
      data: parsedData,
      // add other editorjs options here
    });

    setEditorInstance(editor);
  }, []);

  useEffect(() => {
    return () => {
      editorInstance?.destroy();
    };
  }, [editorInstance]);

  const handleSave = async () => {
    const result = await editorInstance?.save();
    localStorage.setItem("local", JSON.stringify(result));
  };

  return (
    <main className="h-screen overflow-auto px-14">
      <div className="grid grid-cols-10 gap-4 h-full">
        <div className="col-span-6 h-full overflow-auto p-4">
          <div className="flex flex-col gap-4">
            <div className="flex justify-between items-center">
              <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                IELTS Writing Task 2
              </h3>
              <Button onClick={handleSave}>Save</Button>
            </div>
            <Editor ref={initializeEditor} />
          </div>
        </div>
        <div className="col-span-4 h-full overflow-auto p-4">
          <div className="flex flex-col gap-4">
            <ScoreStat />
            <Select defaultValue="all_criteria">
              <SelectTrigger className="w-full">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all_criteria">All Criteria</SelectItem>
                <SelectItem value="task_achievement">
                  Task Achievement
                </SelectItem>
                <SelectItem value="coherence_and_cohesion">
                  Coherence and Cohesion
                </SelectItem>
                <SelectItem value="lexical_resource">
                  Lexical Resource
                </SelectItem>
                <SelectItem value="grammatical_range_and_accuracy">
                  Grammatical Range and Accuracy
                </SelectItem>
              </SelectContent>
            </Select>
            <SuggestionCard
              className="bg-yellow-200"
              criterionType="Lexical Resource"
              sample="popular discussions"
              sampleImprovement="widespread debates"
              suggestion="use more sophisticated vocabulary"
            />
            <SuggestionCard
              className="bg-green-200"
              criterionType="Coherence and Cohesion"
              sample="Secondly, people will have more frequent quality time with their family and friends."
              sampleImprovement="Furthermore, extended weekends would allow individuals to spend more frequent quality time with their families and friends."
              suggestion="use a variety of cohesive devices (e.g., moreover, however, consequently, in addition) to connect ideas within and between paragraphs."
            />
          </div>
        </div>
      </div>
    </main>
  );
}
