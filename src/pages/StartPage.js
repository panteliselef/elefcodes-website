import React, {Component} from 'react';
import insta from '../images/instagram.png'
import PageTitle from '../Components/PageTitle';
import mainPhoto from '../images/programmer1.svg';
import twitterIcon from '../images/twitter.svg';
import instagramIcon from '../images/instagram.svg';
import RoundedButton from '../Components/RoundedButton';
import BurgerMenuButton   from '../Components/BurgerMenuButton ';
import Menu from '../Components/Menu';

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
        <PageTitle text={['Read about the stuff','doing']} coloredText={'I am'}/>
        <BurgerMenuButton toggleBurger={this.toggleBurger} opened={this.state.burgerMenuOpened}/>
        <Menu visible={this.state.burgerMenuOpened}/>
        <div style={{display:'grid',gridTemplateColumns:'minmax(auto,100px) auto'}}>
          
          <div style={{alignSelf:'flex-end'}}>
            <div style={{minWidth:'80px',width:'100%',marginBottom:'3em',display:'flex',justifyContent:'space-around'}}>
              <img src={twitterIcon} width="auto" height="28px" style={{zIndex:'1'}} alt=""/>
              <img src={instagramIcon} width="auto" height="28px" style={{zIndex:'1'}} alt=""/>
            </div>
          </div>
          <div>
            <img className="main-photo" src={mainPhoto} alt=""/>
            <div style={{display:'flex',marginTop:'2em',marginBottom:'2em',justifyContent:'space-around',alignItems:'center',padding:'0 0 0 6vw'}}>
              <RoundedButton/>
              <div style={{maxWidth:'20em',fontWeight:'bold',textAlign:'left',lineHeight:'1.5em'}}>I am a Web Developer and a CS student with
                a lot of experience on creating awesome
                UIs and UXs
              </div>
            </div>
          </div>
        </div>
      </div>
      
    );
  }
}

export default StartPage;