import Calendar from './Components/Calendar'
import TaskEntry from './Components/TaskEntry'
import AdminEntry from './Components/AdminEntry'
import TaskList from './Components/TaskList'

export default function Home() {
  return (
    <div>
    <Calendar />
    <TaskList />
    <TaskEntry />
    <AdminEntry />

    </div>
  )
}
