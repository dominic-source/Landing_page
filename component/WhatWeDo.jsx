import {Fragment, React, useState} from 'react';
import {Container, Header,Icon,Image} from 'semantic-ui-react'
import styles from  '../styles/landing.module.css';
import 'semantic-ui-css/semantic.min.css';

function Whatwedo(){
    return <Container fluid textAlign='center' >
    <Header as='h2' className={styles.whatwedostyle} style={{marginLeft:'270px'}}>
      <Header.Content as='h2' className={styles.toptextcss} > 
        What we do
      </Header.Content>
      <Header.Content style={{lineHeight:2}}> 
      Lorem ipsum dolor sit amet, consetetur sadipscing 
    elitr, sed diam nonumy eirmod tempor invidunt ut
    labore et dolore magna aliquyam erat, sed diam voluptua
      </Header.Content>
    </Header></Container>
}
export default Whatwedo;




