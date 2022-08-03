import Image from 'next/image';
import MainContainer from '../components/MainContainer';
import s from '../styles/Index.module.scss';
import image from '/public/images/img.jpg';

const Index = () => {
  console.log(process.env.NEXT_PUBLIC_TEST);
  // NEXT_PUBLIC_ нужен, чтобы можно было получить доступ к переменной В БРАУЗЕРЕ
  // переменные без этой приставки можно получить например в getServerSideProps
  return (
    <MainContainer keywords="main">
      <h1>Main page</h1>
      <div className={s.imageContainer}>
        <Image className={s.image} src={image} />
      </div>
    </MainContainer>
  );
};

export default Index;
