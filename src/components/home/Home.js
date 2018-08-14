import React from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';
import './Home.css';

const Home = () => {
	return (
		<Grid>
			<Jumbotron>
				<h2>Welcome to Cheecko Website</h2>
				<p>This is how to build a website using React, React Router and React Bootstrap</p>
				<Link to="/about">
					<Button bsStyle="primary">About</Button>
				</Link>
			</Jumbotron>
			<Row className="show-grid text-center">
				<Col xs={12} sm={4} className="person-wrapper">
					<Image src="images/person-1.jpg" circle className="profile-pic" />
					<h3>Frank</h3>
					<p>That's a crooked tree. We'll send him to Washington. These little son of a guns hide in your brush and you just have to push them out.</p>
				</Col>
				<Col xs={12} sm={4} className="person-wrapper">
					<Image src="images/person-2.jpg" circle className="profile-pic" />
					<h3>Frank</h3>
					<p>That's a crooked tree. We'll send him to Washington. These little son of a guns hide in your brush and you just have to push them out.</p>
				</Col>
				<Col xs={12} sm={4} className="person-wrapper">
					<Image src="images/person-3.jpg" circle className="profile-pic" />
					<h3>Frank</h3>
					<p>That's a crooked tree. We'll send him to Washington. These little son of a guns hide in your brush and you just have to push them out.</p>
				</Col>
			</Row>
		</Grid>
	);
}

export default Home;