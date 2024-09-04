"use client";

import { TrendingUp } from "lucide-react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  LabelList,
  XAxis,
  YAxis,
} from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
const chartData = [
  { criterionType: "Task Achievement", score: 7 },
  { criterionType: "Coherence and Cohesion", score: 6 },
  { criterionType: "Lexical Resource", score: 5 },
  { criterionType: "Grammatical Range and Accuracy", score: 8 },
];

const chartConfig = {
  score: {
    label: "score",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

export default function ScoreStat() {
  return (
    <Card>
      <CardHeader>
        <CardDescription>IELTS Score Evaluator</CardDescription>
        <CardTitle>6,5 out of 9</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart
            accessibilityLayer
            data={chartData}
            layout="vertical"
            margin={{
              right: 16,
            }}
          >
            <CartesianGrid horizontal={false} />
            <YAxis
              dataKey="criterionType"
              type="category"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
              hide
            />
            <XAxis dataKey="score" type="number" hide />
            <Bar
              dataKey="score"
              layout="vertical"
              fill="var(--color-score)"
              radius={4}
            >
              <LabelList
                dataKey="criterionType"
                position="insideLeft"
                offset={8}
                className="fill-[--color-label]"
                fontSize={12}
              />
              <LabelList
                dataKey="score"
                position="right"
                offset={8}
                className="fill-foreground"
                fontSize={12}
              />
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
