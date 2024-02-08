import { LightningElement,wire,track } from 'lwc';
import getConcert from '@salesforce/apex/TicketBooking.getConcert';
import {NavigationMixin} from 'lightning/navigation';

export default class ConcertComponents extends NavigationMixin(LightningElement) {
    @track concertList
    @wire(getConcert) wireConcert({data,error})
    {
         if(data){
            this.concertList=data;
            console.log(this.concertList);

         }else if(error){
           console.log(error);
         }
    }

    @track columns=[{label:'Name',fieldName:'Name'},
              {label:'Price',fieldName:'Price__c'},
               {label:'Date_of_Concert',fieldName:'Date_of_Concert__c'}]
    handleNavigation(){
        let cmpDef={
            componentDef:"c:ticketBooking"
        };

    }
}