import {Fragment, React, useState} from 'react';
import {Header,Icon,Button,Grid, Container} from 'semantic-ui-react'
import styles from  '../styles/landing.module.css';
import 'semantic-ui-css/semantic.min.css';
import Link from 'next/Link';

function Socialmedia(){
    return <div><Container><Container>
    <Grid columns={2} container stackable>
    <Grid.Row>
            <Header as ='h2'> 
            <Header.Content className={styles.toptextcss} style={{paddingLeft:'10px'}}>Social Media</Header.Content>
            </Header>
    </Grid.Row>

    <Grid.Row columns={2}>
      <Grid.Column>
      <Header as='h3'>
                <Header.Content style={{lineHeight:2}}> 
                Lorem ipsum dolor sit amet, consetetur sadipscing 
              elitr, sed diam nonumy eirmod tempor invidunt ut
              labore et dolore magna aliquyam erat, sed diam voluptua
              sed diam nonumy eirmod tempor invidunt ut
              labore et dolore magna aliquyam erat, sed diam voluptua
                </Header.Content>    
      </Header>  
      </Grid.Column>
      <Grid.Column verticalAlign='middle'>
                      <span className={styles.socialspace}><Link href='/'><Button circular color='facebook' icon='facebook' size='massive'/></Link></span>
                      <span className={styles.socialspace}><Link href='/'><Button circular color='twitter' icon='twitter' size='massive' /></Link></span>
                      <span className={styles.socialspace}><Link href='/'><Button circular color='instagram' icon='instagram' size='massive'/></Link></span>
      </Grid.Column>

    </Grid.Row>

</Grid></Container></Container>
  </div>
}
export default Socialmedia;