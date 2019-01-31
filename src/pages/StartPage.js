import React, {Component} from 'react';
import insta from '../images/instagram.png'
import PageTitle from '../Components/PageTitle';
import mainPhoto from '../images/programmer3.svg';
import twitterIcon from '../images/twitter.svg';
import instagramIcon from '../images/instagram.svg';
import RoundedButton from '../Components/RoundedButton';
import BurgerMenuButton   from '../Components/BurgerMenuButton ';
import Menu from '../Components/Menu';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Dividor from '../Components/Dividor';

class StartPage extends Component {

  constructor(){
    super();
    this.state = {
      'burgerMenuOpened':false,
    }
  }

  toggleBurger = () => {
    this.setState({burgerMenuOpened:!this.state.burgerMenuOpened});
  }


  render() {
    return (
      <div className="container">
        <Grid fluid>
          <Row>
            <Col xs={8} md={7}>
              <PageTitle text={['Read about the stuff','doing']} coloredText={'I am'}/>
            </Col>
          </Row>
          <Row>
            <Col xs={12} className="no-padding">
              <Row center="xs">
                <Col xs={12} className="no-padding">
                  <img className="main-photo" src={mainPhoto} alt=""/>
                </Col>
              </Row>
            </Col>
          </Row>
          <Dividor top="1em"/>
          <Row between="xs" middle="xs">
            <Col xsOffset={4} mdOffset={0} xs={4} md={2} className="padding-1">
              <Row center="xs">
                <Col xs={6} md={4}>
                  <img src={twitterIcon} width="auto" height="28px" style={{zIndex:'1'}} alt=""/>
                </Col>
                <Col xs={6} md={2}>
                  <img src={instagramIcon} width="auto" height="28px" style={{zIndex:'1'}} alt=""/>

                </Col>
              </Row>
            </Col>
            <Col xs={12} md={4} className="padding-1">
              <RoundedButton/>
            </Col>
            <Col xsOffset={0} xs={12} md={4} className="padding-1">
              <div id="some-text" style={{maxWidth:'20em',fontWeight:'bold',lineHeight:'1.5em',margin:'auto'}}>I am a Web Developer and a CS student with
                a lot of experience on creating awesome
                UIs and UXs
              </div>
            </Col>
            
          </Row>
          <Dividor top="20px"/>
        </Grid>
        <BurgerMenuButton toggleBurger={this.toggleBurger} opened={this.state.burgerMenuOpened}/>
        <Menu visible={this.state.burgerMenuOpened}/>
        {/* <div style={{display:'grid',gridTemplateColumns:'minmax(auto,100px) auto'}}>
          
          <div style={{alignSelf:'flex-end'}}>
            <div style={{minWidth:'80px',width:'100%',marginBottom:'3em',display:'flex',justifyContent:'space-around'}}>
              <img src={twitterIcon} width="auto" height="28px" style={{zIndex:'1'}} alt=""/>
              <img src={instagramIcon} width="auto" height="28px" style={{zIndex:'1'}} alt=""/>
            </div>
          </div>
          <div>
            
            <div style={{display:'flex',marginTop:'2em',marginBottom:'2em',justifyContent:'space-around',alignItems:'center',padding:'0 0 0 6vw'}}>
              

            </div>
          </div>
        </div> */}
      </div>
      
    );
  }
}

export default StartPage;