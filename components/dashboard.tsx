"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  BookOpen,
  Trophy,
  Target,
  Play,
  Star,
  Clock,
  Users,
  Headphones,
  PenTool,
  MessageCircle,
  Award,
  TrendingUp,
} from "lucide-react"
import { LessonCard } from "./lesson-card"
import { ExerciseCard } from "./exercise-card"
import { ProgressChart } from "./progress-chart"

export function Dashboard() {
  const [activeTab, setActiveTab] = useState("lessons")

  const userStats = {
    level: 12,
    xp: 2450,
    streak: 7,
    lessonsCompleted: 45,
    totalLessons: 120,
  }

  const recentLessons = [
    {
      id: 1,
      title: "Pronunciation Practice",
      description: "Master difficult English sounds",
      difficulty: "Beginner",
      duration: "10 min",
      completed: false,
      progress: 60,
    },
    {
      id: 2,
      title: "Present Perfect Tense",
      description: "Learn when and how to use present perfect",
      difficulty: "Intermediate",
      duration: "15 min",
      completed: false,
      progress: 0,
    },
    {
      id: 3,
      title: "Business Vocabulary",
      description: "Essential words for professional communication",
      difficulty: "Advanced",
      duration: "20 min",
      completed: true,
      progress: 100,
    },

  ]

  const exercises = [
    {
      id: 1,
      title: "Grammar Quiz",
      type: "Multiple Choice",
      questions: 15,
      timeLimit: "10 min",
      icon: PenTool,
    },
    {
      id: 2,
      title: "Listening Exercise",
      type: "Audio Comprehension",
      questions: 8,
      timeLimit: "15 min",
      icon: Headphones,
    },
    {
      id: 3,
      title: "Conversation Practice",
      type: "Speaking",
      questions: 5,
      timeLimit: "20 min",
      icon: MessageCircle,
    },
  ]

  return (
    <div className="min-h-screen bg-amber-200">
      {/* Header */}
      <header className="border-b bg-accent/20 border-card shadow-md backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 text-white">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white">
                <BookOpen className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-primary">English Learn</h1>
                <p className="text-md text-balance">Master English with confidence</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Badge className="gap-1 text-md">
                <Star className="w-3 h-3 m-1" />
                Level {userStats.level}
              </Badge>
              <Badge className="gap-1 text-md">
                <Trophy className="w-3 h-3 m-1" />
                {userStats.streak} day streak
              </Badge>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Card className="bg-white hover:shadow-md transition-shadow">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                  <Target className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-md font-bold text-primary">XP Points</p>
                  <p className="text-xl font-bold text-primary">{userStats.xp.toLocaleString()}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white hover:shadow-md transition-shadow">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-md font-bold text-primary">Lessons</p>
                  <p className="text-xl font-bold text-primary">
                    {userStats.lessonsCompleted}/{userStats.totalLessons}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white hover:shadow-md transition-shadow">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-chart-2/10 rounded-lg flex items-center justify-center">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-md font-bold text-primary">Study Time</p>
                  <p className="text-xl font-bold text-primary">12h 30m</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white hover:shadow-md transition-shadow" >
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-md font-bold text-primary">Accuracy</p>
                  <p className="text-xl font-bold text-primary">87%</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="flex w-full bg-balance rounded-lg justify-between gap-2">
            <TabsTrigger value="lessons" className="flex-1 gap-2 bg-primary hover:bg-accent/20 hover:text-primary text-md">
              <BookOpen className="w-4 h-4" />
              Lessons
            </TabsTrigger>
            <TabsTrigger value="exercises" className="flex-1 gap-2 bg-primary hover:bg-accent/20 hover:text-primary text-md">
              <PenTool className="w-4 h-4" />
              Exercises
            </TabsTrigger>
            <TabsTrigger value="progress" className="flex-1 gap-2 bg-primary hover:bg-accent/20 hover:text-primary text-md">
              <TrendingUp className="w-4 h-4" />
              Progress
            </TabsTrigger>
            <TabsTrigger value="achievements" className="flex-1 gap-2 bg-primary hover:bg-accent/20 hover:text-primary text-md">
              <Award className="w-4 h-4" />
              Achievements
            </TabsTrigger>
          </TabsList>

          <TabsContent value="lessons" className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-3xl font-bold text-primary">Continue Learning</h2>
                <p className="text-lg text-red-500">Pick up where you left off</p>
              </div>
              <Button className="gap-2  hover:bg-accent/20 hover:text-primary">
                <Play className="w-4 h-4" />
                Start Daily Lesson
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {recentLessons.map((lesson) => (
                <LessonCard key={lesson.id} lesson={lesson} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="exercises" className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold text-primary">Practice Exercises</h2>
              <p className="text-lg text-red-500">Test your knowledge with interactive exercises</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {exercises.map((exercise) => (
                <ExerciseCard key={exercise.id} exercise={exercise} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="progress" className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold text-primary">Your Progress</h2>
              <p className="text-lg text-red-500">Track your learning journey</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg text-primary">Weekly Progress</CardTitle>
                  <CardDescription className="text-md text-pretty">Your learning activity this week</CardDescription>
                </CardHeader>
                <CardContent>
                  <ProgressChart />
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg text-primary">Overall Progress</CardTitle>
                  <CardDescription className="text-md text-pretty">Course completion status</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Grammar Fundamentals</span>
                      <span>85%</span>
                    </div>
                    <Progress value={85} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Vocabulary Building</span>
                      <span>72%</span>
                    </div>
                    <Progress value={72} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Pronunciation</span>
                      <span>60%</span>
                    </div>
                    <Progress value={60} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Conversation Skills</span>
                      <span>45%</span>
                    </div>
                    <Progress value={45} className="h-2" />
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="achievements" className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold text-primary">Achievements</h2>
              <p className="text-lg text-red-500">Celebrate your learning milestones</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Trophy className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-lg text-primary">First Lesson</h3>
                  <p className="text-md text-pretty">Complete your first English lesson</p>
                  <Badge className="mt-3">Earned</Badge>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Star className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-lg text-primary">Week Warrior</h3>
                  <p className="text-md text-pretty">Study for 7 consecutive days</p>
                  <Badge className="mt-3">Earned</Badge>
                </CardContent>
              </Card>

              <Card /* className="opacity-60" */> {/* esta parte del código cambia el estado de la card a opaco, el contexto de esta card es que este bloqueada hasta completar todas las grammar lessons, una vez terminadas se desbloquea, seguramente se tendran que añadir funcionalidades extra */}
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-muted-foreground" />
                  </div>
                  <h3 className="text-lg text-primary">Grammar Master</h3>
                  <p className="text-md text-pretty">Complete all grammar lessons</p>
                  <Badge className="mt-3">
                    Locked
                  </Badge>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
