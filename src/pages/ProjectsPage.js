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

  componentDidMount = () => {
    fetch("https://api.github.com/users/panteliselef/repos")
      .then(response=>response.json())
      .then(data=>{
        console.log(data);
        this.setState({repos:data,isLoading:false});
      });
  }


  render() {
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
              <option>jeldawlo</option>
            </select>
          </Row>
          <Row>
            <div className="project-cards-container">
            {this.state.isLoading
              ? (
                <React.Fragment>
                <ProjectCard projectName={"Project Name"}/><ProjectCard projectName={"Project Name"}/>
                </React.Fragment>)
              :( 
                this.state.repos.map(repo=><ProjectCard projectName={repo.name} description={repo.description} url={repo.clone_url}/>))
                
              }
            </div>
          </Row>
        </Grid>
        <div style={{position:'fixed',backgroundImage:'url('+coverPhoto+')',bottom:'0',right:'0',width:'70%',height:'50em',backgroundRepeat:'no-repeat',zIndex:-1}}>

        </div>
        <BurgerMenuButton toggleBurger={this.toggleBurger} opened={this.state.burgerMenuOpened}/>
        <Menu ref={this.menuRef}/>
      </div>
      
    );
  }
}

export default ProjectsPage;