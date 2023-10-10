import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../Redux/action";

export const Homepage = () => {
  document.title = "Homepage";

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(
    (store) => store.userReducer.isAuthenticated
  );
  const { username: name } = useSelector(
    (store) => store.userReducer.currentUser
  );
  const token = localStorage.getItem("token");

  const [todoData, setTodoData] = useState([]);

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
      return;
    }

    const storedTodoData = localStorage.getItem("tododata");

    if (storedTodoData) {
      const parsedTodoData = JSON.parse(storedTodoData);
      setTodoData(parsedTodoData);
    }
  }, [isAuthenticated, navigate]);

  return isAuthenticated ? (
    <div>
      <h1>Homepage</h1>
      <p>
        Welcome back, {name}!
        <button
          className="logoutbutton"
          onClick={() => {
            dispatch(logoutUser());
            navigate("/");
          }}
        >
          Logout <ion-icon name="log-out-outline"></ion-icon>
        </button>{" "}
      </p>
      <div id="data">
        {todoData.map((todo) => (
          <div key={todo._id}>
            <p>Task Name: {todo.taskname}</p>
            <p>Status: {todo.status}</p>
            <p>Tag: {todo.tag}</p>
          </div>
        ))}
      </div>
    </div>
  ) : null;
};
