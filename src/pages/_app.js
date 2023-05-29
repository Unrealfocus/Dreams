import '@/styles/new.css'
import '@/styles/globals.css'
import React from 'react';
import "remixicon/fonts/remixicon.css";
import "bootstrap/dist/css/bootstrap.css";

export default function App({ Component, pageProps }) {
 
  return (

      <>
      <Component {...pageProps} />
      </>
      
  
  )
}
