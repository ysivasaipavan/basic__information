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
import contacts from './api/contacts'
import * as t from './types'

export default function(app: Express, impl: t.ApiImplementation) {
	contacts(app, impl.contacts)
}
