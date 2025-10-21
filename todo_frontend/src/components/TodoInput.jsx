import React, { useState } from 'react';

/**
 * PUBLIC_INTERFACE
 * TodoInput provides a controlled text input and button to add tasks.
 * Props:
 * - onAdd: function(text:string) => void
 */
export default function TodoInput({ onAdd }) {
  const [text, setText] = useState('');

  const submit = () => {
    const cleaned = text.trim();
    if (!cleaned) return;
    onAdd(cleaned);
    setText('');
  };

  const onKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      submit();
    }
  };

  return (
    <div className="todo-input">
      <label htmlFor="task-input" className="sr-only">
        Add a new task
      </label>
      <input
        id="task-input"
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={onKeyDown}
        placeholder="Add a new task..."
        className="input"
        aria-label="Task description"
      />
      <button
        type="button"
        className="btn"
        onClick={submit}
        aria-label="Add task"
        title="Add task"
      >
        Add
      </button>
    </div>
  );
}
