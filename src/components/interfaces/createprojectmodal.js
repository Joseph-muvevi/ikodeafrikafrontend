import React from 'react'
import Modal from "react-modal"

const CreateProjectModal = () => {
	return (
		<Modal isOpen={true} className="create-project-modal">
			<div className="create-project-modal-content">
				<div className="create-project-modal-header">
					<h3 className="create-project-modal-header-p">
						My Modal Topic
					</h3>
				</div>
				<hr/>
				<div className="create-project-modal-body">

				</div>
				<hr/>
				<div className="create-project-modal-footer">
					
				</div>
			</div>
		</Modal>
	)
}

export default CreateProjectModal
  