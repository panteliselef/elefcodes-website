import React, {Component} from "react";
import { Grid, Row, Col } from 'react-flexbox-grid';
import PageTitle from "../Components/PageTitle";
import BurgerMenuButton from "../Components/BurgerMenuButton ";
import Menu from "../Components/Menu";
import coverPhoto2 from '../images/instagram-page-image2.png';
import PostCard from "../Components/PostCard";
import LoadingDiv from "../Components/LoadingDiv";

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


  componentDidMount(){
    this.menuRef.current.classList.add("disabled");
    document.body.style.overflowY= "scroll";
    setTimeout(()=>{
      this.menuRef.current.style.display = 'none';
    },500)
    fetch("https://elefcodes-website-api.herokuapp.com/instagramProfile")
      .then(response=>response.json())
      .then(data=>{
        this.setState({profileData:data.data})
      })
      .catch(err=>{
        console.log(err);
        this.setState({profileData:{}});
      })
    fetch("https://elefcodes-website-api.herokuapp.com/instagramPosts")
      .then(response=>response.json())
      .then(data=>{
        this.setState({images:data.data})
        console.log(data.data);
      })
      .catch(err=>{
        console.log(err);
        this.setState({images:[]});
      })
      
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
            <Col xs={12} style={{display:'flex',flexWrap:'wrap'}}>
              <div className="title" style={{fontSize:'2em'}}>
                @elefcodes
              </div>
              <div>
                <div className="title" style={{fontSize:'2em',marginLeft:'1em',display:'inline-block'}}>
                
                {this.state.profileData.counts?this.state.profileData.counts.media:""}<span style={{fontSize:'0.9rem'}}>posts</span>
                </div>
                <div className="title" style={{fontSize:'2em',marginLeft:'1em',display:'inline-block'}}>
                {this.state.profileData.counts?this.state.profileData.counts.followed_by:""}<span style={{fontSize:'0.9rem'}}>followers</span>
                </div>

              </div>
            </Col>
          </Row>
          <Row>
            <div className="project-cards-container" style={{maxHeight:'10em'}}>
              {this.state.images === undefined || this.state.images.length === 0 
                ? (<LoadingDiv/>)
                : (
                  this.state.images.map(image=>{
                    return <PostCard key={image.id} post={image}/>
                  })
                )
              }

            </div>
          </Row>
        </Grid>
        <div className="cover-photo" style={{backgroundImage:`url(${coverPhoto2})`}}>

        </div>
        <BurgerMenuButton toggleBurger={this.toggleBurger} opened={this.state.burgerMenuOpened}/>
        <Menu doOnClick={this.closeMenu} ref={this.menuRef}/>
      </div>
      
    );
  }


}

export default InstagramPage;