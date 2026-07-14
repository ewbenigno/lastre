import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts'
import { useTransactions } from '../hooks/useTransactions'
import { groupByCategory } from '../utils/calculateTotals'

const COLORS = ['#ef4444', '#f97316', '#eab308', '#22c55e', '#3b82f6', '#a855f7']

export function CategoryChart() {
  const { transactions } = useTransactions()
  const data = groupByCategory(transactions)

  if (data.length === 0) {
    return <p className="text-textSecondary text-sm">Adicione despesas para ver o gráfico.</p>
  }

  return (
    <div className="bg-card rounded-xl p-4 h-64">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie data={data} dataKey="value" nameKey="category" innerRadius={50} outerRadius={80}>
            {data.map((_, i) => (
              <Cell key={i} fill={COLORS[i % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip
            contentStyle={{
              backgroundColor: '#1c1c1e',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '8px',
              fontFamily: '"JetBrains Mono", monospace',
              fontSize: '13px',
            }}
            labelStyle={{ color: '#f2f2f2' }}
            itemStyle={{ color: '#f2f2f2' }}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}
