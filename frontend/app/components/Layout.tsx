import React from 'react'
import Head from 'next/head'
import { FC, ReactNode } from 'react'

type Props = {
  title: string
  children: ReactNode
}

export const Layout: FC<Props> = ({ title = 'todo-app', children }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      <header></header>
      <main>{children}</main>
      <footer></footer>
    </div>
  )
}
