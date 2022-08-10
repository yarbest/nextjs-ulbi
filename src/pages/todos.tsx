import { GetStaticProps } from 'next';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import MainContainer from '../components/MainContainer';
import { RootState, wrapper } from 'src/store';
import { useSelector } from 'react-redux';
import { fetchTodos, fetchTodosCreateThunk, selectTodos } from 'src/store/slices/todosSlice';

const Todos = () => {
  // const todos = useSelector(selectTodos);
  // но сымсла в состоянии загрузки нет, так как данные на сервере получаются
  const { error, isLoading, todos } = useSelector((state: RootState) => state.todos);
  console.log(error, isLoading, 1);

  return (
    <MainContainer keywords="todos">
      <h1>Todos page</h1>
      {error}
      {isLoading && <p>Loading...</p>}
      <ul>
        {todos?.map((todo) => (
          <li key={todo.id}>
            <Link href={`/todos/${todo.id}`}>
              <a>{todo.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </MainContainer>
  );
};

export default Todos;

export const getStaticProps: GetStaticProps = wrapper.getStaticProps((store) => async ({ params }) => {
  // await store.dispatch(fetchTodos()); //это надо подождать

  await store.dispatch(fetchTodosCreateThunk());
  return {
    props: {},
  };
});
