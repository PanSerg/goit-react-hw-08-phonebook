import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from "redux/operations";
import { ContactStyle } from "./contacts.styled";
import { ButtonsStyle } from "components/buttonsStyle.styled";
import PropTypes from 'prop-types';

export const Contacts = () => {
    const contacts = useSelector(state => state.contacts.items);
    const filter = useSelector(state => state.filter);
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

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
    ),
    filter: PropTypes.string,
};