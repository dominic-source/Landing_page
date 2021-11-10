import { React, useState, useEffect} from 'react';
import { Header, List,Button,Image} from 'semantic-ui-react';
import  styles from '../styles/landing.module.css';
import Link from 'next/link';
import 'semantic-ui-css/semantic.min.css';
import "@fontsource/lato";

function Getintouchsteps(){      
      let footerDisAppear;
      //To change the state of the component
      const [footer, setfooter] = useState(true);
      
      //To cause a custom effect on the change
      useEffect(() =>{
        window.addEventListener('resize',(event) =>{
              event.currentTarget.innerWidth <= 1100 ?footerDisAppear= false:footerDisAppear = true;
              setfooter(footerDisAppear);
        });
  });
    return <div >
<Header as='h2' icon textAlign='center' style={{marginTop:"50px"}}>
    
    <Header.Content as ='h2' className={styles.toptextcss}>Get started {footer && 'verifying'}</Header.Content>
    <div style={{display:'inline-flex'}}>
    <Image src='/Logo/timeline.png' alt='timeline' />
    <div>
    <List className={styles.getInTouchStepscolor}>
        <List.Item >
            <List.Content className={styles.getInTouchStepsAdditional}>
                Fill in our quick form
            </List.Content>
        </List.Item>
        <List.Item>
              <List.Content className={styles.getInTouchStepsAdditional}>
              Login to AuthFence
              </List.Content>
        </List.Item>
        <List.Item>
              <List.Content className={styles.getInTouchStepsSpace} >
                Relax, we've got you covered
              </List.Content>
        </List.Item>
  </List></div>
  </div>
  <List> 
        <List.Item>
            <List.Content>
                <Link href ='/' >  
                    <Button content="Get in touch" className={styles.hoverbutton} />
                </Link>
            </List.Content>
        </List.Item>
</List>
  </Header>

    </div>
}
export default Getintouchsteps;