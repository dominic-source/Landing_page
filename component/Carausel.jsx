import {React, useState,useEffect} from 'react';
import {Container,Image,Card,Grid} from 'semantic-ui-react'
import styles from  '../styles/landing.module.css';
import Link from 'next/link';
import 'semantic-ui-css/semantic.min.css';
import "@fontsource/lato";


function Carauseldisplay(){
    const gridAdjustment={
        numberOfColumns:'4',
      }
var [slide1,slide2,slide3,slide4] = [false,true,false,false];
const [card, setcard] = useState([
    slide1,
    slide2,
    slide3,
    slide4]);
  useEffect(()=>{

  });
    function prevCard(){
        for(var i=0; i<4;i++){
          if(card[i] == true){
            setcard(card[i]=false);
            if(i==0){
              setcard(card[3] ==true)
            } 
            if(i==3){
              setcard(card[0] == true)
            }
            else{
            setcard(card[i-1]=true);}
          }
        } 
      
      }
      
       
    
    function nextCard(event){
        
    }





return <Container className={styles.slideshow_container}>
    <Grid columns={gridAdjustment.numberOfColumns} padded='vertically' stackable>
    <Grid.Row columns={gridAdjustment.numberOfColumns}>
                {card[0] && <Grid.Column className={styles.mySlides}>
                          <Card style={{marginLeft:'auto',marginRight:'auto'}} className={styles.fade}>
                              <Card.Content > 
                              <Link href='/'><Image src='/Logo/icon_plan.png' /></Link>
                              </Card.Content>
                                  <Card.Content>
                                    <Card.Header className={styles.cardhead}>Perfect plan</Card.Header>
                                    <Card.Description as='h4' className={styles.cardhead2}>
                                    Create multiple documents portal, 
                                    send and have it signed electronically by an end user.
                                    </Card.Description>
                                  </Card.Content>
                                  <Card.Content extra>
                                    <Link href='/'>
                                    <Image src='/Logo/arrow.png' />
                                    </Link>
                                    <span className={styles.number}> 1/4 </span>
                                  </Card.Content>
                            </Card>
                </Grid.Column>}

                {card[1] &&   <Grid.Column className={styles.mySlides}>
                          <Card style={{marginLeft:'auto',marginRight:'auto'}} className={styles.fade}>
                              <Card.Content> 
                              <Link href='/'><Image src='/Logo/icon_fingerprint.png' /></Link>
                              </Card.Content>
                                  <Card.Content>
                                    <Card.Header className={styles.cardhead}>Authentication</Card.Header>
                                    <Card.Description as='h4' className={styles.cardhead2}>
                                    Receive SMS message, verify using WebAuthn 
                                    API or Code in 3 clicks.
                                    </Card.Description>
                                  </Card.Content>
                                  <Card.Content extra>
                                    <Link href='/'>
                                    <Image src='/Logo/arrow.png' />
                                    </Link>
                                    <span className={styles.number}> 2/4 </span>
                                  </Card.Content>
                            </Card>
                </Grid.Column>}
                {card[2] &&  <Grid.Column className={styles.mySlides}>
                          <Card style={{marginLeft:'auto',marginRight:'auto'}} className={styles.fade}>
                              <Card.Content> 
                              <Link href='/'><Image src='/Logo/icon_shield.png' /></Link>
                              </Card.Content>
                                  <Card.Content>
                                    <Card.Header className={styles.cardhead}>Secure</Card.Header>
                                    <Card.Description as='h4' className={styles.cardhead2}>
                                    Protect and monitor your documents with full control of 
                                    lifecycle management from a single portal.
                                    </Card.Description>
                                  </Card.Content>
                                  <Card.Content extra>
                                    <Link href='/'>
                                    <Image src='/Logo/arrow.png' />
                                    </Link>
                                    <span className={styles.number}> 3/4 </span>
                                  </Card.Content>
                            </Card>
                </Grid.Column>}

                {card[3] &&   <Grid.Column className={styles.mySlides}>
                          <Card style={{marginLeft:'auto',marginRight:'auto'}} className={styles.fade}>
                              <Card.Content> 
                              <Link href='/'><Image src='/Logo/icon_manage.png' /></Link>
                              </Card.Content>
                                  <Card.Content>
                                    <Card.Header className={styles.cardhead}>Manage</Card.Header>
                                    <Card.Description as='h4' className={styles.cardhead2}>
                                    Full control over AuthFence users, accounts 
                                    and access level across your organisation.
                                    </Card.Description>
                                  </Card.Content>
                                  <Card.Content extra >
                                    <Link href='/'>
                                    <Image src='/Logo/arrow.png' />
                                    </Link>
                                    <span className={styles.number}> 4/4 </span>
                                  </Card.Content>
                            </Card>
                </Grid.Column>}
                
    </Grid.Row>
    
    </Grid>
    <a className={styles.prev} onClick={prevCard}><Image src='/Logo/Path 125.png' /></a>
    <a className={styles.next} onClick={nextCard}><Image src='/Logo/Path 125.png' /></a>

    </Container>

    }

export default Carauseldisplay;