import {React, useState,useEffect} from 'react';
import {Container, Button , Header, Image, Icon,Grid } from 'semantic-ui-react';
import Link from 'next/link';
import styles from  '../styles/landing.module.css';
import 'semantic-ui-css/semantic.min.css';
import "@fontsource/lato";
import "@fontsource/ubuntu";

function getwindowswidth (){
    const {innerWidth:width} = window;
    return width;
}

function Myheader(){
    let footerDisAppear;
    //To change the state of the component
    const [footer, setfooter] = useState(true);

    //To cause a custom effect on the change
    useEffect(() =>{
          let sizeofwindow = getwindowswidth();
          sizeofwindow <= 700 ?footerDisAppear= false:footerDisAppear = true;
          setfooter(footerDisAppear);
    });

return <Container fluid textAlign="center" className={styles.container}>
    <Header> <div>
    <Container fluid> {footer &&
    <Grid columns={2} padded>
    
            <Grid.Column>
                    <Link href='/' > 
                        <Image src="/logo.png" alt="authLogo" maxHeight='50px' maxWidth='135.53px' /> 
                    </Link>
            </Grid.Column>

            <Grid.Column textAlign='right'>
                <Button.Group>
                    <Link href='/' > 
                        <Button floated="right" content="Get in touch" style={{fontSize:'9px',maxHeight:'20px',maxWidth:'100px',verticalAlign:'middle'}} />
                    </Link>
                        <Button.Or text='or' />
                    <Link href='/' > 
                        <Button floated="right" content="Learn more" style={{fontSize:'9px',maxHeight:'20px',maxWidth:'100px'}}/>
                    </Link>
                </Button.Group>
            </Grid.Column>
</Grid>} {footer || <Link href='/' > 
                        <Image src="/logo.png" alt="authLogo" maxHeight='50px' maxWidth='135.53px' centered /> 
                    </Link>}
</Container>
    </div></Header>

    <div className={styles.authfence}> 
    <Header as='h1' style={{color:'white',textAlign:'left',fontFamily:'ubuntu sans-serif', fontSize:'40px'}} > AuthFence</Header>
    <p className={styles.animate1}> Lorem ipsum dolor sit amet, consetetur sadipscing 
    elitr, sed diam nonumy eirmod tempor invidunt ut
    labore et dolore magna aliquyam erat, sed diam voluptua.</p>
    <div style={{textAlign:'left'}}> 
        <Link href='/' > 
            <Button content='Learn more' />
        </Link>

        <Link href='/' > 
            <Button content='Get in touch' color='red'    />
        </Link>
    </div>

    <div style={{marginTop:'60px', fontFamily:'Lato', fontWeight:'bold'}}>
        <div>SCROLL DOWN TO LEARN MORE</div>
        <Link href='/'>
            <Icon name="angle double down" size="huge" className={styles.gridcolor}/>
        </Link>
    </div>

     </div>
     <Image src="/pexels-fauxels-3183197.png" className={styles.front_page_photo}/>
    <Image src="/pexels-andrea-piacquadio-864994.png"  className={styles.front_page_photo2} circular />
    
    </Container>
}
export default Myheader;
