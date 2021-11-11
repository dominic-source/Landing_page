import {React, useState,useEffect} from 'react';
import {Container,Image,Card,Grid} from 'semantic-ui-react'
import styles from  '../styles/landing.module.css';
import Link from 'next/link';
import 'semantic-ui-css/semantic.min.css';
import "@fontsource/lato";

function deNum(val){
  let num;
  if(val==0){
    num = "zero";
  }
  if (val==1){
    num ="one";
  }
  else if(val==2){
    num="two";
  }
  else if(val==3){
    num="three";
  }
  return num;
}

function deNull(){
 for(var i=0;i<4; i++){
  const numval = document.getElementById(i);
   if(numval != null){
    return numval.id;
   }
   else{}
 }
}

function Carauseldisplay() {
  const gridAdjustment = {
    numberOfColumns: '4',
  }

  const [display, setdisplay] = useState({zero:false,one:false,two:false,three:true});
  
  var values = {value1:"", value2:""}

    useEffect(()=>{ 
        const newClick = document.getElementById("prev");
        newClick.addEventListener('click',()=>{
          const denull = deNull();   
          if(denull== 0){ 
            values.value1 = 'zero';
            values.value2 = 'three';
            setdisplay(vali=>({...vali,[values.value1]:false,[values.value2]:true}));
        }
        else {
          values.value1= deNum(denull);
          values.value2 = deNum(denull-1);
          setdisplay(vali=>({...vali,[values.value1]:false,[values.value2]:true}));
        }
        }); 
        
      const nextClick = document.getElementById("next");
      nextClick.addEventListener('click',()=>{
      const denull = deNull();   
      if(denull== 3){ 
        values.value1 = 'three';
        values.value2 = 'zero';
        setdisplay(vali=>({...vali,[values.value1]:false,[values.value2]:true}));
    }
    else {
      values.value1= deNum(denull);
      values.value2 = deNum(Number(denull)+1);
      setdisplay(vali=>({...vali,[values.value1]:false,[values.value2]:true}));
    }
    });
  },[]);

return <Container className={styles.slideshow_container}>
    <Grid columns={gridAdjustment.numberOfColumns} padded='vertically' stackable>
    <Grid.Row columns={gridAdjustment.numberOfColumns}>
            {display['zero'] && <Grid.Column>
                          <Card style={{marginLeft:'auto',marginRight:'auto'}}>
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
                {display['one'] && <Grid.Column>
                          <Card style={{marginLeft:'auto',marginRight:'auto'}}>
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
                {display['two'] && <Grid.Column>
                          <Card style={{marginLeft:'auto',marginRight:'auto'}}>
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

                {display['three'] &&    <Grid.Column>
                          <Card style={{marginLeft:'auto',marginRight:'auto'}}>
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