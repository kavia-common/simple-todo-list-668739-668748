import React, { useEffect, useState } from 'react';
import './index.css';
import './theme.css';
import Header from './components/Header';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

/**
 * PUBLIC_INTERFACE
 * App is the main entry component for the Simple Todo List.
 * It manages the todo items state and persistence, and renders the layout.
 */
function App() {
  // Keep todos at top-level: { id: string, text: string }
  const [todos, setTodos] = useState(() => {
    try {
      const raw = localStorage.getItem('todos');
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  });

  // Persist to localStorage whenever todos change
  useEffect(() => {
    try {
      localStorage.setItem('todos', JSON.stringify(todos));
    } catch {
      // ignore storage errors
    }
  }, [todos]);

  // PUBLIC_INTERFACE
  const addTodo = (text) => {
    /** Adds a new todo item if text is valid (non-empty after trim). */
    const clean = String(text ?? '').trim();
    if (!clean) return; // validation: ignore empty
    setTodos((prev) => [
      { id: `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`, text: clean },
      ...prev,
    ]);
  };

  // PUBLIC_INTERFACE
  const deleteTodo = (id) => {
    /** Removes the todo with the specified id. */
    setTodos((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <div className="ocean-app">
      <div className="ocean-gradient-header">
        <Header />
      </div>

      <main className="ocean-container">
        <section className="ocean-surface todo-card" aria-labelledby="todo-title">
          <h2 id="todo-title" className="todo-title">Your Tasks</h2>
          <TodoInput onAdd={addTodo} />
          <TodoList items={todos} onDelete={deleteTodo} />
        </section>
      </main>

      <footer className="ocean-footer">
        <span className="muted">Tasks are stored locally in your browser.</span>
      </footer>
    </div>
  );
}

export default App;
