import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "redux/operations";
import { selectContacts, selectError, selectIsLoading } from "redux/selectors";
import { Filter } from 'components';
import { ContactsList } from 'components';
import PropTypes from 'prop-types';
import { ContactForm } from 'components';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

export const Contacts = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(selectContacts);
    const isLoading = useSelector(selectIsLoading);
    const error = useSelector(selectError);
    // console.log('contacts', contacts);
    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);

    return (
        <Box
         sx={{
           display: { xs: 'flex' },
           alignItems: 'center',
           flexDirection: 'column',
          }}
         >
         <Divider sx={{ width: 1, pt: 2, pb: 1 }}>
          <Typography variant="h5" sx={{ fontWeight: 700 }}>
            Phonebook
          </Typography>
         </Divider>

          <ContactForm />

          <Divider sx={{ width: 1, pt: 2, pb: 1 }}>
            <Typography variant="h5" sx={{ fontWeight: 700 }}>
              Contacts
            </Typography>
          </Divider>
          {contacts.length ? (
            <>
              <Filter />
              <ContactsList />
            </>
          ) : (
            <p>No any contacts in phonebook</p>
          )}

          {isLoading && !error && <h2>Loading...</h2>}

          <Divider sx={{ width: 1, pt: 2, pb: 1 }} />
        </Box>
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