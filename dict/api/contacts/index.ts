/* eslint-disable */
// tslint:disable
/**
 * contact_information
 * 
 *
 * OpenAPI spec version: 2.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator+.
 * https://github.com/karlvr/openapi-generator-plus
 * Do not edit the class manually.
 */

import { Express } from 'express'
import passport from 'passport'
import * as t from './types'
import * as v from '../../validation'
import { Api } from '../../models'

export default function(app: Express, impl: t.ContactsApi) {
	app.post(
		'/create_contact',
		function (req, res) {
			try {
				function __body() {
					const __contentType = req.get('Content-Type')
					const __mimeType = __contentType ? __contentType.replace(/;.*/, '') : undefined

					if (__mimeType === 'application/json') {
						return v.modelApiBODYDATAFromJson('body', req.body)
					}
					console.error(`Invalid request content type: ${__contentType}`)
					throw new Error(`Invalid request content type: ${__contentType}`)
				}

				impl.createContact(__body()).then(function (response) {
					if (response.status === 201) {
						let body: any
						try {
							body = v.modelApiApiResponseToJson('response', response.body)
						} catch (error) {
							console.error('Invalid response body in contacts.createContact', error)
							res.status(500)
							res.send()
							return
						}

						res.status(201)
						res.send(body)
						return
					}
					if (response.status === 400) {
						let body: any
						try {
							body = v.modelApiApiResponseToJson('response', response.body)
						} catch (error) {
							console.error('Invalid response body in contacts.createContact', error)
							res.status(500)
							res.send()
							return
						}

						res.status(400)
						res.send(body)
						return
					}

					console.log('Unsupported response in contacts.createContact', response)
					res.status(500)
					res.send()
				}).catch(function (error) {
					console.error('Unexpected error in contacts.createContact', error.stack || error)
					res.status(500)
					res.send()
				})
			} catch (error) {
				/* Catch validation errors */
				res.status(400)
				res.send(error)
			}
		}
	)

	app.delete(
		'/delete_Question/:contact_id',
		function (req, res) {
			try {
				impl.deleteContact(v.parseString('params.contact_id', req.params['contact_id'])).then(function (response) {
					if (response.status === 201) {
						let body: any
						try {
							body = v.modelApiApiResponseToJson('response', response.body)
						} catch (error) {
							console.error('Invalid response body in contacts.deleteContact', error)
							res.status(500)
							res.send()
							return
						}

						res.status(201)
						res.send(body)
						return
					}
					if (response.status === 400) {
						let body: any
						try {
							body = v.modelApiApiResponseToJson('response', response.body)
						} catch (error) {
							console.error('Invalid response body in contacts.deleteContact', error)
							res.status(500)
							res.send()
							return
						}

						res.status(400)
						res.send(body)
						return
					}

					console.log('Unsupported response in contacts.deleteContact', response)
					res.status(500)
					res.send()
				}).catch(function (error) {
					console.error('Unexpected error in contacts.deleteContact', error.stack || error)
					res.status(500)
					res.send()
				})
			} catch (error) {
				/* Catch validation errors */
				res.status(400)
				res.send(error)
			}
		}
	)

	app.get(
		'/get_Question',
		function (req, res) {
			try {
				impl.geTContact().then(function (response) {
					if (response.status === 201) {
						let body: any
						try {
							body = v.arrayToJson(v.modelApiBODYDATAToJson)('response', response.body)
						} catch (error) {
							console.error('Invalid response body in contacts.geTContact', error)
							res.status(500)
							res.send()
							return
						}

						res.status(201)
						res.send(body)
						return
					}
					if (response.status === 400) {
						let body: any
						try {
							body = v.modelApiApiResponseToJson('response', response.body)
						} catch (error) {
							console.error('Invalid response body in contacts.geTContact', error)
							res.status(500)
							res.send()
							return
						}

						res.status(400)
						res.send(body)
						return
					}

					console.log('Unsupported response in contacts.geTContact', response)
					res.status(500)
					res.send()
				}).catch(function (error) {
					console.error('Unexpected error in contacts.geTContact', error.stack || error)
					res.status(500)
					res.send()
				})
			} catch (error) {
				/* Catch validation errors */
				res.status(400)
				res.send(error)
			}
		}
	)

	app.put(
		'/Update_Question/:contact_id',
		function (req, res) {
			try {
				function __body() {
					const __contentType = req.get('Content-Type')
					const __mimeType = __contentType ? __contentType.replace(/;.*/, '') : undefined

					if (__mimeType === 'application/json') {
						return v.modelApiBODYDATAFromJson('body', req.body)
					}
					console.error(`Invalid request content type: ${__contentType}`)
					throw new Error(`Invalid request content type: ${__contentType}`)
				}

				impl.updateContact(v.parseString('params.contact_id', req.params['contact_id']), __body()).then(function (response) {
					if (response.status === 201) {
						let body: any
						try {
							body = v.modelApiApiResponseToJson('response', response.body)
						} catch (error) {
							console.error('Invalid response body in contacts.updateContact', error)
							res.status(500)
							res.send()
							return
						}

						res.status(201)
						res.send(body)
						return
					}
					if (response.status === 400) {
						let body: any
						try {
							body = v.modelApiApiResponseToJson('response', response.body)
						} catch (error) {
							console.error('Invalid response body in contacts.updateContact', error)
							res.status(500)
							res.send()
							return
						}

						res.status(400)
						res.send(body)
						return
					}

					console.log('Unsupported response in contacts.updateContact', response)
					res.status(500)
					res.send()
				}).catch(function (error) {
					console.error('Unexpected error in contacts.updateContact', error.stack || error)
					res.status(500)
					res.send()
				})
			} catch (error) {
				/* Catch validation errors */
				res.status(400)
				res.send(error)
			}
		}
	)

}
