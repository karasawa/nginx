import React from 'react'

export const useDeleteTask = (id: number) => {
  const deleteTask = async () => {
    await fetch(
      new URL(`${process.env.NEXT_PUBLIC_RESTAPI_URL}api/task/${String(id)}/`),
      {
        method: 'DELETE',
      }
    )
      .then((res) => console.log(res))
      .catch((error) => console.log(error))
  }
  return { deleteTask }
}
