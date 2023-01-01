import React from 'react'

export const useAddTask = (title: string) => {
  const addTask = async () => {
    await fetch(new URL(`${process.env.NEXT_PUBLIC_RESTAPI_URL}api/task/`), {
      method: 'POST',
      body: JSON.stringify({
        title: title,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => console.log(res))
      .catch((error) => console.log(error))
  }
  return { addTask }
}
