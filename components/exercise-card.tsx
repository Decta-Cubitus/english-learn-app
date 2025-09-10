import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Clock, Play } from "lucide-react"
import type { LucideIcon } from "lucide-react"

interface Exercise {
  id: number
  title: string
  type: string
  questions: number
  timeLimit: string
  icon: LucideIcon
}

interface ExerciseCardProps {
  exercise: Exercise
}

export function ExerciseCard({ exercise }: ExerciseCardProps) {
  const Icon = exercise.icon

  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardHeader className="pb-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
            <Icon className="w-5 h-5 text-primary" />
          </div>
          <div>
            <CardTitle className="text-lg text-primary">{exercise.title}</CardTitle>
            <CardDescription className="text-md text-pretty">{exercise.type}</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-4">
            <span className=" text-lg text-primary">{exercise.questions} questions</span>
            <div className="flex items-center gap-1 text-lg text-blue-500">
              <Clock className="w-3 h-3" />
              {exercise.timeLimit}
            </div>
          </div>
        </div>

        <Button className="w-full gap-2 bg-primary hover:bg-accent/20 hover:text-primary">
          <Play className="w-4 h-4" />
          Start Exercise
        </Button>
      </CardContent>
    </Card>
  )
}
