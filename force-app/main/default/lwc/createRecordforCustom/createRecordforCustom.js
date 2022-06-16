import { LightningElement } from 'lwc';
import { createRecord } from 'lightning/uiRecordApi';
import resume_OBJECT from '@salesforce/schema/Resume__c';
import { ShowToastEvent } from "lightning/platformShowToastEvent";

export default class CreateRecordforCustom extends LightningElement {
     
    firstName;
    lastName;
    email;
    // Change Handlers.
    FirstnameChangedHandler(event){
        this.firstName = event.target.value;
    }
    LastNameChangedHandler(event){
        this.lastName = event.target.value;
    }
    EmailChangedHandler(event){
        this.email = event.target.value;
    }
    // Insert record.
    createRecord(){
        // Creating mapping of fields of Account with values
        var fields = {'Name' : this.firstName, 'Last_Name__c' : this.lastName, 'Email__c' : this.email};
        // Record details to pass to create method with api name of Object.
        var objRecordInput = {'apiName' : 'Resume__c', fields};
        // LDS method to create record.

        createRecord(objRecordInput).then(response => {
            alert('Resume created with Id: ' +response.id);
        }).catch(error => {
            //alert('Error: ' +JSON.stringify(error));
        });
    }


   
}