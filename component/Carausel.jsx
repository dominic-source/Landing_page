import {React, useState,useEffect} from 'react';
import {Container,Image,Card,Grid} from 'semantic-ui-react'
import styles from  '../styles/landing.module.css';
import Link from 'next/link';
import 'semantic-ui-css/semantic.min.css';
import "@fontsource/lato";

function Carauseldisplay() {
  const gridAdjustment = {
    numberOfColumns: '4',
  }

  const [display, setdisplay] = useState({0:false,1:false,2:true,3:false});
  

    useEffect(()=>{ 
      let removeId;
         let addId;
      document.getElementById("prev").addEventListener('click',(event)=>{
         
        for(var i=0;i<4;i++){
         const clget = document.getElementById(i);
          
          if (clget != null){
            console.log("i got here 1")
            if(i == 0){ removeId=i;addId=3; }
            if(i > 0){ removeId=i;addId=i-1;} 
        }
      }
      
      });
      setdisplay((value)=>{
        return{...value,[removeId]:false,[addId]:true}
      });
      // document.getElementById("next").addEventListener('click',(event)=>{
      //   for(var i=0;i<4;++i){
      //    let clget = document.getElementById(i);
      //     if (clget != null && clget != 3){
      //         console.log(clget.id);
      //         setdisplay((pre)=>{
      //           console.log(pre);
      //           return{...pre,[clget.id]:false,[clget.id +1]:true}
      //         });
      //       }
      //      else if(clget == 3){
      //         setdisplay((pre)=>{
      //           console.log(pre);
      //           return{...pre,[clget.id]:false,[0]:true}
      //         });
      //     }
      //   }
      // });
    });


return <Container className={styles.slideshow_container}>
    <Grid columns={gridAdjustment.numberOfColumns} padded='vertically' stackable>
    <Grid.Row columns={gridAdjustment.numberOfColumns}>
            {display[0] &&  <Grid.Column>
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
                                    <span className={styles.number} id="0"> 1/4 </span>
                                  </Card.Content>
                            </Card>
                </Grid.Column>}
                {display[1] &&   <Grid.Column>
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
                                    <span className={styles.number} id="1"> 2/4 </span>
                                  </Card.Content>
                            </Card>
                </Grid.Column>}                
                {display[2] && <Grid.Column>
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
                                    <span className={styles.number} id="2"> 3/4 </span>
                                  </Card.Content>
                            </Card>
                </Grid.Column>}

                {display[3] &&    <Grid.Column>
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
                                    <span className={styles.number} id="3"> 4/4 </span>
                                  </Card.Content>
                            </Card>
                </Grid.Column>}
                
    </Grid.Row>
    
    </Grid>
    <a className={styles.prev} id="prev"><Image src='/Logo/Path 125.png'  /></a>
    <a className={styles.next} id="next"><Image src='/Logo/Path 125.png' /></a>

    </Container>

    }

export default Carauseldisplay;