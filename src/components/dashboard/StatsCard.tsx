import { Card, CardContent } from '@/components/ui/Card'
import { ReactNode } from 'react'

interface StatsCardProps {
  title: string
  value: string | number
  description?: string
  icon: ReactNode
  trend?: {
    value: number
    isPositive: boolean
  }
}

export default function StatsCard({ title, value, description, icon, trend }: StatsCardProps) {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <p className="text-sm font-medium text-gray-600 mb-1">
              {title}
            </p>
            <p className="text-3xl font-bold text-gray-900 mb-1">
              {value}
            </p>
            {description && (
              <p className="text-sm text-gray-500">
                {description}
              </p>
            )}
            {trend && (
              <div className="flex items-center mt-2">
                <span className={`text-sm font-medium ${trend.isPositive ? 'text-green-600' : 'text-red-600'}`}>
                  {trend.isPositive ? '↑' : '↓'} {Math.abs(trend.value)}%
                </span>
                <span className="text-sm text-gray-500 ml-2">
                  vs. mes anterior
                </span>
              </div>
            )}
          </div>
          <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-lg ml-4">
            {icon}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}