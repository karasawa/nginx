import React from 'react'
import { useState, useCallback } from 'react'

export const useGetTask = () => {
  const [tasks, setTasks] = useState<any>()
  const getTask = useCallback(async () => {
    await fetch(new URL(`${process.env.NEXT_PUBLIC_RESTAPI_URL}api/task/`), {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((data) => {
        setTasks(data)
      })
      .catch((error) => console.log(error))
  }, [tasks])
  return { getTask, tasks }
}
