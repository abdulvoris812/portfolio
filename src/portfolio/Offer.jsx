/** @format */

import React, { useState, useEffect } from "react";
import { BoxLoading } from "react-loadingg";
import "./style/styleoffer.css";
import logo from "./img/logo.png";
import hb from "./img/header-btn.png";
import hb2 from "./img/header-btn2.png";
import s2 from "./img/section2 img.png";

const Offer = () => {
	const [load, setLoad] = useState(true);
	useEffect(() => {
		setTimeout(() => {
			setLoad(false);
		}, 1000);
	});

	return (
		<React.Fragment>
			{load ? (
				<div className='loading'>
					<BoxLoading className='load' />
				</div>
			) : (
				<div className="body-o">
					<div className='header-offer'>
						<div className='container-offer'>
							<div className='header-inner-offer'>
								<a href='#'>
									<img src={logo} alt='logo' className='logo-offer' />
								</a>
								<ul className='header-inner__ul-offer'>
									<a href='#'>
										<li className='li-offer'>Badroom</li>
									</a>
									<a href='#'>
										<li className='li-offer'>Living Room</li>
									</a>
									<a href='#'>
										<li className='li-offer'>Dining Room</li>
									</a>
									<a href='#'>
										<li className='li-offer'>Office</li>
									</a>
									<a href='#'>
										<li className='li-offer'>Kitchen</li>
									</a>
									<a href='#'>
										<li className='li-offer'>Sofa</li>
									</a>
								</ul>
								<div className='btn-offer'>
									<a href='#'>
										<img src={hb2} className='btnimg-offer' />
										<img src={hb} className='btnimg-offer' />
									</a>
								</div>
								<div className='burger-offer'>
									<span></span>
									<span></span>
									<span></span>
								</div>
							</div>
							<div className='section-offer'>
								<h1 className='section-title-offer'>
									Offer products to make your interior <span>Minimalist.</span>
								</h1>
								<p className='section-text-offer'>
									we have helped more than 1000+ people to give perfect comfort
									to the interior of their home
								</p>
								<button className='section-btn-offer'>Find Produk</button>
							</div>
						</div>
					</div>
					<br />
					<br />
					<main>
						<section className='ecommerce-box-offer'>
							<div className='container-offer'>
								<div className='ecommerce-offer'>
									<div className='ecommerce-cards-offer'>
										<div className='cards-offer'>
											<div className='card-offer'>
												<h3 className='card__title-offer'>
													Fast and safe delivery
												</h3>
												<p className='card__text-offer'>
													We are improving businesses based on our vast
													experience.
												</p>
											</div>

											<div className='card-offer'>
												<h3 className='card__title-offer'>
													Quick and easy returns
												</h3>
												<p className='card__text-offer'>
													We are improving businesses based on our vast
													experience.
												</p>
											</div>

											<div className='card-offer'>
												<h3 className='card__title-offer'>
													24 hour customer service
												</h3>
												<p className='card__text-offer'>
													We are improving businesses based on our vast
													experience.
												</p>
											</div>

											<div className='card-offer'>
												<h3 className='card__title-offer'>
													the price match is very fitting
												</h3>
												<p className='card__text-offer'>
													We are improving businesses based on our vast
													experience.
												</p>
											</div>
										</div>
										<img
											className='ecommerce-cards__image-offer'
											src={s2}
											alt='Girl use computer'
										/>
									</div>
									<br />
									<button className='ecommerce-cards__btn-offer'>
										Start Shopping
									</button>
								</div>
							</div>
						</section>
					</main>
				</div>
			)}
		</React.Fragment>
	);
};

export default Offer;
