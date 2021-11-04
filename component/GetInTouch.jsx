import {Fragment, React,useState} from 'react';
import {Header,Button,Form, Message, Container} from 'semantic-ui-react';
import styles from  '../styles/landing.module.css';
import 'semantic-ui-css/semantic.min.css';


function Getintouch(){

    return <Fragment><Container textAlign="center" >
    <Header as='h2' className={styles.whatwedostyle} style={{marginLeft:'270px'}}>
      <Header.Content as='h2' className={styles.toptextcss} > 
        Get in touch
      </Header.Content>
      <Header.Content style={{lineHeight:'2'}}> 
      Lorem ipsum dolor sit amet, consetetur sadipscing 
    elitr, sed diam nonumy eirmod tempor invidunt ut
    labore et dolore magna aliquyam erat, sed diam voluptua
      </Header.Content>
    </Header>
    <Form warning size="small" className={styles.formadjustment}>
    <Form.Input label='Email' placeholder='joe@schmoe.com'/>
    <Message
      warning
      header='Could you check something!'
      list={[
        'That e-mail has been subscribed, but you have not yet clicked the verification link in your e-mail.',
      ]}
    />
    <Button negative> Get in touch</Button>
  </Form>
    </Container></Fragment>
}
export default Getintouch;