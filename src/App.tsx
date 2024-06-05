type TaskList = Task[]

type Task = {
  checked: boolean
  title: string
  description: string
}

type TaskProps = {
  // control functions and task data
  task: Task
}


export const Task = ({ task }: TaskProps) => {
  return (
    <div className="flex flex-row border rounded-md border-200 border-gray m-5 p-3 items-center gap-3" style={
      task.checked ? { backgroundColor: "lightgreen" } : { backgroundColor: "white" }
    }>
      <div className="border w-[25px] h-[25px] rounded-md" style={
        task.checked ? { backgroundColor: "green" } : { backgroundColor: "white" }

      }>

      </div>

      <div className="flex flex-col" >
        <div className="text-lg">
          {task.title}
        </div>
        <div className="text-sm">
          {task.description}

        </div>
      </div>

    </div >




  )
}

const dummyTaskList: TaskList = [
  {
    checked: true,
    title: "Task 1",
    description: "this is the description of a task"
  },
  {
    checked: false,
    title: "Task 2",
    description: "not a description of a good task"
  },
  {
    checked: false,
    title: "Task 3",
    description: "hello hello"
  },
  {
    checked: false,
    title: "Task 4",
    description: "hello hey hi description"
  }
]

// each task needs to render programmatically
// try to do the map function inline this time


export const TaskList = () => {
  return (
    <div>
      {dummyTaskList.map((item) => <Task task={item} />)}
    </div>
  )
}

export default TaskList;