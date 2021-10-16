import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import "./register.css"

const register = () => {
	return (
		<div className="register">
			<div className="register-left">
				<div className="register-left-content">
					<h3 className="register-h3">
						Create account
					</h3>
					<p className="register-p">
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
			<div className="register-right">
				<form className="register-form">
					<div className="form-group-A">
						<label className="form-label">
							firstname
						</label>
						<input 
							className="form-small-input"
							type="text"
							placeholder="Enter your first name here..."
							required
						/>
					</div>
					<div className="form-group-B">
						<label className="form-label">
							lastname
						</label>
						<input 
							className="form-small-input"
							type="text"
							placeholder="Enter your first name here..."
							required
						/>
					</div>
					<div className="form-group-C">
						<label className="form-label">
							telephone
						</label>
						<input 
							className="form-small-input"
							type="text"
							placeholder="Enter your first name here..."
							required
						/>
					</div>
					<div className="form-group-D">
						<label className="form-label">
							age
						</label>
						<input 
							className="form-small-input"
							type="text"
							placeholder="Enter your first name here..."
							required
						/>
					</div>
					<div className="form-group-E">
						<label className="form-label">
							image
						</label>
						<input 
							className="form-small-input"
							type="text"
							placeholder="Enter your first name here..."
							required
						/>
					</div>
					<div className="form-group-F">
						<label className="form-label">
							city
						</label>
						<input 
							className="form-small-input"
							type="text"
							placeholder="Enter your first name here..."
							required
						/>
					</div>
					<div className="form-group-G">
						<label className="form-label">
							country
						</label>
						<input 
							className="form-small-input"
							type="text"
							placeholder="Enter your first name here..."
							required
						/>
					</div>
					<div className="form-group-H">
						<label className="form-label">
							email
						</label>
						<input 
							className="form-small-input"
							type="text"
							placeholder="Enter your first name here..."
							required
						/>
					</div>
					<div className="form-group-I">
						<label className="form-label">
							password
						</label>
						<input 
							className="form-small-input"
							type="text"
							placeholder="Enter your first name here..."
							required
						/>
					</div>
					<div className="form-group-J">
						<label className="form-label">
							Terms & condition 
						</label>
						<input 
							className="form-small-input"
							type="checkbox"
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

export default register
