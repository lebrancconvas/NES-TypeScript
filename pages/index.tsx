/*
 * nes-ts:
 * Emulator for the Nintendo Entertainment System (R) Archetecture.
 * Written by and Copyright (C) 2021 Shingo OKAWA shingo.okawa.g.h.c@gmail.com
 * Trademarks are owned by their respect owners.
 */
import Head from 'next/head';
import styles from '../styles/Home.module.css'
import {
  NES
} from '../app/components/nes';

export default function Home() {
  return (
    <div className={styles.root}>
      <Head>
        <title>NES TypeScript</title>
      </Head>
      <NES width={256} height={240}/>
    </div>
  );
}
