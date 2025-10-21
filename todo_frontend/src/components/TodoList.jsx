import React from 'react';
import TodoItem from './TodoItem';

/**
 * PUBLIC_INTERFACE
 * TodoList renders a list of TodoItem components.
 * Props:
 * - items: Array<{id:string, text:string}>
 * - onDelete: function(id:string) => void
 */
export default function TodoList({ items, onDelete }) {
  if (!items?.length) {
    return <p className="empty">No tasks yet. Add your first task above.</p>;
  }

  return (
    <ul className="todo-list" aria-live="polite">
      {items.map((item) => (
        <TodoItem key={item.id} item={item} onDelete={onDelete} />
      ))}
    </ul>
  );
}
