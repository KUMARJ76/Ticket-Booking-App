public with sharing class TicketBooking {
    @AuraEnabled(cacheable=true)
    public static List<Concert__c> getConcert(){
        return [Select Id,Name,Date_of_Concert__c,Price__c from Concert__c where Date_of_Concert__c > Today ORDER BY Date_of_Concert__c ASC ];
       
}
@AuraEnabled(cacheable=true)
public static Decimal getPrice(Id recordId){
    System.debug('Inside the method');
   Decimal concerts=[select Id,Name,Date_of_Concert__c,Price__c from Concert__c where Id=:recordId].Price__c;
   return concerts;

}
}