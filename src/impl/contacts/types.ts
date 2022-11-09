import {DeleteContactResponse,GeTContactResponse, UpdateContactResponse, ContactsApi, CreateContactResponse} from "../../../dict/api/contacts/types";
import { Api } from "../../../dict/models";
import {collections} from '../../../src/admin/types'



export class ContactsApiImpl implements ContactsApi {
    geTContact(): Promise<GeTContactResponse>  {
        return new Promise<GeTContactResponse>((resolve,reject)=>{
            collections.users!.find({}).toArray(function (err: any,result:any){
                if(err) {
                    const response=<GeTContactResponse>{
                        status: 400,
                       body:{message: `something_went_wrong`},
                    }
                    resolve(response)                   
                }
                const response=<GeTContactResponse>{
                    status:201,
                    body: result
                }
                resolve(response)    
            })  
        })   
    }
    deleteContact(contact_id:string):Promise<DeleteContactResponse>{
    return new Promise<DeleteContactResponse>((resolve,reject)=>{
        collections.users!.deleteOne(
            {contact_id:contact_id},
            function(err: any,result: any){
                if(err){
                    const response=<DeleteContactResponse>{
                        status:400,
                        body:{message:`someting_went_wrong`}
                    }
                    resolve(response)
                }
                const response=<DeleteContactResponse>{
                   status:201,
                    body:{
                        message:`delete_contact_Sucessfully`
                    }
                }
                resolve(response)
            }
        )
        
    })
 }
 updateContact(contact_id: string, request: Api.BODYDATA | undefined) : Promise<UpdateContactResponse>
 {
    return new Promise<UpdateContactResponse>((resolve,reject)=>{
        collections.users!.updateOne(
            {contact_id:contact_id},
            {$set:request},
            function(err:any,result: any){
                if(err){
                    const response=<UpdateContactResponse>{
                        status: 400,
                        body:{message:`Somting_Went_Wrong`}
                    }
                    resolve(response)
                }
                const response=<UpdateContactResponse>{
                    status:201,
                    body:{message:`Update_contact_Sucessfully`}
                }
                resolve(response)
               
            }    
        )

    })
 }
 createContact(request: Api.BODYDATA | undefined): Promise<CreateContactResponse>
 {
    return new Promise<UpdateContactResponse>((resolve,reject)=>{
        collections.users!.findOne(
            {contact_number:request?.contact_number},
            function(err:any,result:any){
                if(result){
                    const response=<UpdateContactResponse>{
                        status:400,
                        body:{message:`User Already Created`}
                    }
                    resolve(response)
                }
                else{
                    collections.users!.insertOne(
                        {contact_number:request?.contact_number,alternate_number:request?.alternate_number,email:request?.email,mailing_address:request?.mailing_address,city:request?.city,zip_code:request?.zip_code,state:request?.state},
                        function(err:any,result:any){
                          if(err){
                            const response=<UpdateContactResponse>{
                                status:400,
                                body:{message:`Someting Went Wrong`}
                            }
                            resolve(response)
                          }
                          else{
                            const response=<UpdateContactResponse>{
                                status:201,
                                body:{message:`Create Question Sucessfuly`}
                            }
                            resolve(response)
                          }
                            
                        }

                    )
                }
            }
        )
    })
 }
}