import { ContactsApiImpl } from "./contacts/types";
import { ApiImplementation } from "../../dict/types";
import { ContactsApi } from "../../dict/api/contacts/types";


export class serviceApiimpl implements ApiImplementation {
    contacts: ContactsApiImpl=new ContactsApiImpl
}
