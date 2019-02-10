import React, {Component} from 'react';
import insta from '../images/instagram.png'
import PageTitle from '../Components/PageTitle';
import mainPhoto from '../images/programmer1.svg';
import twitterIcon from '../images/twitter.svg';
import instagramIcon from '../images/instagram.svg';
import RoundedButton from '../Components/RoundedButton';
import BurgerMenuButton   from '../Components/BurgerMenuButton ';
import Menu from '../Components/Menu';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Dividor from '../Components/Dividor';
import ProjectCard from '../Components/ProjectCard';
import coverPhoto from '../images/projects-page-image.svg';
import LoadingDiv from '../Components/LoadingDiv';
import { connect } from 'react-redux';
class ProjectsPage extends Component {
  constructor(){
    super();
    this.menuRef = React.createRef();
    this.state = {
      'repos':[],
      'selectedValue':'Recent Projects',
      'isLoading':true,
      'burgerMenuOpened':false,
    }
  }

  handleChange = (event) => {
    this.setState({ selectedValue: event.target.value });
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

  // componentDidMount = () => {
  //   this.menuRef.current.classList.add("disabled");
  //   document.body.style.overflowY= "scroll";
  //   setTimeout(()=>{
  //     this.menuRef.current.style.display = 'none';
  //   },500)
  //   fetch("https://api.github.com/users/panteliselef/repos")
  //     .then(response=>response.json())
  //     .then(data=>{
  //       console.log(data);
  //       this.setState({repos:data,isLoading:false});
  //     });
  // }

  press = () => {
    this.props.addRepo();
  }


  render() {
    console.log(this.props);
    return (
      <div className="container">
        <Grid fluid>
          <Row>
            <Col xs={8} md={7}>
              <PageTitle text={['Projects']} coloredText={''}/>
            </Col>
          </Row>
          <Row>
            <select style={{marginTop:'2em'}} name="fruit" value={this.state.selectedValue} onChange={this.handleChange}>
              <option disabled >Recent Projects</option>
              <option>github</option>
            </select>
          </Row>
          <Row>
            <button onClick={this.press}>Press Me</button>
          </Row>
          <Row>
            <div className="project-cards-container">
            {this.state.isLoading
              ? (
                <LoadingDiv/>
                )
              :( 
                this.props.repos.map(repo=><ProjectCard key={repo.id} projectName={repo.name} description={repo.description} url={repo.clone_url}/>)
                )
              }
            </div>
          </Row>
        </Grid>
        <div className="cover-photo cover-photo-large" style={{backgroundImage:`url(${coverPhoto})`}}>

        </div>
        <BurgerMenuButton toggleBurger={this.toggleBurger} opened={this.state.burgerMenuOpened}/>
        <Menu doOnClick={this.closeMenu} ref={this.menuRef}/>
      </div>
      
    );
  }
}

const mapStateToProps = (state) => {
  return {
    repos: state.repos
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addRepo: () => { dispatch({type:'ADD_REPO'})}
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(ProjectsPage);