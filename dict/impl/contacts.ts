import * as t from '../api/contacts/types'
import { Api } from '../models'

async function createContact(request: Api.BODYDATA | undefined): Promise<t.CreateContactResponse> {
	throw 'Unimplemented'
}

async function deleteContact(contactId: string): Promise<t.DeleteContactResponse> {
	throw 'Unimplemented'
}

async function geTContact(): Promise<t.GeTContactResponse> {
	throw 'Unimplemented'
}

async function updateContact(contactId: string, request: Api.BODYDATA | undefined): Promise<t.UpdateContactResponse> {
	throw 'Unimplemented'
}


const api: t.ContactsApi = {
	createContact,
	deleteContact,
	geTContact,
	updateContact,
}

export default api
