const getState = ({ getStore, setStore }) => {
    return {
        store: {
            contacts: []
        },
        actions: {
            loadContacts: async () => {
                try {
                    const response = await fetch("https://playground.4geeks.com/contact/agendas/jc44/contacts", {
                        method: "GET",
                        headers: {
                            "Accept": "application/json"
                        }
                    });
                    if (!response.ok) {
                        throw new Error("Failed to load contacts");
                    }
                    const data = await response.json();
                    setStore({ contacts: data.contacts });
                } catch (error) {
                    console.error("Error loading contacts:", error);
                }
            },
            addContact: async (contact) => {
                try {
                    const response = await fetch("https://playground.4geeks.com/contact/agendas/jc44/contacts", {
                        method: "POST",
                        headers: {
                            "Accept": "application/json",
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(contact)
                    });
                    if (!response.ok) {
                        throw new Error("Failed to add contact");
                    }
                    const data = await response.json();
                    setStore({ contacts: [...getStore().contacts, data] });
                } catch (error) {
                    console.error("Error adding contact:", error);
                }
            },
            updateContact: async (id, updatedContact) => {
                try {
                    const response = await fetch(`https://playground.4geeks.com/contact/agendas/jc44/contacts/${id}`, {
                        method: "PUT",
                        headers: {
                            "Accept": "application/json",
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(updatedContact)
                    });
                    if (!response.ok) {
                        throw new Error("Failed to update contact");
                    }
                    const updatedContacts = getStore().contacts.map((contact) =>
                        contact.id === id ? { ...contact, ...updatedContact } : contact
                    );
                    setStore({ contacts: updatedContacts });
                } catch (error) {
                    console.error("Error updating contact:", error);
                }
            },
            deleteContact: async (id) => {
                try {
                    const response = await fetch(`https://playground.4geeks.com/contact/agendas/jc44/contacts/${id}`, {
                        method: "DELETE"
                    });
                    if (!response.ok) {
                        throw new Error("Failed to delete contact");
                    }
                    const updatedContacts = getStore().contacts.filter((contact) => contact.id !== id);
                    setStore({ contacts: updatedContacts });
                } catch (error) {
                    console.error("Error deleting contact:", error);
                }
            }
        }
    };
};

export default getState;
