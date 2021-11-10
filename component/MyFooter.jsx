import { React,useEffect,useState} from 'react';
import {Image, Container,Grid} from 'semantic-ui-react';
import styles from  '../styles/landing.module.css';
import Link from 'next/link';
import 'semantic-ui-css/semantic.min.css';
import "@fontsource/lato";


function Myfooter(){

      //To change the state of the component
      const [footer, setfooter] = useState(true);

      //To cause a custom effect on the change
      useEffect(() =>{
            let footerDisAppear = true;
            window.addEventListener('load',()=>{
            const width = window.innerWidth;
            width <= 1100 ?footerDisAppear= false:footerDisAppear = true;
            setfooter(footerDisAppear);
            window.addEventListener('resize',(event) =>{
                  event.currentTarget.innerWidth <= 1100 ?footerDisAppear= false:footerDisAppear = true;
                  setfooter(footerDisAppear);
            });
      });
            
      });

      const width ="5"
      
    return <div className={styles.footcontainer} id="screensize">
    
    {footer && <Container style={{display:'inline-flex'}}>
                  <Grid padded>
                        <Grid.Row>
                                <Grid.Column width={width} >
                                      <h4 className={styles.gridcolor2}>Get started</h4>
                                </Grid.Column>
                                <Grid.Column width={width} > 
                                      <h4 className={styles.gridcolor2}>Get help</h4>  
                                </Grid.Column>
                                <Grid.Column width={width} >
                                      <h4 className={styles.gridcolor2}> About us</h4>
                                </Grid.Column>
                        </Grid.Row>

                        <Grid.Row>
                              <Grid.Column width={width} >
                                      <Link href="/">
                                            <h5 className={styles.gridcolor}> SignUp</h5>
                                      </Link>
                                </Grid.Column>
                                <Grid.Column width={width} >
                                      <Link href="/">
                                            <h5 className={styles.gridcolor}> How it works</h5>
                                      </Link>
                                </Grid.Column>
                                <Grid.Column width={width} > 
                                      <Link href="/">
                                            <h5 className={styles.gridcolor}> Company</h5>
                                      </Link>
                                </Grid.Column>
                        </Grid.Row>

                        <Grid.Row>
                              <Grid.Column width={width}>
                                      <Link href="/">
                                      <h5 className={styles.gridcolor}> Current offers</h5>
                                      </Link>
                                </Grid.Column>
                                <Grid.Column width={width}>
                                      <Link href="/">
                                      <h5 className={styles.gridcolor}> FAQ</h5>
                                      </Link>
                                </Grid.Column>
                                <Grid.Column width={width}>
                                      <Link href="/">
                                      <h5 className={styles.gridcolor}> Get in touch</h5>
                                      </Link>
                                </Grid.Column>
                        </Grid.Row>
                  </Grid> 
                  <Grid padded>

                         <Grid.Row>
                              <Grid.Column width='5'>
                                    <h4 className={styles.gridcolor} style={{fontSize:'26px',fontFamily:'lato',fontWeight:'bold'}}> Follow us</h4>
                              </Grid.Column>
                        </Grid.Row>

                        <Grid.Row>
                              <Grid.Column width='14' textAlign='left'>
                                    <span className={styles.socialspace}><Link href='/'><Image src='/Logo/icon_facebook.png' /></Link></span>
                                    <span className={styles.socialspace}><Link href='/'><Image src='/Logo/icon_twitter.png' /></Link></span>
                                    <span className={styles.socialspace}><Link href='/'><Image src='/Logo/icon_instagram.png' /></Link></span>
                              </Grid.Column>
                        </Grid.Row>

                         <Grid.Row>
                               <Grid.Column width='20'>
                                     <h6 className={styles.gridcolor}> &copy; 2020 AuthFence. All rights reserved.</h6>
                               </Grid.Column>  
                         </Grid.Row>
                  </Grid>
            </Container>}
  
  {footer && <Grid padded>
                        <Grid.Row>
                               <Grid.Column width='3'>
                               <h6 className={styles.gridcolor} > Privacy</h6>
                               </Grid.Column>

                               <Grid.Column width='3'>
                               <h6 className={styles.gridcolor}> Terms of service</h6>
                               </Grid.Column>
    
                        </Grid.Row>    

            </Grid>}
                   {footer || <h3 className={styles.gridcolor} style={{
                        textAlign:'center'}}> &copy; 2020 AuthFence. All rights reserved.</h3>}
</div>
}
export default Myfooter;