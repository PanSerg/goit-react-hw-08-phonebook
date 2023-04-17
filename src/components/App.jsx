import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { ContactForm } from "./ContactForm/contactForm";
import { Contacts } from "./Contacts/contacts";
import { Filter } from "./Filter/filter";
import { fetchContacts } from "redux/operations";
import { useDispatch, useSelector } from "react-redux";
import { selectContacts, selectIsLoading, selectError } from "redux/selectors";
import { Home } from '../pages/Home';
import { Login } from '../pages/Login';
import { Register } from '../pages/Register';
import { ContactsPage } from '../pages/ContactsPage';
import { Header } from "./Header/header";

export function App() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  
  return (
    <div>
      <Routes>
        <Route exact path="/" component={<Header/>} />
        <Route exact index component={Home} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/contacts" component={ContactsPage} />
      </Routes>
        
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