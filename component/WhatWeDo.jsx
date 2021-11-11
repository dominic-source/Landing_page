import {React, useState,useEffect} from 'react';
import {Container,Image,Card,Grid} from 'semantic-ui-react'
import styles from  '../styles/landing.module.css';
import Link from 'next/link';
import 'semantic-ui-css/semantic.min.css';
import "@fontsource/lato";
import Carauseldisplay from './Carausel';


function Whatwedo(){

        const gridAdjustment={
          numberOfColumns:'4',
        }

          //To change the state of the component
          const [whatwedo, setWhatWeDo] = useState(true);
          let footerDisAppear;

          function handleLoad(event){
            const width = window.innerWidth;
            width <= 1100 ? footerDisAppear= false : footerDisAppear = true;
            setWhatWeDo(footerDisAppear);
          }

          function handleResize(event){
            event.currentTarget.innerWidth <= 1100 ?footerDisAppear= false:footerDisAppear = true;
            setWhatWeDo(footerDisAppear);  
          }

          //To cause an effect on the change
          useEffect(() =>{
            
            window.addEventListener('load',handleLoad);
           // listen for screen resize and adjust
            window.addEventListener('resize',handleResize);},[]);
            
            useEffect(()=>{
              handleLoad();
            },[]);

    return <div style={{backgroundColor:'#FAFAFA',borderRadius:'15px'}}>
    <Container>


    <Container fluid >
    <Grid columns={1} textAlign='center' >
                <Grid.Row columns={1} textAlign='center' style={{paddingBottom:'0px'}}>
                  <h2 className={styles.toptextcss} > 
                    What we do
                  </h2>
                  </Grid.Row>
                  <Grid.Row columns={1} textAlign='center' style={{paddingTop:'0px'}}>
                            <h2 style={{lineHeight:2,color:'#252525'}} className={styles.whatwedostyle}> 
                                  Lorem ipsum dolor sit amet, consetetur sadipscing 
                                elitr, sed diam nonumy eirmod tempor invidunt ut
                                labore et dolore magna aliquyam erat, sed diam voluptua
                            </h2>
                  </Grid.Row>
    </Grid>
    </Container>


    {whatwedo && <Container >
    <Grid columns={gridAdjustment.numberOfColumns} padded='vertically' stackable>
    <Grid.Row columns={gridAdjustment.numberOfColumns}>

                <Grid.Column>
                          <Card>
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
                                  </Card.Content>
                            </Card>
                </Grid.Column>

                <Grid.Column>
                          <Card>
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
                                  </Card.Content>
                            </Card>
                </Grid.Column>

                <Grid.Column>
                          <Card>
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
                                  </Card.Content>
                            </Card>
                </Grid.Column>

                <Grid.Column>
                          <Card>
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
                                  </Card.Content>
                            </Card>
                </Grid.Column>
                
    </Grid.Row>
    
    </Grid></Container>}

    {whatwedo || <Carauseldisplay />}
    </Container>
</div>
}
export default Whatwedo;