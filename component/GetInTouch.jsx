import {React,useState,useEffect} from 'react';
import {Button,Form, Message, Container,Grid} from 'semantic-ui-react';
import styles from  '../styles/landing.module.css';
import 'semantic-ui-css/semantic.min.css';


function Getintouch(){
  function getwindowswidth (){
    const {innerWidth:width} = window;
    return width;
}

let footerDisAppear;
//To change the state of the component
const [footer, setfooter] = useState(true);

//To cause a custom effect on the change
useEffect(() =>{
      let sizeofwindow = getwindowswidth();
      sizeofwindow <= 700 ?footerDisAppear= false:footerDisAppear = true;
      setfooter(footerDisAppear);
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
                            <h2 style={{lineHeight:2,color:'black'}} className={styles.whatwedostyle}> 
                                  Lorem ipsum dolor sit amet, consetetur sadipscing 
                                elitr, sed diam nonumy eirmod tempor invidunt ut
                                labore et dolore magna aliquyam erat, sed diam voluptua
                            </h2>
                  </Grid.Row>
    </Grid>
    </Container> 
    <Form warning size="large" className={styles.formadjustment}>
    <Form.Input label='Email' placeholder='joe@schmoe.com'/>
    <Message
      warning
      header='Could you check something!'
      list={[
        'That e-mail has been subscribed, but you have not yet clicked the verification link in your e-mail.',
      ]}
    />
    <Button negative fluid={!footer}> Get in touch</Button>
  </Form>
    </Container></div>
}
export default Getintouch;