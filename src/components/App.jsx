import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { fetchContacts } from "redux/operations";
import { useDispatch } from "react-redux";
import { Home } from '../pages/Home';
import { Login } from '../pages/Login';
import { Register } from '../pages/Register';
import { ContactsPage } from '../pages/ContactsPage';
import { Header } from "./Header/header";
import { useAuth } from "hooks";

export function App() {
  const dispatch = useDispatch();
  const { getIsRefreshing } = useAuth();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return getIsRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path="/" element={<Header />} >
        <Route index element={<Home/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/contacts" element={<ContactsPage/>} />
      </Route>
    </Routes> 
  );
};