import Head from 'next/head';
import A from '@components/A';

const MainContainer = ({ children, keywords }) => {
  return (
    <>
      <Head>
        <meta keywords={'react, next ' + keywords}></meta>
        <title>Главная страница</title>
      </Head>

      <div className="navbar">
        <A href="/" text="Main" />
        <A href="/users" text="Users" />
        <A href="/todos" text="Todos" />
      </div>

      <div>{children}</div>

      <style jsx>{`
        .navbar {
          background: orange;
          padding: 15px;
        }
      `}</style>
    </>
  );
};

export default MainContainer;
