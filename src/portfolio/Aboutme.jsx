import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { BoxLoading } from "react-loadingg";
import "./style/style.css";

const Aboutme = () => {
	const [load, setLoad] = useState(true);
	useEffect(() => {
		setTimeout(() => {
			setLoad(false);
		}, 1000);
	});

	const [card, setCard] = useState(true);
	const handleCard = () => {
		setCard(!card);
	};
	return (
		<React.Fragment>
			{load ? (
				<div className='loading'>
					<BoxLoading className='load' />
				</div>
			) : (
				<div className='body-about'>
					<div className='header-project'>
						<div className='container'>
							<div className='header-inner'>
								<a className='logo' href='/about'>
									<h2>MyPo</h2>
								</a>
								<button
									className={card ? "burger" : "burger btn_close"}
									onClick={handleCard}
								>
									<span></span>
									<span></span>
									<span></span>
								</button>
								<ul
									className={card ? "nav-list3" : "nav-list3 nav-list3__open"}
								>
									<NavLink to={"/"} className='nav-item2'>
										Home
									</NavLink>
									<NavLink to={"/project"} className='nav-item2'>
										Project
									</NavLink>
									<NavLink to={"/about"} className='nav-item2'>
										About
									</NavLink>
									<NavLink to={"/contact"} className='nav-item2'>
										Contact
									</NavLink>
								</ul>
							</div>
						</div>
					</div>
					<div className='hero-about fadeIn'>
						<div className='container'>
							<div className='hero-about-inner'>
								<h1 className='about-title'>About Me</h1>
								<br />
								<p className='about-text'>
									I`m currently in school and learning website development at
									<Link target="_blank" to={"https://hokimakademiyasi.uz"}>
										<span className='as'> DIGITAL CITY. </span>
									</Link>
									<span className='as2'>DIGITAL CITY.</span>
									As a frontend developer, I enjoy building multi-functional web
									applications and websites that work with new people and I`m
									learning new things. Now I am 14 years old.
									<br /> <br /> When I turn 18, I will go to America and
									continue my career. My goal is to always build scalable and
									efficient apps while providing a fun, pixel-perfect user
									experience.
								</p>
							</div>
						</div>
					</div>
				</div>
			)}
		</React.Fragment>
	);
};

export default Aboutme;
