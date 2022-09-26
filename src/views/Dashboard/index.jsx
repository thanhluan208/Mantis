import { useGetListTodos } from 'hooks/todos/useTodoHooks';
import React from 'react';
import SimpleDialogDemo from './Simple';

const Dashboard = (props) => {
  const { data: resListTodos, isLoading, error, refetch } = useGetListTodos();

  if (isLoading) {
    return 'Loading...';
  }

  return (
    <div>
      <SimpleDialogDemo />
      {(resListTodos?.data || []).map((el) => {
        return <div key={el.title}>{el.title}</div>;
      })}
    </div>
  );
};

export default Dashboard;
