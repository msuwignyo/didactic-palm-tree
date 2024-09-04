"use client";

import { CircleHelp } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "./card";
import { ComponentProps } from "react";

type SuggestionCardProps = {
  criterionType: string;
  sample: string;
  sampleImprovement: string;
  issue?: string;
  suggestion: string;
} & ComponentProps<typeof Card>;

function SuggestionCard(props: SuggestionCardProps) {
  const {
    criterionType,
    sampleImprovement,
    issue,
    sample,
    suggestion,
    ...cardProps
  } = props;
  return (
    <Card {...cardProps}>
      <CardHeader>
        <CardDescription className="flex gap-2 items-center">
          {criterionType} <CircleHelp className="w-4" />
        </CardDescription>
      </CardHeader>
      <CardContent>
        <del>{sample}</del> <strong>{sampleImprovement}</strong>
      </CardContent>
      <CardFooter>
        <CardDescription>
          <em>
            {issue} {suggestion}
          </em>
        </CardDescription>
      </CardFooter>
    </Card>
  );
}

export default SuggestionCard;
