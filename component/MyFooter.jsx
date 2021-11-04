import {Fragment, React,useState} from 'react';
import {Header,Icon,Button, Container,Grid} from 'semantic-ui-react';
import styles from  '../styles/landing.module.css';
import Link from 'next/link';
import 'semantic-ui-css/semantic.min.css';

function Myfooter(){
    return <Fragment > <div style={{backgroundColor:'#454797',
    borderRadius:'15px',
    boxShadow:'0.5px 1px 7px',
    padding:'30px 20px',
    marginTop:'30px'}}>
    <Grid>
    <Grid.Row columns={3}>
      <Grid.Column>
            <Link href="/">
                <Header as='h2' content="Get started" />
            </Link>
      </Grid.Column>
      <Grid.Column>
            <Link href="/">
                <Header as='h2' content="Get help" />
            </Link>
      </Grid.Column>
      <Grid.Column>
            <Link href="/">
                <Header as='h2' content="About us" />
            </Link>
      </Grid.Column>
    </Grid.Row>

    <Grid.Row columns={3}>
    <Grid.Column>
            <Link href="/">
                <Header as='h3' content="Sign up" />
            </Link>
      </Grid.Column>
      <Grid.Column>
            <Link href="/">
                <Header as='h3' content="How it works" />
            </Link>
      </Grid.Column>
      <Grid.Column>
            <Link href="/">
                <Header as='h3' content="Company" />
            </Link>
      </Grid.Column>
    </Grid.Row>

    <Grid.Row columns={3}>
      
    <Grid.Column>
            <Link href="/">
                <Header as='h3' content="Current offers" />
            </Link>
      </Grid.Column>
      <Grid.Column>
            <Link href="/">
                <Header as='h3' content="FAQ" />
            </Link>
      </Grid.Column>
      <Grid.Column>
            <Link href="/">
                <Header as='h3' content="Get in touch" />
            </Link>
      </Grid.Column>
    </Grid.Row>
  </Grid>
  
  <Grid >
    <Grid.Row columns={1}>
      <Grid.Column>
            <Link href="/">
                <Header as='h2' content="Get started" />
            </Link>
      </Grid.Column>
      
    </Grid.Row>

    <Grid.Row columns={3}>
      
    <Grid.Column>
            <Link href="/">
                <Header as='h3' content="Current offers" />
            </Link>
      </Grid.Column>
      <Grid.Column>
            <Link href="/">
                <Header as='h3' content="FAQ" />
            </Link>
      </Grid.Column>
      <Grid.Column>
            <Link href="/">
                <Header as='h3' content="Get in touch" />
            </Link>
      </Grid.Column>
    </Grid.Row>
  </Grid>
  </div>
  </Fragment>
}
export default Myfooter;