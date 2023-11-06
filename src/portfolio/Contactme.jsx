import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { BoxLoading } from "react-loadingg";
import "./style/style.css";
import git from "./image contact/download.png";
import ins from "./image contact/images.jpg";
import ver from "./image contact/Vercel.svg";
import tg from "./image contact/telegram.jpg";

const Contact = () => {
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
				<div className='body-c'>
					<div className='header-project'>
						<div className='container'>
							<div className='header-inner'>
								<a className='logo' href='/contact'>
									<h2>Contact</h2>
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
									className={card ? "nav-list2" : "nav-list2 nav-list2__open"}
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
					<div className='hero-c'>
						<div className='container'>
							<div className='hero-inner-c'>
								<h1 className='about-title'>Contact Me</h1>
								<div className='icon-div'>
									<div className='icon-box'>
										<Link to={"https://t.me//abdulvoris_812 	 	"}>
											<img
												src={tg}
												alt='telegram'
												className='c-icon animated3'
											/>
										</Link>
										<p className='icon-title'>Telegaram Link</p>
									</div>
									<div className='icon-box'>
										<Link to={"https://www.instagram.com/abd_ulvoris812"}>
											<img
												src={ins}
												alt='telegram'
												className='c-icon animated2'
											/>
										</Link>
										<p className='icon-title'>Instagram Link</p>
									</div>
									<div className='icon-box'>
										<Link to={"https://vercel.com/abdulvoris812s-projects/figma-project"}>
											<img
												src={ver}
												alt='telegram'
												className='c-icon animated3'
											/>
										</Link>
										<p className='icon-title'>Vercel Link</p>
									</div>
									<div className='icon-box'>
										<Link to={"https://github.com/abdulvoris812"}>
											<img
												src={git}
												alt='telegram'
												className='c-icon animated2'
											/>
										</Link>
										<p className='icon-title'>Git Hub Link</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			)}
		</React.Fragment>
	);
};

export default Contact;
