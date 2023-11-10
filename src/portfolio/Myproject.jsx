import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { BoxLoading } from "react-loadingg";
import "./style/style.css";
import p1 from "./img/Снимок экрана 2023-10-23 135553.png";
import p2 from "./img/Снимок экрана 2023-10-23 135342.png";
import p3 from "./img/Снимок экрана 2023-10-27 144118.png"
import p4 from "./img/Снимок экрана 2023-10-23 135102.png";

const Myproject = () => {
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
				<div className='body-project'>
					<div className='header-project'>
						<div className='container'>
							<div className='header-inner'>
								<a className='logo' href='/project'>
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
					<div className='hero-p'>
						<div className='container'>
							<div className='hero-inner2'>
								<div className='hero-box fadeIn'>
									<h1 className='hero-title__project'>This is the best of my projects</h1>
									<div className='p-img_div'>
										<img src={p2} className='p-img' />
										<h3 className='p-title'>Design Maket</h3>
										<Link target="_blank" to={"/designproject"}>
											<button className='p-btn'>More</button>
										</Link>
										<div className='spand'>
											<span className='span1'></span>
											<span className='span2'></span>
											<span className='span3'></span>
											<span className='span4'></span>
										</div>
									</div>
								</div>
								<div className='hero-box2'>
									<div className='box'>
										<img src={p1} className='p-img2' />
										<h3 className='p-title'>Offer Maket</h3>
										<Link target="_blank" to={"/offerproject"}>
											<button className='p-btn'>More</button>
										</Link>
									</div>
									<div className='box'>
										{" "}
										<img src={p4} className='p-img2' />
										<h3 className='p-title'>NFT Maket</h3>
										<Link target="_blank" to={"/nftproject"}>
											<button className='p-btn'>More</button>
										</Link>
									</div>
									<div className='box'>
										{" "}
										<img src={p3} className='p-img2' />
										<h3 className='p-title'>Digiency Maket</h3>
										<p className="soon2">Soon</p>
										<Link to={"/soon"}>
											<button className='p-btn'>More</button>
										</Link>
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

export default Myproject;
