"use client"

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts"

const data = [
  { day: "Mon", minutes: 45 },
  { day: "Tue", minutes: 30 },
  { day: "Wed", minutes: 60 },
  { day: "Thu", minutes: 25 },
  { day: "Fri", minutes: 55 },
  { day: "Sat", minutes: 40 },
  { day: "Sun", minutes: 35 },
]

export function ProgressChart() {
  return (
    <ResponsiveContainer width="100%" height={200}>
      <BarChart data={data}>
        <XAxis dataKey="day" axisLine={false} tickLine={false} className="text-md" />
        <YAxis axisLine={false} tickLine={false} className="text-md" />
        <Tooltip
          content={({ active, payload, label }) => {
            if (active && payload && payload.length) {
              return (
                <div className="bg-card border rounded-lg p-2 shadow-md">
                  <p className="text-sm font-medium text-primary">{label}</p>
                  <p className="text-sm text-secondary">{payload[0].value} minutes studied</p>
                </div>
              )
            }
            return null
          }}
        />
        <Bar dataKey="minutes" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  )
}
