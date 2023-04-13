import { useEffect } from "react";
import { ContactForm } from "./ContactForm/contactForm";
import { Contacts } from "./Contacts/contacts";
import { Filter } from "./Filter/filter";
import { fetchContacts } from "redux/operations";
import { useDispatch, useSelector } from "react-redux";
import { getContacts, selectIsLoading, selectError } from "redux/selectors";

export function App() {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h2>Phonebook</h2>
      <ContactForm />
      <Filter />
      <Contacts
        value={contacts}
        type="text" />
        {isLoading && !error && <h2>Loading...</h2>}
    </div>
  );
};