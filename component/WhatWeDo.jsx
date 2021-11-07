import {React, useState} from 'react';
import {Container, Header,Icon,Card,Grid} from 'semantic-ui-react'
import styles from  '../styles/landing.module.css';
import Link from 'next/link';
import 'semantic-ui-css/semantic.min.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFingerprint,faShieldAlt,faNetworkWired,faTasks } from '@fortawesome/free-solid-svg-icons'

function Whatwedo(){

const gridAdjustment={
  numberOfColumns:'4',
}




    return <div><Container>
    <Container fluid >
    <Grid columns={1} textAlign='center' >
                <Grid.Row columns={1} textAlign='center' style={{paddingBottom:'0px'}}>
                  <h2 className={styles.toptextcss} > 
                    What we do
                  </h2>
                  </Grid.Row>
                  <Grid.Row columns={1} textAlign='center' style={{paddingTop:'0px'}}>
                            <h2 style={{lineHeight:2,color:'black'}} className={styles.whatwedostyle}> 
                                  Lorem ipsum dolor sit amet, consetetur sadipscing 
                                elitr, sed diam nonumy eirmod tempor invidunt ut
                                labore et dolore magna aliquyam erat, sed diam voluptua
                            </h2>
                  </Grid.Row>
    </Grid>
    </Container>
    <Container >
    <Grid columns={gridAdjustment.numberOfColumns} padded='vertically' stackable>
    <Grid.Row columns={gridAdjustment.numberOfColumns}>
                <Grid.Column>
                          <Card>
                              <Card.Content > 
                                  <FontAwesomeIcon icon={faTasks} size='4x' className={styles.icondesign}/>
                              </Card.Content>
                                  <Card.Content>
                                    <Card.Header className={styles.cardhead}>Perfect plan</Card.Header>
                                    <Card.Description as='h4'>
                                    Create multiple documents portal, 
                                    send and have it signed electronically by an end user.
                                    </Card.Description>
                                  </Card.Content>
                                  <Card.Content extra>
                                    <Link href='/'>
                                      <Icon name='arrow right' size='big' color='red'/>
                                    </Link>
                                  </Card.Content>
                            </Card>
                </Grid.Column>

                <Grid.Column>
                          <Card>
                              <Card.Content> 
                                  <FontAwesomeIcon icon={faFingerprint} size='4x' className={styles.icondesign}/>
                              </Card.Content>
                                  <Card.Content>
                                    <Card.Header className={styles.cardhead}>Authentication</Card.Header>
                                    <Card.Description as='h4'>
                                    Receive SMS message, verify using WebAuthn 
                                    API or Code in 3 clicks.
                                    </Card.Description>
                                  </Card.Content>
                                  <Card.Content extra>
                                    <Link href='/'>
                                      <Icon name='arrow right' size='big' color='green'/>
                                    </Link>
                                  </Card.Content>
                            </Card>
                </Grid.Column>
                <Grid.Column>
                          <Card>
                              <Card.Content> 
                                  <FontAwesomeIcon icon={faShieldAlt} size='4x' className={styles.icondesign}/>
                              </Card.Content>
                                  <Card.Content>
                                    <Card.Header className={styles.cardhead}>Secure</Card.Header>
                                    <Card.Description as='h4'>
                                    Protect and monitor your documents with full control of 
                                    lifecycle management from a single portal.
                                    </Card.Description>
                                  </Card.Content>
                                  <Card.Content extra>
                                    <Link href='/'>
                                      <Icon name='arrow right' size='big' color='red'/>
                                    </Link>
                                  </Card.Content>
                            </Card>
                </Grid.Column>

                <Grid.Column>
                          <Card>
                              <Card.Content> 
                                  <FontAwesomeIcon icon={faNetworkWired} size='4x' className={styles.icondesign}/>
                              </Card.Content>
                                  <Card.Content>
                                    <Card.Header className={styles.cardhead}>Manage</Card.Header>
                                    <Card.Description as='h4'>
                                    Full control over AuthFence users, accounts 
                                    and access level across your organisation.
                                    </Card.Description>
                                  </Card.Content>
                                  <Card.Content extra >
                                    <Link href='/'>
                                      <Icon name='arrow right' size='big' color='green'/>
                                    </Link>
                                  </Card.Content>
                            </Card>
                </Grid.Column>
                
    </Grid.Row>
    
    </Grid></Container></Container>
</div>
}
export default Whatwedo;




