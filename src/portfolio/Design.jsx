import React, { useState, useEffect } from "react";
import { BoxLoading } from "react-loadingg";
import "./scss/main.scss";
import d1 from "./images design/d1.png";
import d2 from "./images design/d2.png";
import d3 from "./images design/d3.png";
import d4 from "./images design/d4.png";
import d5 from "./images design/d5.png";
import d6 from "./images design/d6.png";
import fes from "./images design/fasebok.png";
import ic1 from "./images design/Icon.png";
import ic2 from "./images design/Icon 2.png";
import ic3 from "./images design/Icon 3.png";
import ic4 from "./images design/icon 4.png";
import ic5 from "./images design/icon 5.png";
import ic6 from "./images design/icon 6.png";
import ins from "./images design/Instagram.png";
import log from "./images design/Logo.png";
import sec1i from "./images design/section img.png";
import sec21 from "./images design/section4 img.png";
import sec22 from "./images design/section4 img2.png";
import sec23 from "./images design/section4 img3.png";
import sec24 from "./images design/section4 img4.png";
import sec25 from "./images design/section4 img5.png";
import sec26 from "./images design/section4 img6.png";
import sec5i from "./images design/section5 icon.png";
import sec51 from "./images design/section5 img1.png";
import sec52 from "./images design/section5 img2.png";
import sec53 from "./images design/section5 img3.png";
import sec54 from "./images design/section5 img4.png";
import tw from "./images design/Twitter.png";
import you from "./images design/Youtube.png";

