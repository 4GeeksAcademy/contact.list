import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import ConfirmationModal from "../component/ConfirmationModal";
import defaultAvatar from "/workspaces/contact.list/src/img/m101.jpg"; 

const Contact = () => {
    const { store, actions } = useContext(Context);
    const [showModal, setShowModal] = useState(false);
    const [contactToDelete, setContactToDelete] = useState(null);

    useEffect(() => {
        actions.loadContacts(); 
    }, [actions]);

    const handleDelete = (id) => {
        setContactToDelete(id);
        setShowModal(true); 
    };

    const confirmDelete = () => {
        if (contactToDelete !== null) {
            actions.deleteContact(contactToDelete);
            setContactToDelete(null);
            setShowModal(false);
        }
    };

    const closeModal = () => {
        setContactToDelete(null);
        setShowModal(false);
    };

    return (
        <div className="container">
            <h1>Contact List</h1>
            {store.contacts.map((contact) => (
                <div key={contact.id} style={{border:"1px solid lightgrey"}} className="row mb-3 align-items-center">
                    <div className="col-auto">
                        <img
                            src={defaultAvatar} 
                            alt="Profile"
                            className="rounded-circle"
                            style={{ width: "100px", height: "100px" }}
                        />
                    </div>
                    <div className="col">
                        <div>
                            <h3>{contact.name}</h3>
                        </div>
                        <div> <i class="fa fa-envelope"></i> {contact.email}</div>
                        <div> <i class='fas fa-phone'></i> {contact.phone}</div>
                        <div> <i class='fas fa-map-marker-alt'></i> {contact.address}</div>
                    </div>
                    <div className="col-auto">
                        <Link to={`/edit-contact/${contact.id}`} className="btn btn-sm btn-primary mx-1">
                        <i class='fas fa-user-edit'></i>
                        </Link>
                        <button className="btn btn-sm btn-danger mx-1" onClick={() => handleDelete(contact.id)}>
                        <i class='fas fa-trash-alt'></i>
                        </button>
                    </div>
                </div>
            ))}

            {/* Confirmation Modal */}
            <ConfirmationModal
                show={showModal}
                onHide={closeModal}
                onConfirm={confirmDelete}
                title="Delete Confirmation"
                body="Are you sure you want to delete this contact?"
            />
        </div>
    );
};

export default Contact;
