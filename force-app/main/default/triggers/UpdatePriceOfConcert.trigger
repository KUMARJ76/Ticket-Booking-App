trigger UpdatePriceOfConcert on Concert__c (before insert,before update) {

    for(Concert__c con:trigger.new){
        if((con.Number_of_Tickets_Remaining__c)<(0.1*con.Number_of_Tickets_Available__c)){
            if(con.Price__c !=null){
                con.Price__c=con.Price__c*1.1;
                System.debug('Price ='+con.Price__c);
            }
           
        }
    }

}