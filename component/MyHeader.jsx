import {Fragment, React, useState} from 'react';
import {Container, Button , Header, Image,Segment,Icon } from 'semantic-ui-react';
import Link from 'next/link';
import styles from  '../styles/landing.module.css';
import 'semantic-ui-css/semantic.min.css';

function Myheader(){
  
    return <Container fluid textAlign="center" className={styles.container}>
    <Header> <div className={styles.topfloat}>
    <Link href='/' > 
    <Image src="/logo.png" alt="authLogo" height='50px' width='135.53px' /> 
    </Link>

    <Button.Group>
        <Link href='/' > 
            <Button floated="right" content="Get in touch" style={{fontSize:'10px',height:'28px',width:'114px',marginLeft:'900px',marginTop:'auto',marginBottom:'auto'}}/>
        </Link>
            <Button.Or text='or' />
        <Link href='/' > 
            <Button floated="right" content="Learn more" style={{fontSize:'10px',height:'28px',width:'114px',marginTop:'auto',marginBottom:'auto'}}/>
        </Link>
    </Button.Group>
    </div></Header>

    <div className={styles.authfence}> 
    <Header as='h1' style={{color:'white',textAlign:'left'}}> AuthFence</Header>
    <p className={styles.textcss}> Lorem ipsum dolor sit amet, consetetur sadipscing 
    elitr, sed diam nonumy eirmod tempor invidunt ut
    labore et dolore magna aliquyam erat, sed diam voluptua.</p>
    <div style={{textAlign:'left'}}> 
        <Link href='/' > 
            <Button content='Learn more' />
        </Link>

        <Link href='/' > 
            <Button content='Get in touch' color='red'    />
        </Link>
    </div>

    <div style={{marginTop:'60px'}}>
        <div className=''>SCROLL DOWN TO LEARN MORE</div>
        <Link href='/'>
            <Icon name="angle double down" size="huge" />
        </Link>
    </div>

     </div>
     <Image src="/pexels-fauxels-3183197.png" className={styles.front_page_photo} />
    <Image src="/pexels-andrea-piacquadio-864994.png"  className={styles.front_page_photo2} />
    
    </Container>
}
export default Myheader;
