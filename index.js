let myNameList = [];
let myAmountList = [];
const nameEl = document.getElementById("name-el");
const amountEl = document.getElementById("amount-el");
const saveEl = document.getElementById("save-el");
const dltEl = document.getElementById("dlt-el");
const listEl = document.getElementById("list-el");
const listEl1 = document.getElementById("list-el1");
const lendsumEl = document.getElementById("lendsum-el");




const totalsumEl = document.getElementById("totalsum-el");

const pghEl = document.getElementById("pgh");


// Push To The List & Store It In LocalStorage :

function myFunction() {
   myNameList.push(nameEl.value);
   nameEl.value = "";
   localStorage.setItem("myNameList", JSON.stringify(myNameList));
   render(myNameList);


   
   myAmountList.push(amountEl.value);
   let x = myAmountList.map(Number);
   amountEl.value = "";
   localStorage.setItem("myAmountList", JSON.stringify(myAmountList));
   renderAmountList(x);
   
   add(x);

   totalSum();

  
}

// To Render On The Screen :

function render(namelist){
   let listItems = "";
   for(let i = 0; i < namelist.length; i++){
      listItems += "<li>" + namelist[i] + "</li>";
   } 
   listEl.innerHTML = listItems;
}

function renderAmountList(amountlist){
   let listItems1 = "";
   for(let i =0; i < amountlist.length; i++) {
	listItems1 += "<li>" + amountlist[i] + "</li>"
   }
   listEl1.innerHTML = listItems1;
  
}


// It Works When Refreshing The Page :

const getItemFromTheList = JSON.parse(localStorage.getItem("myNameList"));

if(getItemFromTheList){
  myNameList = getItemFromTheList;
  render(myNameList);
 
}

const getItemFromTheList1 = JSON.parse(localStorage.getItem("myAmountList"));

if(getItemFromTheList1){
   let numberArray = getItemFromTheList1.map(Number);
   myAmountList = numberArray;
   renderAmountList(myAmountList);
   add(myAmountList);
   totalSum();
}


// Delete In The LocalStorage & Render : 

function dlt(){
   localStorage.removeItem("myNameList");
   localStorage.removeItem("myAmountList");
   myNameList = [];
   myAmountList = [];
   render(myNameList);
   renderAmountList(myAmountList);
   lendsumEl.textContent = "";
   totalSum();
}


// To Add The Items In The Array :

function add(z) {
   let sum = 0;
for( let i = 0; i < z.length; i++) {
   sum += z[i];
}
 
lendsumEl.textContent = "Total: " + sum;

}





// money given :

let myNameList1 = [];
let myAmountList1 = [];
const nameEl1 = document.getElementById("name-el1");
const amountEl1 =document.getElementById("amount-el1");
const saveEl1 = document.getElementById("save-el1");
const dltEl1 = document.getElementById("dlt-el1");
const listElel = document.getElementById("list-elel");
const listElel1 = document.getElementById("list-elel1");

const getsumEl = document.getElementById("gotsum-el");


// Store In LocalStorage :

function myFunction1() {
   const nameValue1 = nameEl1.value;
   nameEl1.value = "";
   myNameList1.push(nameValue1);
   localStorage.setItem("myNameList1", JSON.stringify(myNameList1));
   renderMoneyGiven(myNameList1);
   
  
   const amountValue1 =amountEl1.value;
   amountEl1.value = "";
   myAmountList1.push(amountValue1);
   let x1 = myAmountList1.map(Number);
   localStorage.setItem("myAmountList1", JSON.stringify(myAmountList1));
   renderMoneyGiven1(x1); 
   getSumAdd(x1);
   
   totalSum();
   
}


// Render It On The Screen: 

function renderMoneyGiven(gmname) { 
   let gmNameList = "";
   for(let i = 0; i < gmname.length; i++) {
	gmNameList += `<li> ${gmname[i]} </li>`;
   }
   listElel.innerHTML = gmNameList;
}

function renderMoneyGiven1(gmamount) {
   let gmAmountList = "";
   for(let i = 0; i < gmamount.length; i++) {
	gmAmountList += `<li> ${gmamount[i]} </li>`;
   }
   listElel1.innerHTML = gmAmountList;
}   


//It Works When The Page Refreshes :

let getItemFromTheNameList1 = JSON.parse(localStorage.getItem("myNameList1"));

if(getItemFromTheNameList1) {
   myNameList1 = getItemFromTheNameList1;  
   renderMoneyGiven(myNameList1);
}

let getItemFromTheAmountList1 = JSON.parse(localStorage.getItem("myAmountList1"));
if(getItemFromTheAmountList1) { 

   let gmAmountListNumberArray = getItemFromTheAmountList1.map(Number);
   myAmountList1 = gmAmountListNumberArray;
   renderMoneyGiven1(myAmountList1);
   getSumAdd(myAmountList1);
   totalSum();
}


// Delete In The LocalStorage & Render :

function dlt1() {
   localStorage.removeItem("myNameList1");
   localStorage.removeItem("myAmountList1");
   myNameList1 = [];
   myAmountList1 = [];
   renderMoneyGiven(myNameList1);
   renderMoneyGiven1(myAmountList1);
   getsumEl.textContent = "";
   totalSum();
}


// To Add Items In The Array :

function getSumAdd(y) {

   let gmSum = 0;
   for (let i = 0; i < y.length; i++) {
	gmSum += y[i];
   }
    

   getsumEl.textContent = "Total: " + gmSum;
}




// Grand Total Which Render it on @ End Of The Page : 

function totalSum() {
   
   let tsum = 0;
   let tsum1 = 0;
   let grandTotal;
   const getItemFromTheList1 = JSON.parse(localStorage.getItem("myAmountList"));

   if (getItemFromTheList1 === null) {
	tsum = 0;
   }
   else{
   let numArray = getItemFromTheList1.map(Number);
    for(let i = 0; i < numArray.length; i++) {
	tsum += numArray[i];
    }
   }

   
   
   let getItemFromTheAmountList1 = JSON.parse(localStorage.getItem("myAmountList1"));
   if (getItemFromTheAmountList1 === null) {
	tsum1 = 0;
	grandTotal =  tsum - tsum1;
        totalsumEl.textContent = grandTotal;
	pghEl.textContent = "Amount in the hand :"
   } else {
   
   let numArray1 = getItemFromTheAmountList1.map(Number);
   for(let i = 0; i < numArray1.length; i++) {
	tsum1 += numArray1[i];
   }
  
   grandTotal =  tsum - tsum1;
   totalsumEl.textContent = grandTotal;
   pghEl.textContent = "Amount in the hand :"
   }

   fun1(grandTotal);
  
}

// DOM CSS For Display The Grand Total :

function fun1(p) {
   if (p >= 0) {
	totalsumEl.style.display = "inline-block";
	totalsumEl.style.border = "1px solid black";
	totalsumEl.style.backgroundColor = "green";
	totalsumEl.style.padding = "5px 23px";
	totalsumEl.style.color = "white";
   }
   else {
	totalsumEl.style.display = "inline-block";
	totalsumEl.style.border = "1px solid black";
	totalsumEl.style.backgroundColor = "red";
	totalsumEl.style.padding = "5px 23px";
	totalsumEl.style.color = "white";
   }


}



 
