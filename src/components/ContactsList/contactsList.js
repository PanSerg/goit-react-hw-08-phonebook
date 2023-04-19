import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from "redux/operations";
import { ContactStyle } from "./contacts.Styled";
import { ButtonsStyle } from "components/buttonsStyle.styled";
import { selectFilterValue, selectContacts } from 'redux/selectors';
import PropTypes from 'prop-types';

export const ContactsList = () => {
    const contacts = useSelector(selectContacts);
    const filter = useSelector(selectFilterValue);
    const dispatch = useDispatch();

    const filterRenderValue = () => {
        const normalizedFilter = filter.toLocaleLowerCase();
        return contacts.filter(contact =>
            contact.name.toLocaleLowerCase().includes(normalizedFilter)
        );
    };

    const filterRender = filterRenderValue();

    return (
        <ContactStyle>
            <h2>Contacts</h2>
            <ul>
                {filterRender.map(({name, number, id}) => (
                    <li key={id}>
                        <p>Name:</p>
                        <span>{name}</span>
                        <p>Number:</p>
                        <span>{number}</span>
                        <ButtonsStyle
                            onClick={() => dispatch(deleteContact(id))
                            }
                        >Delete</ButtonsStyle>
                    </li>
                ))}
            </ul>
        </ContactStyle>
    );
};

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
    ),
    filter: PropTypes.string,
};