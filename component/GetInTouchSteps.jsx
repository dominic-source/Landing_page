import {Fragment, React, useState} from 'react';
import { Header, List,Button, Container} from 'semantic-ui-react';
import  styles from '../styles/landing.module.css';
import Link from 'next/link';
import 'semantic-ui-css/semantic.min.css';

function Getintouchsteps(){
    return <div >
<Header as='h2' icon textAlign='center' style={{
    marginTop:"50px"
}}>
    <Header.Content as ='h2' className={styles.toptextcss}>Get started verifying</Header.Content>
    
    <List horizontal relaxed className={styles.getInTouchStepscolor}>
        <List.Item>
            <List.Content className={styles.getInTouchStepsSpace}>
                <List.Icon name="chain" />      
                <List.Header as='h2'>Fill in our quick form</List.Header>
            </List.Content>
        </List.Item>
        <List.Item>
              <List.Content className={styles.getInTouchStepsSpace}>
              <List.Icon name="blogger" />      
              <List.Header as='h2'>Login to AuthFence</List.Header>
              </List.Content>
        </List.Item>
        <List.Item>
              <List.Content className={styles.getInTouchStepsSpace}>
                <List.Icon name="leaf" />      
                <List.Header as='h2'>Relax, we've got you covered</List.Header>
              </List.Content>
        </List.Item>
  </List>
  <List> 
        <List.Item>
            <List.Content>
                <Link href ='/' >  
                    <Button content="Get in touch" color='red'/>
                </Link>
            </List.Content>
        </List.Item>
</List>
  </Header>
    </div>
}
export default Getintouchsteps;
