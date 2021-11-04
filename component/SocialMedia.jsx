import {Fragment, React, useState} from 'react';
import {Header,Icon,Button,Grid, Container} from 'semantic-ui-react'
import styles from  '../styles/landing.module.css';
import 'semantic-ui-css/semantic.min.css';

function Socialmedia(){
    return <Fragment><div >
    <Grid columns={1} container>
    <Header as ='h2'> 
    <Header.Content className={styles.toptextcss}>Social Media</Header.Content>
    </Header>
    <Grid.Row centered columns={2}>
      <Grid.Column className={styles.textcss}>
                Lorem ipsum dolor sit amet, consetetur sadipscing 
                elitr, sed diam nonumy eirmod tempor invidunt ut
            labore et dolore magna aliquyam erat, sed diam voluptua      
      </Grid.Column>
        
      <Grid.Column >
            <Grid.Row centered columns={1} >
                      <Button  color='facebook' icon='facebook' size='massive' style={{marginLeft:'40%'}}/>
            </Grid.Row>
            <Grid.Row verticalAlign='bottom'>
                      <Button circular color='twitter' icon='twitter' size='massive' style={{marginRight:'50px',marginLeft:'30%'}}/>
                      <Button circular color='instagram' icon='instagram' size='massive'/>
            </Grid.Row>         
</Grid.Column>
</Grid.Row>
</Grid>
  </div></Fragment>
}
export default Socialmedia;