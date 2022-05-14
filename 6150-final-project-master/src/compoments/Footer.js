import React from "react";
import {
Box,
Container,
Row,
Column,
FooterLink,
Heading,
} from "./FooterStyles";

const Footer = () => {
return (
	<Box style={{marginTop:"30px"}}>
	<h1 style={{ color: "blue",
				textAlign: "center",
				marginTop: "-50px" }}>
		Zillow Renting Selling buying
	</h1>
	<Container>
		<Row>
		<Column>
			<Heading>About Us</Heading>
			<FooterLink href="#">About</FooterLink>
			<FooterLink href="#">Search</FooterLink>
			<FooterLink href="#">Careers</FooterLink>
		</Column>
		<Column>
			<Heading>Services</Heading>
			<FooterLink href="#">Help</FooterLink>
			<FooterLink href="#">Advertise</FooterLink>
			<FooterLink href="#">Fair Housing Guide</FooterLink>
			<FooterLink href="#">Privacy Portal</FooterLink>
		</Column>
		<Column>
			<Heading>Contact Us</Heading>
			<FooterLink href="#">StreetEasy</FooterLink>
			<FooterLink href="#">HotPads</FooterLink>
			<FooterLink href="#">Out East</FooterLink>
			<FooterLink href="#">ShowingTime</FooterLink>
		</Column>
		<Column>
			<Heading>Social Media</Heading>
			<FooterLink href="#">
			<i className="fab fa-facebook-f">
				<span style={{ marginLeft: "10px" }}>
				Facebook
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="fab fa-instagram">
				<span style={{ marginLeft: "10px" }}>
				Instagram
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="fab fa-twitter">
				<span style={{ marginLeft: "10px" }}>
				Twitter
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="fab fa-youtube">
				<span style={{ marginLeft: "10px" }}>
				Youtube
				</span>
			</i>
			</FooterLink>
		</Column>
		</Row>
	</Container>
	</Box>
);
};
export default Footer;
