import React, {Component} from "react";
import { Grid, Row, Col } from 'react-flexbox-grid';
import PageTitle from "../Components/PageTitle";
import ProjectCard from "../Components/ProjectCard";
import BurgerMenuButton from "../Components/BurgerMenuButton ";
import Menu from "../Components/Menu";
import coverPhoto from '../images/instagram-page-image.png';
import PostCard from "../Components/PostCard";

class InstagramPage extends Component {

  constructor(){
    super();
    this.state = {
      'burgerMenuOpened':false,
    }
  }


  toggleBurger = () => {
    this.setState({burgerMenuOpened:!this.state.burgerMenuOpened});
  }

  componentDidMount(){

    // fetch("https://api.instagram.com/v1/users/self/media/recent/?access_token=2339215388.7e9cc9c.526f5fc6d07a4f55ac5e92576dbd3cc2")
    //   .then(response=>response.json())
    //   .then(console.log);
  }

  render() {
    return (
      <div className="container">
        <Grid fluid>
          <Row>
            <Col xs={8} md={7}>
              <PageTitle text={['@elefcodes']} coloredText={''}/>
            </Col>
          </Row>
          <Row>
            <div className="project-cards-container">
              <PostCard/>
            </div>
          </Row>
        </Grid>
        <div style={{position:'fixed',backgroundImage:'url('+coverPhoto+')',bottom:'0',right:'0',width:'59em',height:'50em',backgroundRepeat:'no-repeat'}}>

        </div>
        <BurgerMenuButton toggleBurger={this.toggleBurger} opened={this.state.burgerMenuOpened}/>
        <Menu visible={this.state.burgerMenuOpened}/>
      </div>
      
    );
  }


}

export default InstagramPage;