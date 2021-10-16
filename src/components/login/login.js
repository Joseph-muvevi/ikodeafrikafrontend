import React from 'react'
import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./login.css"

const login = () => {
	return (
		<div className="login">
			<div className="login-left">
				<div className="login-left-content">
					<h3 className="login-h3">
						Login
					</h3>
					<p className="login-p">
						Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
					</p>
					<div className="font-awesome-icons">
						<FontAwesomeIcon 
							icon={faFacebook}
							size="2x"
							/>
						<FontAwesomeIcon 
							icon={faTwitter}
							size="2x"
							/>
						<FontAwesomeIcon 
							icon={faInstagram}
							size="2x"
							/>
						<FontAwesomeIcon 
							icon={faLinkedin}
							size="2x"
							/>
					</div>
				</div>
			</div>
			<div className="login-right">
				<form className="login-form">
					<div className="form-group-A">
						<label className="form-label">
							email
						</label>
						<input 
							className="form-small-input"
							type="email"
							placeholder="Enter your first name here..."
							required
						/>
					</div>
					<div className="form-group-A">
						<label className="form-label">
							password
						</label>
						<input 
							className="form-small-input"
							type="password"
							placeholder="Enter your first name here..."
							required
						/>
					</div>
				</form>
				<div className="form-bottom">
					<button type="submit">
						<FontAwesomeIcon
							icon={faPaperPlane}
							className="font-awesome-button"
							/>
						Submit
					</button>
					<p className="input-alt-text">
						Already a member?
					</p>
				</div>
			</div>
		</div>
	)
}

export default login
