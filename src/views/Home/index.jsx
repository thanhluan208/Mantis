import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getTodosList } from "redux/modules/todos";
import { GetListTodoSelector } from "redux/selectors";

const HomePage = (props) => {
  const dispatch = useDispatch();
  const todoList = GetListTodoSelector();
  const { data: listTodo, loading } = todoList;

  useEffect(() => {
    dispatch(getTodosList({
      onSuccess: (response) => {
        console.log(response);
      },
      onFailed: (error) => {
        console.log(error)
      }
    }));
  }, [dispatch]);

  // Render
  if (loading) {
    return (
      <div>Loading...</div>
    )
  }

  return (
    <div>
      List Todo
      <hr />
      {listTodo.map((el) => (
        <div key={el.id}>
          {el.id} - {el.title}
        </div>
      ))}
    </div>
  )
}
export default HomePage;