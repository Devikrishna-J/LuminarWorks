var users={
    1000:{accno:1000,personName:"ram",balance:5000,password:"userone",transactions:{
        creditTransactions:[],
        debitTransactions:[]
    }      
    },
    1001:{accno:1001,personName:"ravi",balance:7000,password:"usertwo",transactions:{
        creditTransactions:[],
        debitTransactions:[]
    }    },
    1002:{accno:1002,personName:"raju",balance:8000,password:"userthree",transactions:{
        creditTransactions:[],
        debitTransactions:[]
    }    },
    1003:{accno:1003,personName:"vivek",balance:15000,password:"userfour",transactions:{
        creditTransactions:[],
        debitTransactions:[]
    }    },

}
//1003's name
//console.log(users[1003].personName);
//1005 exist or not
//console.log("1005" in users);
function authentication(acc_num,password){
    if(acc_num in users){       
        let pswd=users[acc_num].password;
        if(pswd==password){
            return 1; //access granted
        }
        else
            return -1; //invalid password
    }
    else
        return 0; //invalid account number
}
//console.log(authentication(1001,"usertwo"));
function validateAccountnum(acc_no){
    return acc_no in users?true:false;
}
function checkBalance(acc_no){
    if(validateAccountnum(acc_no))
        return users[acc_no].balance;
    else    
        return 0;
}
function fundTransfer(from_accno,to_accno,amount){
    if(validateAccountnum(from_accno) && validateAccountnum(to_accno)){
        let bal=users[from_accno].balance;
        if(amount>bal)
            console.log("insufficient balance");
        else{
            //console.log(`Current Balance in account no: ${from_accno} is ${users[from_accno].balance}`);
            //console.log(`Current Balance in account no: ${to_accno} is ${users[to_accno].balance}`);
            users[from_accno].balance-=amount;
            from_avl_balance=checkBalance(from_accno)
            users[to_accno].balance+=amount;
            to_avl_balance=checkBalance(to_accno)
            //console.log(`Balance in debited account no: ${from_accno} is ${users[from_accno].balance}`);
           // console.log(`Balance in credited account no: ${to_accno} is ${users[to_accno].balance}`);
            let crTrans={from:from_accno,amount:amount}
            let dbTrans={to:to_accno,amount:amount}
            //console.log(dbTrans);
            //since transactions is an array of object ,push objects(crTrans,dbTrans) using index
            //if transactions is an object:- users[from_accno].transactions.debitTransactions.push(dbTrans);
            users[from_accno].transactions.debitTransactions=dbTrans;
            users[to_accno].transactions.creditTransactions=crTrans;
            console.log(users[from_accno]);
            console.log(users[to_accno]);

        }
    }
    else    
        console.log("invalid account numbers");
      
}
fundTransfer(1000,1002,500);
//console.log(users[1000]);