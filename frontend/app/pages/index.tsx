import React, { useEffect, useState } from 'react'
import { Layout } from '../components/Layout'
import { useGetTask } from '../hooks/useGetTask'
import { useAddTask } from '../hooks/useAddTask'
import { useDeleteTask } from '../hooks/useDeleteTask'

export default function Home() {
  const [title, setTitle] = useState<string>('')
  const [updateFlg, setUpdateFlg] = useState<boolean>(false)

  const { getTask, tasks } = useGetTask()
  const { addTask } = useAddTask(title)
  useEffect(() => {
    getTask()
  }, [])

  const clickAddBtnHandler = async () => {
    await addTask()
    await getTask()
    await setTitle('')
  }

  const clickDeleteBtnHander = async (id: number) => {
    const { deleteTask } = useDeleteTask(id)
    await deleteTask()
    await getTask()
  }

  return (
    <Layout title="home">
      <div>
        <h3>sample-todo</h3>
        <div>
          <input
            type="text"
            placeholder="todoを入力"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <button onClick={clickAddBtnHandler}>追加</button>
        </div>
        {tasks &&
          tasks.map((task: any) => (
            <li key={task.id}>
              {task.id} : {task.title}
              <button onClick={() => clickDeleteBtnHander(task.id)}>
                削除
              </button>
            </li>
          ))}
      </div>
    </Layout>
  )
}
