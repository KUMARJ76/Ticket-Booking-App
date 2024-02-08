import { LightningElement, track } from 'lwc';
import getPrice from '@salesforce/apex/TicketBooking.getPrice';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class TicketbookingComponents extends LightningElement {
    @track showPrice;
    error;
    handleSuccess(event) {
        const evt = new ShowToastEvent({
            title: "Ticket Booked",
            message: "Record Id"+ event.detail.id,
            variant: "success"
        })
        this.dispatchEvent(evt);
    }
    handleChange(event) {
        let targetId=event.target.value;
    
        getPrice({recordId:targetId}) // Imperative calls
     .then((data)=>{
        console.log(data);
            this.showPrice=data;
            console.log(this.showPrice);
            this.dispatchEvent(
                new ShowToastEvent({
                    title:"Price Updated Successfully",
                    message:"Concert Price Updated",
                    variant:"success"
                })
            )
        })
        .catch((error)=>{
            this.error=error;
            this.dispatchEvent(
                new ShowToastEvent({
                    title:"Unable to update the price",
                    message:error.message,
                    variant:"error"
                })
            )
        })

    }
}
   
