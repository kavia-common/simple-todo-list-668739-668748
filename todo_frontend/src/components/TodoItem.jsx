import React from 'react';

/**
 * PUBLIC_INTERFACE
 * TodoItem renders a single task with a delete action.
 * Props:
 * - item: { id: string, text: string }
 * - onDelete: function(id:string) => void
 */
export default function TodoItem({ item, onDelete }) {
  return (
    <li className="todo-item">
      <span className="todo-text">{item.text}</span>
      <button
        type="button"
        className="icon-btn danger"
        onClick={() => onDelete(item.id)}
        aria-label={`Delete task: ${item.text}`}
        title="Delete task"
      >
        ×
      </button>
    </li>
  );
}
