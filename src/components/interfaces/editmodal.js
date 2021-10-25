import { faClone, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, {useState} from 'react'
import "./interfaces.css"

const EditModal = ({editModal}) => {
	// this will receive linto props


	return (
		<div className="edit-modal">
			<div className="edit-modal-content">
				<div className="edit-modal-rows">
					<FontAwesomeIcon
						icon={faEdit}
						className="edit-modal-icons"
						/>
					<p className="edit-modal-text">
						edit
					</p>
				</div>
				<div className="edit-modal-rows">
					<FontAwesomeIcon
						icon={faClone}
						className="edit-modal-icons"
						/>
					<p className="edit-modal-text">
						duplicated
						{/* this will either be onclick item */}
					</p>
				</div>
				<hr/>
				<div className="edit-modal-rows-danger">
					<FontAwesomeIcon
						icon={faTrash}
						className="edit-modal-icons-danger"
						/>
					<p className="edit-modal-text-danger">
						delete
						{/* this will either be onclick item */}
					</p>
				</div>
			</div>
		</div>
	)
}

export default EditModal
