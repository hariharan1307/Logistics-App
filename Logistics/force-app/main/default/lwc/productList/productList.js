import { LightningElement,wire,api } from 'lwc';
import {refreshApex} from '@salesforce/apex';  
import getAllProducts from '@salesforce/apex/ProductsToOrder.ProductList';  
const COLS=[  
    {label:'Product Name',fieldName:'Name', type:'text'},  
    {label:'In Stock',fieldName:'In_Stock__c', type:'checkbox'},
    {label:'Price',fieldName:'Price__c', type:'currency'}  
  ];
export default class ProductList extends LightningElement 
{
    cols=COLS
    @wire(getAllProducts) ProdList
}