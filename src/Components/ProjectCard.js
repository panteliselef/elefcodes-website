import React from 'react';
import linkIcon from '../images/link-variant.svg';
import githubIcon from '../images/github-circle.svg';
import { Grid, Row, Col } from 'react-flexbox-grid';
const ProjectCard = ({ projectName, description, url, language, date }) => {
	let dateObj = new Date(date);
	let months = [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec' ];
	let dateString = `${months[dateObj.getMonth() + 1]}, ${dateObj.getFullYear()}`;

	return (
		<div className="project-card">
			<div className="top-section">
				<div
					style={{
						backgroundImage: `url(${githubIcon})`,
						backgroundSize: 'cover',
						backgroundPosition: 'center center',
						height: 'calc(90px + 0.6em)',
						width: '13em',
						opacity: '0.5'
					}}
				/>
				{/* <img src={githubIcon} style={{transform:'translateY(-0.4em)',width:'35%',paddingLeft:'10%'}}>

        </img> */}
				<div className="top-section-image" />
			</div>
			<div className="bottom-section">
				<Grid fluid>
					<Row between="xs">
						<Col xs={10}>
							<div className="subtitle">{projectName}</div>
						</Col>
						<Col xs={1}>
							<a href={url}>
								<img alt="link-icon" src={linkIcon} />
							</a>
						</Col>
					</Row>
					<Row>
						<div className="details">
							{description ? (
								description
							) : (
								'Description of the project. Description of the project. Description of the project'
							)}
						</div>
					</Row>
				</Grid>
				<Grid fluid>
					<Row>
						<Col xs={12}>
							<div
								style={{
									marginTop: '1rem',
									display: 'flex',
									justifyContent: 'space-between',
									fontSize: '.8rem'
								}}
							>
								<div>Writen in {language}</div>
								<div>{dateString}</div>
							</div>
						</Col>
					</Row>
				</Grid>
			</div>
		</div>
	);
};

export default ProjectCard;
