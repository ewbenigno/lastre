import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts'
import { useTransactions } from '../hooks/useTransactions'
import { groupByCategory } from '../utils/calculateTotals'

const COLORS = ['#ef4444', '#f97316', '#eab308', '#22c55e', '#3b82f6', '#a855f7']

export function CategoryChart() {
  const { transactions } = useTransactions()
  const data = groupByCategory(transactions)

  if (data.length === 0) {
    return <p className="text-gray-500 text-sm">Adicione despesas para ver o gráfico.</p>
  }

  return (
    <div className="bg-surfaceAlt rounded-xl p-4 h-64">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie data={data} dataKey="value" nameKey="category" innerRadius={50} outerRadius={80}>
            {data.map((_, i) => (
              <Cell key={i} fill={COLORS[i % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}