const Design = () => {
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
				<div className='body-d'>
					<div className='header-d'>
						<div className='container-d'>
							<div className='header-inner-d'>
								<a href='#'>
									<img src={log} className='logo-d' />
								</a>
								<ul className='header_ul-d'>
									<a href='#home'>
										<li className='header_li-d'>Home</li>
									</a>
									<a href='#Service'>
										<li className='header_li-d'>Service</li>
									</a>
									<a href='#Portfolio'>
										<li className='header_li-d'>Portfolio</li>
									</a>
									<a href='#blog'>
										<li className='header_li-d'>Blog</li>
									</a>
									<a href='#Contact Us'>
										<li className='header_li-d'>Contact Us</li>
									</a>
								</ul>
								<button className='header_btn-d'>Contact us</button>
								<div className='burger-d'>
									<span></span>
									<span></span>
									<span></span>
								</div>
							</div>
						</div>
					</div>
					<div className='main-d'>
						<section className='hero-box-d' id='home'>
							<div className='container-d'>
								<div className='hero-d'>
									<div className='hero-card-d'>
										<h1 className='hero_title-d'>Smart Web Design Agency</h1>
										<p className='hero_text-d'>
											We will provide best web design and business devlopment
											service clients expectation and satisfaction guarantee.
										</p>
										<button className='hero_btn-d'>Free consultation</button>
									</div>
									<img src={sec1i} className='hero_img-d' />
								</div>
							</div>
						</section>
						<section className='hero-box2-d' id='Service'>
							<div className='container-d'>
								<h2 className='hero2_title-d'>
									We Provide the Best Web services
								</h2>
								<div className='hero2-d'>
									<div className='hero2-card-d'>
										<img src={ic1} className='hero2_icon-d' />
										<h2 className='hero2_card-title-d'>5200+</h2>
										<p className='hero2_card-text-d'>Projects</p>
									</div>
									<div className='hero2-card-d'>
										<img src={ic2} className='hero2_icon-d' />
										<h2 className='hero2_card-title-d'>500+</h2>
										<p className='hero2_card-text-d'>Active clients</p>
									</div>
									<div className='hero2-card-d'>
										<img src={ic3} className='hero2_icon-d' />
										<h2 className='hero2_card-title-d'>4500+</h2>
										<p className='hero2_card-text-d'>Happy clients</p>
									</div>
								</div>
							</div>
						</section>
						<section className='hero-box2-d' id='Service'>
							<div className='container-d'>
								<h2 className='hero2_title-d'>What Service We`re Offering</h2>
								<div className='hero2-d'>
									<div className='hero3-card-d'>
										<img src={ic4} className='hero3_icon-d' />
										<h2 className='hero3_card-title-d'>Website design</h2>
										<p className='hero3_card-text-d'>
											Need something changed or is there something not quite
											working.
										</p>
									</div>
									<div className='hero3-card-d'>
										<img src={ic5} className='hero4_icon-d' />
										<h2 className='hero3_card-title-d'>Web development</h2>
										<p className='hero3_card-text-d'>
											Need something changed or is there something not quite
											working.
										</p>
									</div>
									<div className='hero3-card-d'>
										<img src={ic6} className='hero3_icon-d' />
										<h2 className='hero3_card-title-d'>Web application</h2>
										<p className='hero3_card-text-d'>
											Need something changed or is there something not quite
											working.
										</p>
									</div>
								</div>
							</div>
						</section>
						<section className='hero-box4-d' id='Portfolio'>
							<div className='container-d'>
								<h2 className='hero2_title-d'>Our Creative Latest Projects</h2>
								<div className='hero4-d'>
									<img src={sec21} className='hero4_img-d' />
									<img src={sec22} className='hero4_img-d' />
									<img src={sec23} className='hero4_img-d' />
									<img src={sec24} className='hero4_img-d' />
									<img src={sec25} className='hero4_img-d' />
									<img src={sec26} className='hero4_img-d' />
								</div>
								<button className='hero4_btn-d'>VIEW ALL PROJECTS</button>
							</div>
						</section>
						<section className='hero-box5-d' id='blog'>
							<div className='container-d'>
								<h2 className='hero2_title-d'>Meet Our Team</h2>
								<div className='hero5-d'>
									<div className='hero5-card-d'>
										<img src={sec51} className='hero5_img-d' />
										<div className='d-d'>
											<h3 className='hero5_card-title-d'>Amanda Linda </h3>
											<img src={sec5i} className='hero5_icon-d' />
										</div>
									</div>
									<div className='hero5-card-d'>
										<img src={sec52} className='hero5_img-d' />
										<div className='d-d'>
											<h3 className='hero5_card-title-d'>Alex Smith</h3>
											<img src={sec5i} className='hero5_icon-d' />
										</div>
									</div>
									<div className='hero5-card-d'>
										<img src={sec53} className='hero5_img-d' />
										<div className='d-d'>
											<h3 className='hero5_card-title-d'>Anthony Fauci</h3>
											<img src={sec5i} className='hero5_icon-d' />
										</div>
									</div>
									<div className='hero5-card-d'>
										<img src={sec54} className='hero5_img-d' />
										<div className='d-d'>
											<h3 className='hero5_card-title-d'>Khalid Abbed</h3>
											<img src={sec5i} className='hero5_icon-d' />
										</div>
									</div>
								</div>
							</div>
						</section>
						<section className='hero-box6-d' id='blog'>
							<div className='container-d'>
								<h2 className='hero2_title-d'>Testimonials</h2>
								<div className='hero6-d'>
									<div className='hero6_card-d'>
										<img src={d1} className='hero6_img1-d' />
										<img src={d2} className='hero6_img2-d' />
									</div>
									<div className='hero6_card2'>
										<img src={d3} className='hero6_img1-d' />
										<img src={d4} className='hero6_img-d' />
									</div>
									<div className='hero6_card'>
										<img src={d5} className='hero6_img1-d' />
										<img src={d6} className='hero6_img3-d' />
									</div>
								</div>
							</div>
						</section>
						<section className='section7-d' id='Contact Us'>
							<div className='container-d'>
								<h2 className='hero2_title-d'>Contact Us</h2>
								<div className='sec7box-d'>
									<div className='sec7card-d'>
										<label>FULL NAME</label>
										<br />
										<br />
										<input
											className='input-1-d'
											type='text'
											id='fname'
											name='Enter your full name'
											placeholder='Enter your full name'
										/>
									</div>
									<div className='sec7card-d'>
										<label>EMAIL ADDRESS</label>
										<br />
										<br />
										<input
											className='input-1-d'
											type='text'
											id='fname'
											name='Enter your full name'
											placeholder='Enter  your mail'
										/>
									</div>
								</div>

								<div className='sec7box-d'>
									<div className='sec7card-d'>
										<label>DEADLINE</label>
										<br />
										<br />
										<input
											className='input-1-d'
											type='text'
											id='fname'
											name='Enter your full name'
											placeholder='Projects deadline'
										/>
									</div>
									<div className='sec7card-d'>
										<label>BUDGET</label>
										<br />
										<br />
										<input
											className='input-1-d'
											type='text'
											id='fname'
											name='Enter your full name'
											placeholder='Enter your budget'
										/>
									</div>
								</div>

								<div className='sec7box-d'>
									<div className='sec7card-d'>
										<label className='label2-d'>WRITE US</label>
										<br />
										<br />
										<input
											className='input-2-d'
											type='text'
											id='fname'
											name='Enter your full name'
											placeholder='Enter message here...'
										/>
									</div>
								</div>
								<div className='btnd-d'>
									<button className='hero_btn2-d'>SUBMIT PROJECT</button>
								</div>
							</div>
						</section>
					</div>

					<div className='footer-d'>
						<div className='container-d'>
							<div className='footer-inner-d'>
								<div className='footer-card-d'>
									<img src={log} className='-d' />
									<div className='icond-d'>
										<img src={fes} className='f-icon-d' />
										<img src={ins} className='f-icon-d' />
										<img src={tw} className='f-icon-d' />
										<img src={you} className='f-icon-d' />
									</div>
								</div>
								<ul className='ul-d'>
									<h3 className='footer-title-d'>Category</h3>
									<a href='#'>
										<li className='li-d'>Home</li>
									</a>
									<a href='#'>
										<li className='li-d'>About</li>
									</a>
									<a href='#'>
										<li className='li-d'>Services</li>
									</a>
									<a href='#'>
										<li className='li-d'>Reviews</li>
									</a>
									<a href='#'>
										<li className='li-d'>Article</li>
									</a>
								</ul>
								<ul className='ul-d'>
									<h3 className='footer-title-d'>About</h3>
									<a href='#'>
										<li className='li-d'>Partners</li>
									</a>
									<a href='#'>
										<li className='li-d'>Careers</li>
									</a>
									<a href='#'>
										<li className='li-d'>Press</li>
									</a>
									<a href='#'>
										<li className='li-d'>Community</li>
									</a>
									<a href='#'>
										<li className='li-d'>Support</li>
									</a>
								</ul>
							</div>
						</div>
					</div>
				</div>
			)}
		</React.Fragment>
	);
};

export default Design;
