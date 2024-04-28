#! /usr/bin/env node

import inquirer from "inquirer" 

 const currency: any = { 
            USD: 1,        //DOOLLER
            EUR: 0.94,     //EURO
            GBP: 0.81,     //BRITISH POUNDS
            JPY: 154.56,   //JAPENESS YEN
            CAD: 1.37,     //CANADIAN DOLLER
            AUD: 1.56,     //AUSTRALIAN DOLLER
            INR: 83.40,    //INDIAN RUPEES
            CYN: 7.24,     //GHINESE YUAN
            PKR: 278.5     //PAKISTANI RUPEES
 }
 
 let user_answer =  await inquirer.prompt(
   [ {
        name: "from",
        message: "Enter from currency",
        type: "list",
        choices:["USD","EUR","GBP","JPY","CAD","AUD","INR","CYN","PKR"]
        
    },
    {
        name:"to",
        message: "Enter to currency",
        type: "list",
        choices:["USD","EUR","GBP","JPY","CAD","AUD","INR","CYN","PKR"]
    },
    {
        name: "amount",
        message: "Enter your amount",
        type: "number"
    }
    ]
 )

 let fromAmount = currency[user_answer.from]
 let toAmount =currency[user_answer.to]
 let amount = user_answer.amount
 let baseAmount = amount / fromAmount
 let convertedAmount = baseAmount * toAmount
 console.log(convertedAmount);