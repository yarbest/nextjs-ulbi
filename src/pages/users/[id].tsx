import { GetServerSideProps, GetStaticPaths, GetStaticPathsContext, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userService } from 'src/store/services/userService';
import getStore, { wrapper } from 'src/store';
import MainContainer from '../../components/MainContainer';
import styles from '../../styles/user.module.scss';
import { counterSlice, selectCounter } from 'src/store/slices/counterSlice';

export default function User() {
  const router = useRouter();
  const { data: user } = userService.useGetUserQuery(router.query.id);
  const counter = useSelector(selectCounter);

  const dispatch = useDispatch();
  return (
    <MainContainer keywords={user?.name}>
      <div className={styles.user}>
        <h1>User with id {router.query.id}</h1>
        <div>Name: {user?.name}</div>
        {counter}
        <button onClick={() => dispatch(counterSlice.actions.increment(counter + 1))}>inc</button>
      </div>
    </MainContainer>
  );
}

// export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps((store) => async ({ params }) => {
//   await store.dispatch(userService.endpoints.getUser.initiate(params?.id));
//   await Promise.all(userService.util.getRunningOperationPromises()); //так просто надо
//   return {
//     props: {},
//     //initialReduxState: store.getState() внутри props нужен для создания store при передаче в Provider в файле _app
//     // но так как использую wrapper.withRedux, то не нужно это делать
//   };
// });

// In order to avoid providing stale data with Static Site Generation (SSG), you may wish to set refetchOnMountOrArgChange
// to a reasonable value such as 900 (seconds) in order to allow data to be re-fetched when accessed if it has been that
// long since the page was generated.

export const getStaticPaths = async () => {
  const store = getStore();
  const result = await store.dispatch(userService.endpoints.getUsers.initiate());
  return {
    paths: result.data?.map((p: any) => ({ params: { id: p.id.toString() } })),
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = wrapper.getStaticProps((store) => async ({ params }) => {
  await store.dispatch(userService.endpoints.getUser.initiate(params?.id));
  await Promise.all(userService.util.getRunningOperationPromises());
  return {
    props: {},
  };
});

// export const getStaticPaths: GetStaticPaths = async (context: GetStaticPathsContext) => {
//   const users = await (await fetch('https://jsonplaceholder.typicode.com/users'))?.json();
//   // обратите внимание на структуру возвращаемого массива
//   const paths = users.map((user: any) => ({
//     params: { id: user.id.toString() },
//   }));
//   // `fallback: false` означает, что для ошибки 404 используется другой маршрут
//   return {
//     paths,
//     fallback: false,
//   };
// };

// export const getStaticProps: GetStaticProps = async (context) => {
//   const store = getStore();
//   await store.dispatch(userService.endpoints.getUser.initiate(context.params?.id));
//   return {
//     props: {
//       initialState: store.getState(),
//     },
//   };

// const user = await (await fetch(`https://jsonplaceholder.typicode.com/users/${context.params?.id}`)).json();

// if (!user) {
//   return {
//     notFound: true,
//   };
// }

// return {
//   props: {
//     user,
//   },
// };
// };

// export const getServerSideProps: GetServerSideProps = async (context) => {
//   const response = await fetch(`https://jsonplaceholder.typicode.com/users/${context.params?.id}`);
//   const user = await response.json();
//   return {
//     props: { user },
//   };
// };

// export async function getServerSideProps() {
//   const store = getStore();
//   await store.dispatch(userService.endpoints.getUser.initiate(1));
//   return {
//     props: {
//       initialState: store.getState(),
//     },
//   };
// }
