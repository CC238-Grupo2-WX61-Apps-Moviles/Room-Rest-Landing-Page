import React from "react";
import "../styles/Home.css";
import { makeStyles } from "@mui/material";

const useStyles = makeStyles((theme) => ({
	home: {
		height: '100vh',
		display: 'flex',
		alignItems: "center",
		justifyContent: "center",
		textAlign: "center",
		cursor: 'default',
	},
	homeContainer: {
		maxWidth: "800px",
		margin: "0 auto",
		padding: "20px"
	},
}));

const Home = () => {
	const classes = useStyles();

	return (   	
		<div className={classes.home}>	
			<div className={classes.homeContainer}>
				
				<div style={{ marginTop: 25, marginBottom: 25 }} className="home-title">
					Disfruta de
					<img 
						src="assets/RedAkiraLetters.png" 
						alt="Akira" 
						style={{ height: '46px', marginLeft: 16, paddingTop: 6}} 
					/>
				</div>

				<div className="home-avatar" style={{ marginTop: 35, marginBottom: 35 }} >
					<img src="assets/AkiraPhonesBanner.png" alt="Avatar" />
				</div>							 
				
				<div className="home-desc">
					Transforma tu experiencia al comprar merch asiático desde PE
					<img style={{marginRight: 12}} src="/assets/peru.png" alt="Peru" className="peru-image"/>
					Encontrarás productos de K-pop, animes y mangas cautivadores ¡Solo en Akira Mobile!
				</div>
				
			</div>
		</div>
	);
};

export default Home;