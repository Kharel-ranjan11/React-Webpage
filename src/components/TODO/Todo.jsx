import React from 'react'
import {FormTodo} from './FormTodo'
import { ListTodo } from './ListTodo'
import { TodoStyle } from './style'
export const Todo = () => {
  return (
  <div style={TodoStyle}>
<FormTodo/>
<ListTodo/>
  </div>
                    )
}
