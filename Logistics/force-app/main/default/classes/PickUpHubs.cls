public with sharing class PickUpHubs 
{
    @AuraEnabled(cacheable=true)
    public static List<Pickup_Hub__c> HubList()
    {
        return [select Id,Name,	City__c,State__c,Contact__c from Pickup_Hub__c limit 150];
    }     
}
