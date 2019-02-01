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
    this.menuRef = React.createRef();
    this.state = {
      'burgerMenuOpened':false,
    }
  }

  toggleBurger = () => {
    this.setState({burgerMenuOpened:!this.state.burgerMenuOpened});
  }

  closeMenu = (event) =>{
    if(
      this.props.location.pathname === event.target.getAttribute("href")
    ){
      this.setState({burgerMenuOpened:!this.state.burgerMenuOpened});
      this.menuRef.current.classList.add("disabled");
      setTimeout(()=>{
        this.menuRef.current.style.display = 'none';
      },500)
      document.body.style.overflowY= "scroll";
    }

  }

  toggleBurger = () => {
    this.setState({burgerMenuOpened:!this.state.burgerMenuOpened});
    console.log(this.menuRef.current.classList);
    if(this.state.burgerMenuOpened) {
      document.body.style.overflowY= "scroll";
      this.menuRef.current.classList.add("disabled");
      setTimeout(()=>{
        this.menuRef.current.style.display = 'none';
      },400)
    }else {
      document.body.style.overflowY= "hidden";
      this.menuRef.current.style.display = 'block';
      setTimeout(()=>{
        this.menuRef.current.classList.remove("disabled");
      },50)
    }
  }


  componentDidMount = () => {
    this.menuRef.current.classList.add("disabled");
    document.body.style.overflowY= "scroll";
    setTimeout(()=>{
      this.menuRef.current.style.display = 'none';
    },500)
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
          <div style={{maxWidth:"1200px",margin:"auto"}}>

            <Row between="xs" middle="xs">
              <Col xsOffset={4} mdOffset={0} xs={4} md={2} className="padding-1">
                <Row center="xs">
                  <Col xs={6} md={4}>
                    <a href="https://twitter.com/elefcodes">
                      <img src={twitterIcon} width="auto" height="28px" style={{zIndex:'1'}} alt=""/>
                    </a>
                  </Col>
                  <Col xs={6} md={2}>
                    <a href="https://instagram.com/elefcodes">
                      <img src={instagramIcon} width="auto" height="28px" style={{zIndex:'1'}} alt=""/>
                    </a>
                  </Col>
                </Row>
              </Col>
              <Col xs={12} md={4} className="padding-1">
                <RoundedButton url="/instagram"/>
              </Col>
              <Col xsOffset={0} xs={12} md={4} className="padding-1">
                <div id="some-text" style={{maxWidth:'20em',fontWeight:'bold',lineHeight:'1.5em',margin:'auto'}}>I am a Web Developer and a CS student with
                  a lot of experience on creating awesome
                  UIs and UXs
                </div>
              </Col>
              
            </Row>
          </div>
          <Dividor top="20px"/>
        </Grid>
        <BurgerMenuButton toggleBurger={this.toggleBurger} opened={this.state.burgerMenuOpened}/>
        <Menu doOnClick={this.closeMenu} ref={this.menuRef}/>
      </div>
      
    );
  }
}

export default StartPage;