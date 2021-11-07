import {React,Fragment} from 'react';
import Myfooter from '../component/MyFooter';
import Getintouch from '../component/GetInTouch';
import Getintouchsteps from '../component/GetInTouchSteps';
import Myheader from '../component/MyHeader';
import Socialmedia from '../component/SocialMedia';
import Whatwedo from '../component/WhatWeDo';



function landingPage(){

    return  <Fragment> 
    <Myheader />
    <Getintouchsteps />
    <Whatwedo />
    <Socialmedia />
    <Getintouch />
    <Myfooter />
  </Fragment>
}
export default landingPage;