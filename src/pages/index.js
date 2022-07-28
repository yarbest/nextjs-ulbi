import Image from 'next/image';
import MainContainer from '../components/MainContainer';
import s from '../styles/Index.module.scss';

const Index = () => {
  return (
    <MainContainer keywords="main">
      <h1>Main page</h1>
      <div className={s.imageContainer}>
        <Image className={s.image} src="/images/img.jpg" width="522" height="522" />
      </div>
    </MainContainer>
  );
};

export default Index;
