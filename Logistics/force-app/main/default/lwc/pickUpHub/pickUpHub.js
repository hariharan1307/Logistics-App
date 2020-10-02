import { LightningElement ,wire} from 'lwc';
import getAllHubs from '@salesforce/apex/PickUpHubs.HubList';  
const COLS=[  
    {label:'Hub Name',fieldName:'Name', type:'text'},  
    {label:'City',fieldName:'City__c', type:'text'},
    {label:'State',fieldName:'State__c', type:'text'},
    {label:'Contact',fieldName:'Contact__c', type:'phone'} 
  ];
export default class PickUpHub extends LightningElement 
{
   
    cols=COLS
    @wire(getAllHubs) HubList
}