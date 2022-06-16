import { api, LightningElement, wire} from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { getRecord, getFieldValue,updateRecord } from 'lightning/uiRecordApi';
import { refreshApex } from '@salesforce/apex';
//import getresumelist from '@salesforce/apex/updaterecord.getSingleContact';
import Resume_Object from '@salesforce/schema/Resume__c';
import Address from '@salesforce/schema/Resume__c.Address__c';
import LastName from '@salesforce/schema/Resume__c.Last_Name__c';
import ID_Field from '@salesforce/schema/Resume__c.Id';
import Country from '@salesforce/schema/Resume__c.Country__c';
import city from '@salesforce/schema/Resume__c.City__c';
import PostalCode from '@salesforce/schema/Resume__c.PostalCode__c';


const fields = [OPPORTUNITY_NAME_FIELD, ACCOUNT_NAME_FIELD, ACCOUNT_ID_FIELD];
export default class UpdatebasicDetails extends LightningElement {


    @api recordId;
    @api ContactObjectApiName='Resume__c';
    ContactFieldList = [Address,PostalCode,city,Country,ID_Field,LastName];
 
    contactHandleUpdate(event){
        const evt = new ShowToastEvent({
            title:'Record Updated',
            message:'Contact record:' + event.detail.fields.LastName.value + 'is successfully updated',
            
            variant:'success',
          })
          this.dispatchEvent(evt);
    }
    // @wire(getRecord, { recordId: '$recordId', fields })
    // opportunity;
   
    // updateResume()
    // {
    //     let rename = getFieldValue(this.Resume.data , Address);
    //     let  recity = getFieldValue(this.Resume.data , city);
    //     let  recountry = getFieldValue(this.Resume.data , Country);
    //     let  repostalCode = getFieldValue(this.Resume.data , PostalCode);
    //     let reId = getFieldValue(this.Resume.data , ID_Field);



    //      let fields = {
    //          Id : reId,
    //           name:rename,
    //           city:recity,
    //           country:recountry,
    //           postalcode:recountry
    //      }

    //      const recordInput = {fields};

    //      updateRecord(recordInput)
    //      .then(() =>{
    //         this.dispatchEvent(
    //             new ShowToastEvent({
    //                 title: 'Success!',
    //                 message: 'Account name updated successfully',
    //                 variant: 'success'
    //             })
    //         )
    //     })
    //     .catch(error =>{
    //         this.dispatchEvent(
    //             new ShowToastEvent({
    //                 title: 'Error!',
    //                 message: 'Something went wrong while updating account',
    //                 variant: 'error'
    //             })
    //         )
    //     })
    // }





    // handleChange(e) {
    //     if (e.target.name === "Address") {
        
    //       //this is name input textbox
    //       this.Address = e.target.value;
    //       console.log(this.Address);
    //     } else if (e.target.name === "country") {
        
    //       //this is industry input textbox
    //       this.country = e.target.value;
    //       console.log(this.country);
    //     } else if (e.target.name === "city") {
        
    //       //this is rating input textbox
    //       this.city = e.target.value;
    //       console.log(this.city);
    //     }
    //     // else if(e.target.name === "firstName")
    //     // {
    //     //     this.firstName = e.target.value;
    //     //     console.log(this.firstName);
    //     // }
    //   }



    //   handleClick() {
    //     //4. map the data to the fields
    //   const fields = {};
  
    //   fields[ID_Field.fieldApiName] = this.recordId;
    //   fields[Address.fieldApiName] = this.Address;
    //   fields[Country.fieldApiName] = this.Country;
    //   fields[city.fieldApiName] = this.city;
    // //   fields[FIRSTNAME.fieldApiName] = this.firstName;

          
    //       //5. Create a config object that had info about fields. 
    //       //Quick heads up here we are not providing Object API Name
    //   const recordInput = {
    //     fields: fields
    //   };
  
    //       //6. Invoke the method updateRecord()
    //   updateRecord(recordInput).then((record) => {
    //     console.log(record);
    //   });
    // }
    
    
    // resumerecord;
    // error;

    // @wire(getresumelist)
    // wiredContacts({ error, data }) {
    //     if (data) {
    //         this.resumerecord= data;
    //         this.error = undefined;
    //     } else if (error) {
    //         this.error = error;
    //         this.resumerecord = undefined;
    //     }
    // }
    
//     handleChange(event) {
//         // Display field-level errors and disable button if a name field is empty.
//        if (!event.target.value) {
//            event.target.reportValidity();
//            this.disabled = true;
//        }
//        else {
//            this.disabled = false;
//        }
//    }
    
//    updateContact() {
//     const allValid = [...this.template.querySelectorAll('lightning-input')]
//         .reduce((validSoFar, inputFields) => {
//             inputFields.reportValidity();
//             return validSoFar && inputFields.checkValidity();
//         }, true);

//     if (allValid) {
//         // Create the recordInput object
//         const fields = {};
//         fields[ID_Field.fieldApiName] = this.Name;
//         fields[Address.fieldApiName] = this.template.querySelector("[data-field='Address__c']").value;
//         fields[Country.fieldApiName] = this.template.querySelector("[data-field='Country__c']").value;
//         fields[city.fieldApiName] = this.template.querySelector("[data-field='city__c']").value;
//         fields[PostalCode.fieldApiName] = this.template.querySelector("[data-field='PostalCode__c']").value;



//         const recordInput = { fields };

//         updateRecord(recordInput)
//             .then(() => {
//                 this.dispatchEvent(
//                     new ShowToastEvent({
//                         title: 'Success',
//                         message: 'Contact updated',
//                         variant: 'success'
//                     })
//                 );
//                 // Display fresh data in the form
//                 return refreshApex(this.contact);
//             })
//             .catch(error => {
//                 this.dispatchEvent(
//                     new ShowToastEvent({
//                         title: 'Error creating record',
//                         message: error.body.message,
//                         variant: 'error'
//                     })
//                 );
//             });
//         }
//     else {
//         // The form is not valid
//         this.dispatchEvent(
//             new ShowToastEvent({
//                 title: 'Something is wrong',
//                 message: 'Check your input and try again.',
//                 variant: 'error'
//             })
//          );
//     }
// }
}