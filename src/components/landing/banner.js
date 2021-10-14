import React from 'react'
import "./landing.css"

const Banner = () => {
	return (
		<div className="banner">
			<div className="banner-content">
				<div className="banner-content-left">
					<h3 className="banner-left-h3">
						Welcome to our IkodeAfrika
					</h3>
					<div className="banner-left-p">
						Lorem Ipsum is simply dummy text of the printing and typesetting industry.
						Lorem Ipsum is simply dummy text of the printing and typesetting industry.
						Lorem Ipsum is simply dummy text of the printing and typesetting industry.
					</div>
					<div className="banner-left-input-group">
						<input 
							placeholder="Join our mail list"
							type="text"
							required
							/>
						<button>
							Subscribe
						</button>
					</div>
				</div>
				<div className="banner-content-right">

				</div>
			</div>
		</div>
	)
}

export default Banner
