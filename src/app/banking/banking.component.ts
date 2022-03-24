import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banking',
  templateUrl: './banking.component.html',
  styleUrls: ['./banking.component.css']
})
export class BankingComponent implements OnInit {
  
  constructor() { }

  ngOnInit(): void {
  }
  bal:any=0;
  amt:any=0;
            OpenAccount()
            {
                

                var valuee=this.amt;
                if(valuee==0)
                {
                    alert("Account Cannot be opened with Zero Balance :");
                }
                else 
                {
                    alert("Account created with the deposit Amount of :Rs"+valuee);
                    this.bal=valuee;
                }
                
            }
            
             withdrawal()
                {
                    var valuee=this.amt;
                    var total=this.bal;
                    var balance=total-valuee;
                    if(valuee >total)
                    {
                        alert("Not Enough Balance In the account:");
                    }
                    else
                    {
                        this.bal= balance;
                        alert("Withdrawal Successfull ");
                    }
                }

                Balan()
                {
                    var total=this.bal;
                    alert("The balance of current Account is :Rs"+total);
                }
                deposit()
                {
                    var deposit=this.amt*1;
                    var total=this.bal*1;
                    var balance= deposit + total;

                    
                    
                    this.bal=balance ;
                    

                    alert("Amount Deposited :");
                    }
                    
                }


  


