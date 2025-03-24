import React from 'react'
import TodoCard from './TodoCard'

export default function TodoList() {

	let todos = [
		'Ir al gimnasio',
		'Sacar al perro',
		'Regar las plantas'
	]
  
  
    return (
    	<ul className='main'>
			{todos.map((todo, todoIndex) => {
				return(
					<TodoCard key={todoIndex}>
						<p>{todo}</p>
					</TodoCard>
				)
			})}
		</ul>
  )
}
