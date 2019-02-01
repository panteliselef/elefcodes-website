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
    this.menuRef = React.createRef();
    this.state = {
      'images' : [],
      'burgerMenuOpened':false,
      'profileData': {}
    }
  }


  toggleBurger = () => {
    this.setState({burgerMenuOpened:!this.state.burgerMenuOpened});
    console.log(this.menuRef.current.classList);
    if(this.state.burgerMenuOpened) {
      this.menuRef.current.classList.add("disabled");
      setTimeout(()=>{
        this.menuRef.current.style.display = 'none';
      },500)
    }else {
      this.menuRef.current.style.display = 'block';
      setTimeout(()=>{
        this.menuRef.current.classList.remove("disabled");
      },50)
    }
  }

  componentDidMount(){
    this.menuRef.current.classList.add("disabled");
    setTimeout(()=>{
      this.menuRef.current.style.display = 'none';
    },500)
    fetch("https://elefcodes-website-api.herokuapp.com/instagramProfile")
      .then(response=>response.json())
      .then(data=>{
        this.setState({profileData:data.data})
        console.log(data.data.id);
      })
      .catch(console.log)
    fetch("https://elefcodes-website-api.herokuapp.com/instagramPosts")
      .then(response=>response.json())
      .then(data=>{
        this.setState({images:data.data})
        // console.log(data);
      })
      .catch(console.log);
  }

  render() {
    return (
      <div className="container">
        <Grid fluid>
          <Row>
            <Col xs={8} md={7}>
              <PageTitle text={['Instagram']} coloredText={''}/>
            </Col>
          </Row>
          <Row style={{marginTop:'2em'}}>
            <Col xs={12} style={{display:'flex'}}>
              <div className="title" style={{fontSize:'2em'}}>
                @elefcodes
              </div>
              <div className="title" style={{fontSize:'2em',marginLeft:'1em'}}>
              
              {this.state.profileData.counts?this.state.profileData.counts.media:""}<span style={{fontSize:'0.9rem'}}>posts</span>
              </div>
              <div className="title" style={{fontSize:'2em',marginLeft:'1em'}}>
              {this.state.profileData.counts?this.state.profileData.counts.followed_by:""}<span style={{fontSize:'0.9rem'}}>followers</span>
              </div>
            </Col>
          </Row>
          <Row>
            <div className="project-cards-container" style={{maxHeight:'10em'}}>
              
              {this.state.images.map(image=>{
                return <PostCard key={image.id} post={image}/>
                {/* return <img src={image.images.standard_resolution.url}></img> */}
              })}
            </div>
          </Row>
        </Grid>
        <div style={{zIndex:-1,position:'fixed',backgroundImage:'url('+coverPhoto+')',bottom:'0',right:'0',width:'59em',height:'50em',backgroundRepeat:'no-repeat'}}>

        </div>
        <BurgerMenuButton toggleBurger={this.toggleBurger} opened={this.state.burgerMenuOpened}/>
        <Menu ref={this.menuRef}/>
      </div>
      
    );
  }


}

export default InstagramPage;