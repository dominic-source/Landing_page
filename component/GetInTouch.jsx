import {React,useState,useEffect} from 'react';
import {Button,Form, Message, Container,Grid} from 'semantic-ui-react';
import styles from  '../styles/landing.module.css';
import 'semantic-ui-css/semantic.min.css';
import "@fontsource/lato";



function Getintouch(){
  
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

    return <div><Container >
    <Container fluid >
    <Grid columns={1} textAlign='center'>
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
    <Form warning size="large" className={styles.formadjustment}>
    <Form.Input label='Email' placeholder='joe@schmoe.com'/>
    <Button negative fluid={!footer} className={styles.hoverbutton} > Get in touch</Button>
  </Form>
    </Container></div>
}
export default Getintouch;