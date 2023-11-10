import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { BoxLoading } from "react-loadingg";
import hImg from "./img/images.jpg";
import "./style/style.css";

const HomePage = () => {
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
				<div className='body'>
					<header>
						<div className='container'>
							<div className='header-inner'>
								<a className='logo' href='/'>
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
								<ul className={card ? "nav-list " : "nav-list nav-list__open"}>ё
									<NavLink to={"/"} className='nav-item'>
										Home
									</NavLink>
									<NavLink to={"/project"} className='nav-item'>
										Project
									</NavLink>
									<NavLink to={"/about"} className='nav-item'>
										About
									</NavLink>
									<NavLink to={"/contact"} className='nav-item'>
										Contact
									</NavLink>
								</ul>
							</div>
						</div>
					</header>
					<div className='hero slideInUp'>
						<div className='container'>
							<div className='hero-inner'>
								<div
									className='col-lg-6 order-1 order-lg-2 hero-img'
									data-aos='zoom-in'
									data-aos-delay='200'
								>
									<img src={hImg} className='hero-img animated' alt='' />
								</div>
								<h1 className='hero-title'>
									Hello, I am Muhammadjonov Abdulvoris
								</h1>
								<h1 className='hero-text'>
									<span>F</span>
									<span>r</span>
									<span>o</span>
									<span>n</span>
									<span>t</span>
									<span>e</span>
									<span>n</span>
									<span>d</span>
									<span>D</span>
									<span>e</span>
									<span>w</span>
									<span>o</span>
									<span>l</span>
									<span>o</span>
									<span>p</span>
									<span>e</span>
									<span>r</span>
								</h1>
							</div>
						</div>
					</div>
				</div>
			)}
		</React.Fragment>
	);
};

export default HomePage;
