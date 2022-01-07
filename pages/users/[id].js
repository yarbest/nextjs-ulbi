import { useRouter } from 'next/router';
import MainContainer from '../../components/MainContainer';
import styles from '../../styles/user.module.scss';

export default function User({ user }) {
  const router = useRouter();

  return (
    <MainContainer keywords={user.name}>
      <div className={styles.user}>
        <h1>User with id {router.query.id}</h1>
        <div>Name: {user.name}</div>
      </div>
    </MainContainer>
  );
}

export async function getServerSideProps(context) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${context.params.id}`);
  const user = await response.json();
  return {
    props: { user },
  };
}
