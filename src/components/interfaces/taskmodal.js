import React, {useState} from 'react'
import Modal from "react-modal"

const TaskModal = () => {

	const [openModal, setOpenModal] = useState(true)


	return (
		<Modal isOpen={openModal}>
			<button onClick={() => setOpenModal(false)}>
				close
			</button>
		</Modal>
	)
}

export default TaskModal
