import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrash, faCheck } from '@fortawesome/free-solid-svg-icons';

function TodoItem({ task, onDelete, onComplete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(task.text);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    onEdit(task, editedText);
    setIsEditing(false);
  };

  return (

    <li className={task.completed ? 'completed' : 'incomplete'}>
      {isEditing ? (
        <input
          type="text"
          value={editedText}
          onChange={(e) => setEditedText(e.target.value)}
        />
      ) : (
        task.text
      )}
      {!task.completed ? (
        <div className='todo-btn'>
          <button onClick={handleEditClick}><FontAwesomeIcon icon={faPenToSquare} /></button>
          <button onClick={onDelete}><FontAwesomeIcon icon={faTrash} /></button>
          <button onClick={onComplete}><FontAwesomeIcon icon={faCheck} /></button>

        </div>
      ) : (
        <>
          <span>Completed</span>
        </>
      )}
      {isEditing && <button onClick={handleSaveClick}>Save</button>}
    </li>
  );
}

export default TodoItem;
