import React from "react";
import loading from  "../images/loading.svg"
import { NavLink } from 'react-router-dom';
import linkIcon from '../images/link-variant.svg';
import { Grid, Row, Col } from 'react-flexbox-grid';
const ProjectCard  = ({projectName,descrition,url}) => {

  return (
    <div className="project-card">
      <div className="top-section">

        <img src={loading} style={{transform:'translateY(-0.4em)',width:'50%'}}>

        </img>
        <div className="top-section-image">

        </div>
      </div>
      <div className="bottom-section">
        <Grid fluid>

          <Row between="xs">
            <Col xs={10}>
              <div className="subtitle">{projectName}</div>
            </Col>
            <Col xs={1}>
              <a href={url}><img src={linkIcon}></img></a>
            </Col>

          </Row>
          <Row>
            <div className="details">
              {descrition?descrition:"Description of the project. Description of the project. Description of the project"}
            </div>

          </Row>
        </Grid>
      </div>
    </div>
  );
}

export default ProjectCard ;