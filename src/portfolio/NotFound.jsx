import React, { useState, useEffect } from "react";
import "./style/style.css";
import "./style/style.scss";
import { useNavigate } from "react-router-dom";
import { BoxLoading } from "react-loadingg";

const NotFound = () => {
	let navigate = useNavigate();
	const heandleGo = () => {
		navigate("/");
	};

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
				<div className='body-found'>
					<div className='container'>
						<button onClick={heandleGo} className='found-btn'>
							Back
						</button>
						<div className='wrapper'>
							<div className='not-found' title='404'>
								404
							</div>
							<h1 className="found-title">Not Found</h1>
						</div>
					</div>
				</div>
			)}
		</React.Fragment>
	);
};

export default NotFound;
