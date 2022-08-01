import Image from 'next/image';
import MainContainer from '../components/MainContainer';
import s from '../styles/Index.module.scss';
import image from '/public/images/img.jpg';

const Index = () => {
  return (
    <MainContainer keywords="main">
      <h1>Main page</h1>
      <div className={s.imageContainer}>
        <Image layout="responsive" className={s.image} src={image} />
      </div>
    </MainContainer>
  );
};

export default Index;
