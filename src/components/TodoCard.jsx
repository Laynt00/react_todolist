import { React, useState } from "react"


export default function TodoCard(props) {

    const { children, handleDeleteTodos, index, handleEditTodos, handleCheckTodos } = props
    const [isChecked, setIsChecked] = useState(false)

    const handleCheckClick = () => {
        setIsChecked(!isChecked);
    };

    return (
        <li className={`todoItem ${isChecked ? 'completed' : ''}`}>
            {children}
            <div className="actionsContainer">
            	<button onClick={handleCheckClick} className={`check-btn ${isChecked ? 'checked' : ''}`}>
                    <i className="fa-solid fa-check"></i>
                </button>
                <button onClick={() => handleEditTodos(index)}>
                    <i className="fa-solid fa-pen-to-square"></i>
                </button>
                <button onClick={() => handleDeleteTodos(index)}>
                    <i className="fa-solid fa-trash"></i>
                </button>
            </div>
        </li>
    );
}