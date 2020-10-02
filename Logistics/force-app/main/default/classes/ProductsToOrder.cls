public with sharing class ProductsToOrder
{
    @AuraEnabled(cacheable=true)
    public static List<Available_Products__c> ProductList()
    {
        return [select Id,Name,	In_Stock__c,Price__c from Available_Products__c limit 150];
    }    
}
