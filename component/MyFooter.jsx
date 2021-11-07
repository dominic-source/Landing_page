import { React,useEffect,useState} from 'react';
import {Button, Container,Grid} from 'semantic-ui-react';
import styles from  '../styles/landing.module.css';
import Link from 'next/link';
import 'semantic-ui-css/semantic.min.css';


function getwindowswidth (){
      const {innerWidth:width} = window;
      return width;
}

function Myfooter(){

      let footerDisAppear;
      //To change the state of the component
      const [footer, setfooter] = useState(true);

      //To cause a custom effect on the change
      useEffect(() =>{
            let sizeofwindow = getwindowswidth();
            sizeofwindow <= 700 ?footerDisAppear= false:footerDisAppear = true;
            setfooter(footerDisAppear);
      });

      const width ="2"
      
    return <div className={styles.footcontainer}>{footer && <Container className={styles.foothide}><Grid container>
    <Grid.Row>
      <Grid.Column width={width}>
            <h4>Get started</h4>
      </Grid.Column>
      <Grid.Column width={width}> 
            <h4>Get help</h4>  
      </Grid.Column>
      <Grid.Column width={width}>
            <h4> About us</h4>
      </Grid.Column>
      <Grid.Column width='10' textAlign='center'>
            <h4 className={styles.gridcolor}> Follow us</h4>
      </Grid.Column>
    </Grid.Row>

    <Grid.Row>
    <Grid.Column width={width}>
            <Link href="/">
                  <h5 className={styles.gridcolor}> SignUp</h5>
            </Link>
      </Grid.Column>
      <Grid.Column width={width}>
            <Link href="/">
                  <h5 className={styles.gridcolor}> How it works</h5>
            </Link>
      </Grid.Column>
      <Grid.Column width={width}> 
            <Link href="/">
                  <h5 className={styles.gridcolor}> Company</h5>
            </Link>
      </Grid.Column>
      <Grid.Column width='10' textAlign='center'>
            <Link href="/">
                  <Button  circular color='facebook' icon='facebook' size='large'/>
            </Link>
     
            <Link href="/">
                  <Button circular color='twitter' icon='twitter' size='large'/>
            </Link>
     
            <Link href="/">
                  <Button circular color='instagram' icon='instagram' size='large'/>
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
  </Container>}
  {footer &&<Container>
  <Grid container>
    <Grid.Row>
      <Grid.Column width={width}>
      <h6 className={styles.gridcolor} > Privacy</h6>
      </Grid.Column>

      <Grid.Column width={width}>
      <h6 className={styles.gridcolor}> Terms of service</h6>
      </Grid.Column>

      <Grid.Column width='6' textAlign='right'>
      <h6 className={styles.gridcolor}> &copy 2020 AuthFence. All rights reserved.</h6>
      </Grid.Column>
</Grid.Row>    

</Grid></Container>}
      {footer || <h3 className={styles.gridcolor} style={{
            textAlign:'center'}}> &copy 2020 AuthFence. All rights reserved.</h3>}
</div>
}
export default Myfooter;