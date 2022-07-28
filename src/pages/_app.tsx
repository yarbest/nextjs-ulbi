import { Provider } from 'react-redux';
import { AppProps } from 'next/app';
import getStore, { wrapper } from 'src/store';
import '../styles/global.css';

// @ts-ignore
// import { abortableFetch } from 'abortcontroller-polyfill/dist/cjs-ponyfill';
// import 'abortcontroller-polyfill/dist/polyfill-patch-fetch';
// import 'isomorphic-fetch';

//Полезные ссылки с примерами
// https://github.com/Shiyan7/kinomore/tree/b26d120f25fe5417a9196bda8687d2708358e5a3 - проект
// https://github.com/vercel/next.js/tree/canary/examples - официальные примеры
// https://github.com/phryneas/ssr-experiments/tree/main/nextjs-blog - пример с rtk query

// import { Headers, Request, Response } from 'node-fetch'; //fetch,
// import { AbortController } from 'abort-controller';
// // @ts-ignore
// global.AbortController = AbortController;
// // @ts-ignore
// import fetch from 'isomorphic-fetch';
// //без этого работать не будет
// Object.assign(globalThis, {
//   // fetch: abortableFetch(fetch).fetch,
//   fetch,
//   Headers,
//   Request,
//   Response,
//   AbortController,
// });

function MyApp({ Component, pageProps }: AppProps) {
  // const store = getStore();
  return (
    //Provider не нужен так как есть wrapper.withRedux
    // <Provider store={store}>
    <Component {...pageProps} />
    // </Provider>
  );
}

export default wrapper.withRedux(MyApp);
