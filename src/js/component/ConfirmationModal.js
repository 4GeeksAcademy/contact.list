// ConfirmationModal.js

import React from "react";
import { Modal, Button } from 'react-bootstrap';


const ConfirmationModal = ({ show, onHide, onConfirm, title, body }) => {
	return (
		<Modal show={show} onHide={onHide}>
			<Modal.Header closeButton>
				<Modal.Title>{title}</Modal.Title>
			</Modal.Header>
			<Modal.Body>{body}</Modal.Body>
			<Modal.Footer>
				<Button variant="secondary" onClick={onHide}>
					Cancel
				</Button>
				<Button variant="danger" onClick={onConfirm}>
					Confirm Delete
				</Button>
			</Modal.Footer>
		</Modal>
	);
};

export default ConfirmationModal;
