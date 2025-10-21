import React from 'react';

/**
 * PUBLIC_INTERFACE
 * Header renders the application title in a gradient header area.
 */
export default function Header() {
  return (
    <header className="header">
      <h1 className="title">Simple Todo</h1>
      <p className="subtitle">Organize your day with focus</p>
    </header>
  );
}
