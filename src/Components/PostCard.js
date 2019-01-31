import React from "react";
import test from  "../images/test.jpg"
import { NavLink } from 'react-router-dom';
import linkIcon from '../images/link-variant.svg';
import { Grid, Row, Col } from 'react-flexbox-grid';
const PostCard  = ({projectName,descrition,url}) => {

  return (
    <div className="post-card">
      <div className="top-section" style={{padding:'0.6em'}}>
        <Row between="xs">
          <Col xs={4}>hello</Col>
          <Col xs={4}>sir</Col>
        </Row>
      </div>
      <div className="image-frame" style={{backgroundImage:`url(${test})`}}>
        
      </div>
      <div className="bottom-section" style={{padding:'0.6em'}}>
      <Row center="xs">
          <Col xs={12}>VIEW ON INSTAGRAM</Col>
        </Row>
      </div>
    </div>
  );
}

export default PostCard ;