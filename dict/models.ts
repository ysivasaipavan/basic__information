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

export namespace Api {
	/**
	 * <p>ResponseInStatusCode</p>
	 */
	export interface ApiResponse {
		/**
		 * @type {number}
		 * @memberof ApiResponse
		 */
		code?: number;
		type?: string;
		message?: string;
	}

	export interface BODYDATA {
		/**
		 * @type {number}
		 * @memberof BODYDATA
		 */
		contact_number?: number;
		/**
		 * @type {number}
		 * @memberof BODYDATA
		 */
		alternate_number?: number;
		email?: string;
		mailing_address?: string;
		city?: string;
		zip_code?: string;
		state?: string;
	}

}