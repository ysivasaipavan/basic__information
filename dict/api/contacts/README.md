# Contacts

## Operations

### createContact

```http
POST /create_contact
```

Create_contact

### deleteContact

```http
DELETE /delete_Question/{contact_id}
```

delete_contact

### geTContact

```http
GET /get_Question
```

Get_contact

### updateContact

```http
PUT /Update_Question/{contact_id}
```

Update_contact

## Implementation

This is an example of the API implementation to use to update the actual API implementation
when the API structure has changed.

```typescript
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
```
