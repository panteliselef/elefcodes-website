import React from "react";
import heart from  "../images/heart.svg"
import openNew from  "../images/open-in-new.svg"
import { Grid, Row, Col } from 'react-flexbox-grid';
const PostCard  = ({post}) => {

  return (
    <div className="post-card">
      <div className="top-section" style={{padding:'0.8em'}}>
      <Grid fluid>

        <Row between="xs" middle="xs">
          <Col xs={4}>@elefcodes</Col>
          <Col xs={4} style={{textAlign:'right'}}> {post.likes.count} <img alt="heart-icon" src={heart} style={{transform:'translateY(2px)'}} height="15px"></img></Col>
        </Row>
      </Grid>
      </div>
      <div className="image-frame" style={{backgroundImage:`url(${post.images.standard_resolution.url})`}}></div>
      <div className="bottom-section" style={{padding:'0.8em'}}>
      <Row center="xs">
          <Col xs={12}><a target="blank" style={{textDecoration:'none',color:'initial'}} href={post.link}>VIEW ON INSTAGRAM <img alt="Open to new tab" src={openNew} style={{transform:'translateY(2px)',marginLeft:'1em'}} height="15px"></img></a></Col>
        </Row>
      </div>
    </div>
  );
}

export default PostCard ;