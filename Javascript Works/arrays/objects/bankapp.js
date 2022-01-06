class Bank{
    accounts = {
        1000: {
            accno: 1000, personName: "ram", balance: 5000, password: "userone",
            transactions: {
                creditTransactions: [],
                debitTransactions: []
            }
    
        },
        1001: {
            accno: 1001, personName: "ravi", balance: 7000, password: "usertwo",
            transactions: {
                creditTransactions: [],
                debitTransactions: []
            }
        },
        1002: {
            accno: 1002, personName: "raju", balance: 8000, password: "userthree",
            transactions: {
                creditTransactions: [],
                debitTransactions: []
            }
        },
        1003: {
            accno: 1003, personName: "vivek", balance: 15000, password: "userfour",
            transactions: {
                creditTransactions: [],
                debitTransactions: []
            }
        },
    
    }
    session={};
    validateAccountNumber(acno){
        
        return acno in this.accounts ?true:false;
    }
    authenticate(acno,pswd){
        if(this.validateAccountNumber(acno)){
            let password=this.accounts[acno].password;
            if(password==pswd){
                console.log("access granted");
                this.session["user"]=acno;
                
            }
            else{
                console.log("invalid password");
            }

        }
        else{
            console.log("Invalid Account number");
        }
    }
    getBalance(acno){       
            return this.accounts[acno].balance;      
    }
    balanceEnquiry(){
        if("user" in this.session){
            let loggeduser=this.session["user"]
            console.log(this.getBalance(loggeduser)) ;

        }
        else{
            console.log("Session expired must Login");
        }
    }
    loginRequired(){
        return "user" in this.session ?true:false;
    }
    loggedUser(){
        if(this.loginRequired())
        {
            return this.session["user"];
        }
    }
    fundTransfer(to_accno,amount){
        if(this.loginRequired()){
            let loggeduser=this.session["user"];
            if(this.validateAccountNumber(to_accno)){
                let curbal=this.getBalance(loggeduser);
                if(amount>curbal){
                    console.log("Insufficient balance");
                }
                else{
                    //account details before transactions
                    console.log("from account ",this.accounts[loggeduser]);
                    console.log("to account ",this.accounts[to_accno]);
                    
                    this.accounts[loggeduser].balance-=amount;//debit amount from account
                    this.accounts[to_accno].balance+=amount;//credit amount
                    let creditTransactions={from:loggeduser,amount:amount} //credit transaction value
                    let debitTransactions={to:to_accno,amount:amount} //debit transaction value
                    //update/assign abv values to transaction object in accounts 
                    this.accounts[loggeduser].transactions.debitTransactions=debitTransactions;
                    this.accounts[to_accno].transactions.creditTransactions=creditTransactions;

                    //print account details after transactions
                    console.log("Transfered successfully");
                    console.log("from account ",this.accounts[loggeduser]);
                    console.log("to account ",this.accounts[to_accno]);
                    
                }
            }
            else{
                console.log("Invalid to account number");
            }
            
        }
        else{
            console.log("Session Expired must Login");
        }
       
    }
    getDebitTransaction(){
        let user=this.loggedUser();
        console.log( this.accounts[user].transactions.debitTransactions);
      
    }
    getCreditTransaction(){
        let user=this.loggedUser();
        console.log( this.accounts[user].transactions.creditTransactions);
      

    }
    getTransactionHistory(){
        let user=this.loggedUser();
        console.log( this.accounts[user].transactions);
      
    }

}
var bank=new Bank(); //create object
//console.log(bank.validateAccountNumber(1000));
bank.authenticate(1000,"userone")
//bank.balanceEnquiry();
bank.fundTransfer(1002,1000);
bank.getDebitTransaction();
bank.getCreditTransaction();
bank.getTransactionHistory()

