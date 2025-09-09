import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Play, Clock, CheckCircle } from "lucide-react"

interface Lesson {
  id: number
  title: string
  description: string
  difficulty: string
  duration: string
  completed: boolean
  progress: number
}

interface LessonCardProps {
  lesson: Lesson
}

export function LessonCard({ lesson }: LessonCardProps) {
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty.toLowerCase()) {
      case "beginner":
        return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300 text-md"
      case "intermediate":
        return "bg-yellow-200 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300 text-md"
      case "advanced":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300 text-md"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300 text-md"
    }
  }

  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="space-y-1">
            <CardTitle className="text-lg text-primary">{lesson.title}</CardTitle>
            <CardDescription className="text-md text-pretty">{lesson.description}</CardDescription>
          </div>
          {lesson.completed && <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />}
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center gap-2">
          <Badge className={getDifficultyColor(lesson.difficulty)}>{lesson.difficulty}</Badge>
          <div className="flex items-center gap-1 text-md text-primary">
            <Clock className="w-3 h-3" />
            {lesson.duration}
          </div>
        </div>

        {lesson.progress > 0 && (
          <div className="space-y-2">
            <div className="flex justify-between text-md">
              <span>Progress</span>
              <span>{lesson.progress}%</span>
            </div>
            <Progress value={lesson.progress} className="h-2" />
          </div>
        )}

        <Button className="w-full gap-2 bg-primary hover:bg-accent/20 hover:text-primary text-white" /* variant={lesson.completed ? "outline" : "default"} */> {/* esta parte del código cambia el estado del boton y los colores con la propiedad variant */}
          <Play className="w-4 h-4" />
          {lesson.completed ? "Review" : lesson.progress > 0 ? "Continue" : "Start"}
        </Button>
      </CardContent>
    </Card>
  )
}
