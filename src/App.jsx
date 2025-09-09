import React, { useState } from "react";

export default function App() {
  const [todos, setTodos] = useState([
    { id: 1, title: "تعلم useState", done: false },
    { id: 2, title: "بناء تطبيق Todo صغير", done: true },
  ]);
  const [newTitle, setNewTitle] = useState("");
  const [nextId, setNextId] = useState(3);

  const total = todos.length;
  const completed = todos.filter((t) => t.done).length;
  const active = total - completed;

  function addTodo(e) {
    e.preventDefault();
    const title = newTitle.trim();
    if (!title) return;
    const newTodo = { id: nextId, title, done: false, animate: true };
    setTodos((prev) => [newTodo, ...prev]);
    setNewTitle("");
    setNextId((n) => n + 1);
  }

  function toggleTodo(id) {
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t))
    );
  }

  function deleteTodo(id) {
    setTodos((prev) => prev.filter((t) => t.id !== id));
  }

  return (
    <div className="container">
      <h1>✨ TO DO List ✨</h1>

      <div className="kpis~">
        <div className="kpi">
          <div className="num">{total}</div>
          <div>المجموع</div>
        </div>
        <div className="kpi">
          <div className="num">{active}</div>
          <div>نشطة</div>
        </div>
        <div className="kpi">
          <div className="num">{completed}</div>
          <div>منجزة</div>
        </div>
      </div>

      <form onSubmit={addTodo} className="row">
        <input
          placeholder="اكتبي مهمة جديدة..."
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
        />
        <button type="submit">إضافة</button>
      </form>

      {todos.length === 0 ? (
        <div>لا توجد مهام بعد. أضيفي أول مهمة!</div>
      ) : (
        <div className="list">
          {todos.map((todo) => (
            <div className={item ${todo.animate ? "fade-in" : ""}} key={todo.id}>
              <label>
                <input
                  type="checkbox"
                  checked={todo.done}
                  onChange={() => toggleTodo(todo.id)}
                />
                <span className={todo.done ? "done" : ""}>{todo.title}</span>
              </label>
              <button onClick={() => deleteTodo(todo.id)}>حذف</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
