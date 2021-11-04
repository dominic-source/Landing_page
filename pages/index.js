import {React, useState, Fragment} from 'react';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import { Button } from 'semantic-ui-react';

function Home() {
  return <div>
    <Link href='/landingpage' >
      <Button content='Previous' icon="arrow down" textAlign="center" ></Button>
    </Link>
  </div>
    
  
}

export default Home;