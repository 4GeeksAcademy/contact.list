import React, { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

const EditContact = () => {
    const { id } = useParams(); 
    const navigate = useNavigate();
    const { store, actions } = useContext(Context);
    const [formData, setFormData] = useState({
        name: "", 
        email: "",
        phone: "",
        address: ""
    });

    useEffect(() => {
        if (id && store.contacts.length > 0) {
            const contact = store.contacts.find((c) => c.id === parseInt(id));
            if (contact) {
                setFormData({
                    name: contact.name, 
                    email: contact.email,
                    phone: contact.phone,
                    address: contact.address
                });
            }
        }
    }, [id, store.contacts]);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
       
        await actions.updateContact(parseInt(id), {
            ...formData,
            name: formData.full_name 
        });
        navigate("/contacts"); 
    };

    return (
        <div className="container">
            <h1>Edit Contact</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="full_name">Full Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="full_name"
                        name="full_name"
                        value={formData.full_name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email address</label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                        type="text"
                        className="form-control"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="address">Address</label>
                    <input
                        type="text"
                        className="form-control"
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit" className="container btn btn-primary mt-3">
                    Save
                </button>
            </form>
        </div>
    );
};

export default EditContact;
