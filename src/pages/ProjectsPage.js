import React, { Component } from 'react';
import PageTitle from '../Components/PageTitle';
import BurgerMenuButton from '../Components/BurgerMenuButton ';
import Menu from '../Components/Menu';
import { Grid, Row, Col } from 'react-flexbox-grid';
import ProjectCard from '../Components/ProjectCard';
import coverPhoto from '../images/projects-page-image.svg';
import LoadingDiv from '../Components/LoadingDiv';
class ProjectsPage extends Component {
	constructor() {
		super();
		this.menuRef = React.createRef();
		this.state = {
			repos: [],
			selectedValue: 'last_created',
			isLoading: true,
			burgerMenuOpened: false
		};
	}

	handleChange = (event) => {
		this.setState({ selectedValue: event.target.value });
	};

	closeMenu = (event) => {
		if (this.props.location.pathname === event.target.getAttribute('href')) {
			this.setState({ burgerMenuOpened: !this.state.burgerMenuOpened });
			this.menuRef.current.classList.add('disabled');
			setTimeout(() => {
				this.menuRef.current.style.display = 'none';
			}, 500);
			document.body.style.overflowY = 'scroll';
		}
	};

	toggleBurger = () => {
		this.setState({ burgerMenuOpened: !this.state.burgerMenuOpened });
		console.log(this.menuRef.current.classList);
		if (this.state.burgerMenuOpened) {
			document.body.style.overflowY = 'scroll';
			this.menuRef.current.classList.add('disabled');
			setTimeout(() => {
				this.menuRef.current.style.display = 'none';
			}, 400);
		} else {
			document.body.style.overflowY = 'hidden';
			this.menuRef.current.style.display = 'block';
			setTimeout(() => {
				this.menuRef.current.classList.remove('disabled');
			}, 50);
		}
	};

	componentDidMount = () => {
		this.menuRef.current.classList.add('disabled');
		document.body.style.overflowY = 'scroll';
		setTimeout(() => {
			this.menuRef.current.style.display = 'none';
		}, 500);
		fetch('https://api.github.com/users/panteliselef/repos').then((response) => response.json()).then((data) => {
			console.log(data);
			this.setState({ repos: data, isLoading: false });
		});
	};

	press = () => {
		this.props.addRepo();
	};

	render() {
		console.log(this.props);
		return (
			<div className="container">
				<Grid fluid>
					<Row>
						<Col xs={8} md={7}>
							<PageTitle text={[ 'Projects' ]} coloredText={''} />
						</Col>
					</Row>
					<Row>
						<select
							style={{ marginTop: '2em' }}
							name="fruit"
							value={this.state.selectedValue}
							onChange={this.handleChange}
						>
							<option disabled>Order</option>
							<option value="last_created">Last created</option>
							<option value="last_updated">Last updated</option>
						</select>
					</Row>
					<Row>{/* <button onClick={this.press}>Press Me</button> */}</Row>
					<Row>
						<div className="project-cards-container">
							{this.state.isLoading ? (
								<LoadingDiv />
							) : (
								this.state.repos
									.sort((a, b) => {
										let d_a, d_b;
										if (this.state.selectedValue === 'last_created') {
											d_a = new Date(a.created_at);
											d_b = new Date(b.created_at);
										} else if (this.state.selectedValue === 'last_updated') {
											d_a = new Date(a.updated_at);
											d_b = new Date(b.updated_at);
										}
										return d_b - d_a;
									})
									.map((repo) => {
										let d;
										if (this.state.selectedValue === 'last_created') {
											d = repo.created_at;
										} else if (this.state.selectedValue === 'last_updated') {
                      d = repo.updated_at;
										}
										return (
											<ProjectCard
												key={repo.id}
												language={repo.language}
												date={d}
												projectName={repo.name}
												description={repo.description}
												url={repo.clone_url}
											/>
										);
									})
							)}
						</div>
					</Row>
				</Grid>
				<div className="cover-photo cover-photo-large" style={{ backgroundImage: `url(${coverPhoto})` }} />
				<BurgerMenuButton toggleBurger={this.toggleBurger} opened={this.state.burgerMenuOpened} />
				<Menu doOnClick={this.closeMenu} ref={this.menuRef} />
			</div>
		);
	}
}

// const mapStateToProps = (state) => {
//   return {
//     repos: state.repos
//   }
// }

// const mapDispatchToProps = (dispatch) => {
//   return {
//     addRepo: () => { dispatch({type:'ADD_REPO'})}
//   }
// }

// export default connect(mapStateToProps,mapDispatchToProps)(ProjectsPage);
export default ProjectsPage;
