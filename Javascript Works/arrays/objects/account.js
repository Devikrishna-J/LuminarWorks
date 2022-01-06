var accounts = [
    {
      acno: 1000, ac_type: "savings", balance: 5000, transactions: [
        { to: 1001, amount: 500, note: "ebill", method: "g-pay" },
        { to: 1002, amount: 600, note: "geto", method: "neft" },
        { to: 1003, amount: 100, note: "erchrge", method: "phone-pay" }
      ] 
    },
    {
      acno: 1001, ac_type: "savings", balance: 6000, transactions: [
        { to: 1000, amount: 1000, note: "emi", method: "phone-pay" },
        { to: 1002, amount: 500, note: "geto", method: "neft" },
        { to: 1003, amount: 100, note: "erchrge", method: "phone-pay" }
  
      ]
    },
    {
      acno: 1002, ac_type: "current", balance: 8000, transactions: [
        { to: 1000, amount: 1000, note: "emi", method: "phone-pay" },
        { to: 1001, amount: 5000, note: "geto", method: "neft" },
        { to: 1003, amount: 100, note: "erchrge", method: "phone-pay" }
  
      ]
    },
    {
      acno: 1003, ac_type: "current", balance: 16000, transactions: [
        { to: 1000, amount: 1000, note: "emi", method: "phone-pay" },
        { to: 1002, amount: 500, note: "geto", method: "neft" },
        { to: 1001, amount: 100, note: "erchrge", method: "phone-pay" }
  
      ]
    },
  
  ]
  //Qn1: how many account numbers
  //console.log("Total account numbers: ",accounts.length);

  //Qn2: Print all accounts numbers whose account type =savings
  //console.log(accounts.filter(data=>data.ac_type=="savings").map(data=>data.acno));

  //Qn3: Print balance of acno=1000
  //console.log(accounts.find(data=>data.acno==1000).balance);

  //Qn4:  Print all google pay transactions
var trans_array=accounts.map(data=>data.transactions).flat();
//console.log(trans_array.filter(data=>data.method=="g-pay"));

//Qn5: Print credit transaction to 1002
//console.log(accounts.map(data=>data.transactions).flat().filter(trans=>trans.to==1002));

//Qn6: Print highest balance account details
//console.log
var sorted_arr=accounts.sort((b1,b2)=>b2.balance-b1.balance);
//console.log(sorted_arr[0]);

//Qn7: Print transaction history of 1002 - debit n credit transactions
var debit_arr=accounts.find(data=>data.acno==1002).transactions;
var credit_arr=accounts.map(data=>data.transactions).flat().filter(trans=>trans.to==1002);
//var transactionHistory=debit_arr.concat(credit_arr); //concat two arrays
var transactionHistory={"CreditTransactions":credit_arr,"DebitTransactions":debit_arr};
console.log("Transaction History of account number 1002:",transactionHistory);
