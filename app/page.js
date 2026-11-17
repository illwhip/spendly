import { getExpenses } from "@/lib/expenses"
import { formatMoney, sum } from "@/lib/helpers"
import Link from "next/link"
import DeleteButton from "@/components/DeleteButton"

export default async function HomePage() {
  const expenses = await getExpenses()

  return (
    <main>
      <div className="page-header">
        <h1>Expenses</h1>
        <Link href="/expenses/new" className="button">+ Add expense</Link>
      </div> 
      <section className="card">
        <div className="list-header">
          <h2>All Expenses</h2>
          <p className="total">{formatMoney(sum(expenses))}</p>
        </div>
        <ul className="expenses-list">
          {expenses.map((expense) => (
            <li key={expense.id} className="expense">
              <div>
                <p className="expense-title">{expense.title}</p>
                <p className="muted">{expense.category} · {expense.date}</p>
              </div>
              <p className="expense-amount">{formatMoney(expense.amount)}</p>
              <div className="expense-actions">
                <Link href={`/expenses/${expense.id}/edit`}>Edit</Link>
                <DeleteButton id={expense.id} />
              </div>
            </li>
          ))}
        </ul>
      </section>
    </main>
  )
}
