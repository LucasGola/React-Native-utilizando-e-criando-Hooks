import React from 'react';
import Top from './components/Top';
import Producers from './components/Producers';

export default function Home() {
  return <>
    <Producers top={Top}/>
  </>;
}
