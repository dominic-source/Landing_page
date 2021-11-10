import {React, useState,useEffect} from 'react';
import {Container, Button , Header, Image, Icon,Grid } from 'semantic-ui-react';
import Link from 'next/link';
import styles from  '../styles/landing.module.css';
import 'semantic-ui-css/semantic.min.css';
import "@fontsource/lato";

function Myheader(){
    //To change the state of the component
    const [header, setheader] = useState(true);
    var headgetstartWidth;
    //To cause an effect on the change
    useEffect(() =>{
        let footerDisAppear = true;
        // Listen for a load event and get screen width, afterward, adjust the screen components.
        window.addEventListener('load',()=>{
        const width = window.innerWidth;
        width <= 1100 ?footerDisAppear= false:footerDisAppear = true;
        setheader(footerDisAppear);
        // Check for a resize event and adjust the screen accordingly
        window.addEventListener('resize',(event) =>{
              event.currentTarget.innerWidth <= 1100 ?footerDisAppear= false:footerDisAppear = true;
              event.currentTarget.innerWidth >= 900 && event.currentTarget.innerWidth <= 1200? headgetstartWidth ="400px":headgetstartWidth = "400px";
              setheader(footerDisAppear);
            });
        });
        
  });


return <Container fluid textAlign="center" className={styles.container}>
            <Header> 
                <div>
                    <Container fluid> {header &&
                        <Grid columns={2} padded>
    
                                     <Grid.Column>
                                             <Link href='/' > 
                                                 <Image src="/logo.png" alt="authLogo" maxHeight='50px' maxWidth='135.53px' /> 
                                             </Link>
                                     </Grid.Column>

                                     <Grid.Column verticalAlign='bottom'  style={{paddingLeft:headgetstartWidth}}>
                                             <Link href='/' > 
                                                 <h4 className={styles.authhead} >Get in touch</h4>
                                             </Link>
                                             <Link href='/' > 
                                                 <h4 className={styles.authhead}>Learn more</h4>
                                             </Link>
                                     </Grid.Column>
                        </Grid>} 
                        {header || <Link href='/' > 
                            <Image src="/logo.png" alt="authLogo" maxHeight='50px' maxWidth='135.53px' centered /> 
                        </Link>}
                    </Container>
                </div>
            </Header>

            <div className={styles.authfence}> 
                    <Header as='h1' className={styles.auth} > AuthFence</Header>
                         <p className={styles.animate1}> Lorem ipsum dolor sit amet, consetetur sadipscing 
                         elitr, sed diam nonumy eirmod tempor invidunt ut
                         labore et dolore magna aliquyam erat, sed diam voluptua.</p>
                    <div style={{textAlign:header ?'left':'center', fontFamily:'lato',fontSize:'21',fontWeight:'regular'}}> 
                         <Link href='/' > 
                             <Button content='Learn more' />
                         </Link>

                         <Link href='/' > 
                             <Button content='Get in touch' className={styles.hoverbutton} />
                         </Link>
                    </div>

                    <div style={{marginTop:'60px', fontFamily:'Lato', fontWeight:'bold',height:'125.6px',width:'246px',marginLeft:'auto',marginRight:'auto'}}>
                        <div>SCROLL DOWN TO LEARN MORE</div>
                        <Link href='/'>
                            <Icon name="angle double down" size="huge" className={styles.gridcolor}/>
                        </Link>
                    </div>

            </div>
                     <Image src="/pexels-fauxels-3183197.png" className={styles.front_page_photo} />
                     <Image src="/pexels-andrea-piacquadio-864994.png"  className={styles.front_page_photo2}/>

        </Container>}
export default Myheader;
