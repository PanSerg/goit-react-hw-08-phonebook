import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "redux/operations";
import { selectContacts, selectError, selectIsLoading } from "redux/selectors";
import { ContactForm } from "components/ContactForm/contactForm";
import { Filter } from '../components/Filter/filter';
import { ContactsList } from '../components/ContactsList/contactsList';
import PropTypes from 'prop-types';

export const Contacts = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(selectContacts);
    const isLoading = useSelector(selectIsLoading);
    const error = useSelector(selectError);

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);

    return (
        <div>
            <h2>Ponebook</h2>
            <ContactForm>
                <h2>Contacts</h2>
                {contacts.length ? (
                    <>
                       <Filter />
                       <ContactsList />
                    </>
                ) : (
                        <p>No any contacts in phonebook</p>
                )}

                {isLoading && !error && <h2>Loading...</h2>}
            </ContactForm>
        </div>
    );
};

Contacts.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
        })
    ),
};

// export default Contacts;