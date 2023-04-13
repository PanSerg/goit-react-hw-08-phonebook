import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchContacts } from "redux/operations";


export default function ContactsPage() {
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);
    return (
        <div></div>
    );
}