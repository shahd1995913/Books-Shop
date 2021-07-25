'use strict';
let Ourform =document.getElementById('form1')
let OurTable =document.getElementById('table1')
let Total =document.getElementById('Total1')
let ArrayOfHeader=['Book Name','Book Pages','Price'];
let ArrayOfInfo=[];

function renderHeader()
{

let HeaderRow =document.createElement('tr');
var th;
for (let y = 0; y < ArrayOfHeader.length; y++) {
  th=document.createElement('th');
  th.textContent=ArrayOfHeader[y];
  HeaderRow.appendChild(th);
    
}
OurTable.appendChild(HeaderRow);

}
renderHeader();

function GenrateArandomPage()
{
    return Math.floor(Math.random()*(500-1)+1);
}


function TotalPrice()
{
var varTotal =0;



for (let i = 0; i < ArrayOfInfo.length; i++) {
    let num =Number(ArrayOfInfo[i].price);

     varTotal += num;
}
return varTotal;
}


function Submition(event)
{

let bookName =event.target.bookName.value;
let bookPrice =event.target.price.value;

let NewItem = new ConstractureBook(bookName,bookPrice)

localStorage.setItem('Info' ,JSON.stringify(ArrayOfInfo))
NewItem.ProtoBook();
}

Ourform.addEventListener('submit',Submition)


function ConstractureBook(name ,price){

this.name=name;
this.price=price;
this.pages=GenrateArandomPage();
ArrayOfInfo.push(this);



}

ConstractureBook.prototype.ProtoBook =function(){

let DataRow =document.createElement('tr');

let NameItem =document.createElement('td');
NameItem.textContent=this.name;

let PageItem =document.createElement('td');
PageItem.textContent=this.pages;

let PriceItem =document.createElement('td');
PriceItem.textContent=this.price;


DataRow.appendChild(NameItem);
DataRow.appendChild(PageItem);
DataRow.appendChild(PriceItem);

OurTable.appendChild(DataRow);

let TotalOfTotal = TotalPrice()

Total.textContent=`Total : ${TotalOfTotal}`


}

function CheckStorage()
{

if(localStorage.getItem('Info'))
{
ArrayOfInfo=JSON.parse(localStorage.getItem('Info'))
RenderFinalTable();
}


}


function RenderFinalTable(){

for (let q = 0; q < ArrayOfInfo.length; q++) {
   
    let DataRow1 =document.createElement('tr');

let NameItem1 =document.createElement('td');
NameItem1.textContent=ArrayOfInfo[q].name;

let PageItem1 =document.createElement('td');
PageItem1.textContent=ArrayOfInfo[q].pages;

let PriceItem1 =document.createElement('td');
PriceItem1.textContent=ArrayOfInfo[q].price;


DataRow1.appendChild(NameItem1);
DataRow1.appendChild(PageItem1);
DataRow1.appendChild(PriceItem1);

OurTable.appendChild(DataRow1);


let TotalOfTotal = TotalPrice()

Total.textContent=`Total : ${TotalOfTotal}`



}


}

CheckStorage()