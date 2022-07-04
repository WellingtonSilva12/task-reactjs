import "./App.css";
import React from "react";
import Title from "./components/Title";
import AddTodo from "./components/AddTodo";
import Todo from "./components/Todo";
import {
  collection,
  query,
  onSnapshot,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "./firebase";

function App() {
  const [todos, setTodos] = React.useState([]);

  React.useEffect(() => {
    const q = query(collection(db, "tasks"));
    const unsub = onSnapshot(q, (querySnapshot) => {
      let tasksArray = [];
      querySnapshot.forEach((doc) => {
        tasksArray.push({ ...doc.data(), id: doc.id });
      });
      setTodos(tasksArray);
    });
    return () => unsub();
  }, []);

  const handleEdit = async (todo, title) => {
    await updateDoc(doc(db, "tasks", todo.id), { title: title });
  };
  const toggleComplete = async (todo) => {
    await updateDoc(doc(db, "tasks", todo.id), { completed: !todo.completed });
  };
  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "tasks", id));
  };
  return (
    <div className="App">
      <div>
        <Title />
      </div>
      <div>
        <AddTodo />
      </div>
      <div className="todo_container">
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            toggleComplete={toggleComplete}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
          />
        ))}
      </div>
    </div>
  );
}
export default App;