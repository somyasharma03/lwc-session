// import { LightningElement } from 'lwc';
// import { createRecord } from 'lightning/uiRecordApi';
// import {ShowToastEvent} from 'lightning/platformShowToastEvent';
// import resume_OBJECT from '@salesforce/schema/Resume__c';
// import FirstNAME_FIELD from '@salesforce/schema/Resume__c.First_Name__c';
// import LastNAME_FIELD from '@salesforce/schema/Resume__c.Last_Name__c';
// import Email_FIELD from '@salesforce/schema/Resume__c.Email__c';



// export default class Createrecord extends LightningElement {

   

//     // this object have record information
//     //  accRecord = {
//     //     FirstName : FirstNAME_FIELD,
//     //     lastName : LastNAME_FIELD,
//     //     Email : Email_FIELD
     
//     // };

//     FirstName = '';
//     lastName = '';
//      Email = '';



//     handleFirstNameChange(event) {
//         this.FirstName = event.target.value;
//       //  window.console.log('Name ==> '+this.accRecord.Name);
//     }

//     handleLastNameChange(event) {
//         this.lastName = event.target.value;
//         //window.console.log('Phone ==> '+this.accRecord.Phone);
//       //  window.console.log('object ==> '+JSON.stringify(ACCOUNT_OBJECT));
//     }

//     handleEmailChange(event) {
//         this.Email = event.target.value;
//         //window.console.log('Type ==> '+this.accRecord.Type);
//     }

   


//     handleSave() {
//        var  fields = {

//         'First_Name__c'  : this.FirstName,
//       'Last_Name__c'  : this.lastName,
//          'Email__c': this.Email
//         };
       
//         // Creating record using uiRecordApi
//         var objectResume = { 'apiName': Resume__c, fields }
//         console.log('record '+ objectResume );
//         console.log('object'+ objectResume.apiName);

//         createRecord(objectResume)
//         .then(result => {
//             // Clear the user enter values
//             //this.accRecord = {};

//            // console.log('accrecord' + this.accRecord );


//             console.log('result ===> '+result);
//             // Show success messsage
//             this.dispatchEvent(new ShowToastEvent({
//                 title: 'Success!!',
//                 message: 'Account Created Successfully!!',
//                 variant: 'success'
//             }),);
//         })
//         .catch(error => {
//             this.error = JSON.stringify(error);
//         });
//     }
// }