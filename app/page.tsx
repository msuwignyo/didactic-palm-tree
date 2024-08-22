import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import Editor from "@/components/ui/editor";
import { CircleHelp } from "lucide-react";

export default function Home() {
  return (
    <main className="container p-4 h-screen overflow-auto">
      <div className="grid grid-cols-3 gap-4 h-full">
        <div className="col-span-2 h-full overflow-auto">
          <Editor />
        </div>
        <div className="h-full">
          <div className="flex flex-col gap-4">
            <Card>
              <CardHeader>
                <CardDescription className="flex gap-2 items-center">
                  Lexical Resource <CircleHelp className="w-4" />
                </CardDescription>
              </CardHeader>
              <CardContent>
                ...some <del>popular discussions</del>{" "}
                <strong>widespread debates</strong> around the world...
              </CardContent>
              <CardFooter>
                <CardDescription>
                  <em>Reason:</em> replace common words with more advanced
                  synonyms.
                </CardDescription>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardDescription className="flex gap-2 items-center">
                  Coherence and Cohesion <CircleHelp className="w-4" />
                </CardDescription>
              </CardHeader>
              <CardContent>
                <del>
                  Secondly, people will have more frequent quality time with
                  their family and friends.
                </del>{" "}
                <strong>
                  Furthermore, extended weekends would allow individuals to
                  spend more frequent quality time with their families and
                  friends.
                </strong>
              </CardContent>
              <CardFooter>
                <CardDescription>
                  <em>Reason:</em> use a variety of cohesive devices (e.g.,
                  moreover, however, consequently, in addition) to connect ideas
                  within and between paragraphs.
                </CardDescription>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
}
