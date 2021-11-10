import {React, useState} from 'react';
import {Header,Image,Button,Grid, Container} from 'semantic-ui-react'
import styles from  '../styles/landing.module.css';
import 'semantic-ui-css/semantic.min.css';
import Link from 'next/Link';
import "@fontsource/lato";

function Socialmedia(){
  
    return <div>
    <Container>
        <Container>
            <Grid columns={2} container stackable>
                    <Grid.Row>
                            <Header as ='h2'> 
                            <Header.Content className={styles.toptextcss} style={{paddingLeft:'10px',marginTop:'40px',lineHeight:'1'}}>Social Media</Header.Content>
                            </Header>
                    </Grid.Row>

                    <Grid.Row columns={2}>

                      <Grid.Column>
                      <Header as='h3'>
                                <Header.Content style={{lineHeight:2,color:'#252525'}}> 
                                Lorem ipsum dolor sit amet, consetetur sadipscing 
                              elitr, sed diam nonumy eirmod tempor invidunt ut
                              labore et dolore magna aliquyam erat, sed diam voluptua
                              sed diam nonumy eirmod tempor invidunt ut
                              labore et dolore magna aliquyam erat, sed diam voluptua
                                </Header.Content>    
                      </Header>  
                      </Grid.Column>

                      <Grid.Column textAlign="center" verticalAlign='bottom'>
                                      <span className={styles.socialspace1}><Link href='/'><Image src='/Logo/facebook.png' style={{marginLeft:'auto',marginRight:'auto'}}/></Link></span>

                                      <span className={styles.socialspace}><Link href='/'><Image src='/Logo/twitter.png' /></Link></span>

                                      <span className={styles.socialspace}><Link href='/'><Image src='/Logo/instagram.png' /></Link></span>
                      </Grid.Column>

                    </Grid.Row>

            </Grid>
          </Container>
        </Container>
</div>
}
export default Socialmedia;