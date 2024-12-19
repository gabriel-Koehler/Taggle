'use client'
import { AppProps } from 'next/app';
import Layout from './layout';
export default function App({Component,pageProps}:AppProps){
  
  return(
    <Layout>
      <Component {...pageProps}></Component>
    </Layout>
  )



}