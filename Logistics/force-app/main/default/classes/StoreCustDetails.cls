public with sharing class StoreCustDetails 
{
    @AuraEnabled
    public static void SaveObj(Customer__c custObj) 
    {
        try 
        {
           insert custObj; 
        } catch (Exception failedEx) 
        {
            throw new AuraHandledException(failedEx.getMessage());
        }


    }
}
