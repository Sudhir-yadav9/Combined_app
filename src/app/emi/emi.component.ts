import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emi',
  templateUrl: './emi.component.html',
  styleUrls: ['./emi.component.css']
})
export class EmiComponent implements OnInit {

  tablle:any=0;
  amt:any=0;
  principal_amount:any=0;
  roi:any=0;
  tenureY:any=0;
  tenureM:any=0;
  total_amount_with_intrest:any=0;
  total_intrest:any=0;
  yearly_amount:any=0;
  monthly_emi:any=0;
  amtpaid:any=0;
  amtremaining:any=0;
  tenure:any=0;


  validateInput()
    {
        this.principal_amount=this.amt;
        this.roi=this.roi;
        this.tenureY=this.tenure;

        var amountptrn= /^[0-9]+$/;
        var roiptrn=/^[0-9]+[\.]*[0-9]*$/;
        var Temureptrn=/^[0-9]+[\.]*[0-9]+$/;

        if(this.principal_amount==''||this.roi == '' ||this.tenureY=='')
        {
            alert("Fill all the Details:");
        }
        else if(!amountptrn.test(this.principal_amount))
        {
            alert("Please Provide a valid amount :");
        }
        else if(!roiptrn.test(this.roi))
        {
            alert("Please Provide a valid Intrest Rate :");
        }
        else if(!Temureptrn.test(this.tenureY))
        {
            alert("Please Provide a valid Time perioud :");
        }
        else
        {
            alert("Successfully Submit");
           
        }
    }

       calcMonthly()
       {
      
        this.tenureM=Math.round(this.tenureY*12);
        var r=this.roi/12/100;
        var x=1+r;
        var num=Math.pow(x,this.tenureM);
        var deno=num-1;
        this.monthly_emi=Math.round(this.principal_amount*r*num/deno);
        this.yearly_amount= this.monthly_emi*12;
        this.total_amount_with_intrest=this.monthly_emi*this.tenureM;
        this.total_intrest=this.total_amount_with_intrest+this.principal_amount;

       }
      

       calcTotal()
       {
        let tabll = this.tablle;

        var rowcount=tabll.rows.length;
        for(var i=rowcount-1;i>0;i--)
        {
            tabll.deleteRow(i);
        }
       
        for(let i=1;i<=this.tenureY * 12;i++)
        {

            let row=tabll.insertRow(i);
            let cell1=row.insertCell(0);
            let cell2=row.insertCell(1);
            let cell3=row.insertCell(2);
            let cell4=row.insertCell(3);

            this.amtpaid=this.monthly_emi*i;
            this.amtremaining=this.monthly_emi*12*this.tenureY - this.amtpaid;

            cell1.innerHTML = "Month-"+i;
            cell2.innerHTML = this.principal_amount;
            cell3.innerHTML = this.total_amount_with_intrest;
            cell4.innerHTML = this.total_intrest;

       }

       }

       creattablmonthly()
       {
           
           
            let tabll = this.tablle;

            var rowcount=tabll.rows.length;
            for(var i=rowcount-1;i>0;i--)
            {
                tabll.deleteRow(i);
            }
           
            for(let i=1;i<=this.tenureY * 12;i++)
            {

                let row=tabll.insertRow(i);
                let cell1=row.insertCell(0);
                let cell2=row.insertCell(1);
                let cell3=row.insertCell(2);
                let cell4=row.insertCell(3);

                this.amtpaid=this.monthly_emi*i;
                this.amtremaining=this.monthly_emi*12*this.tenureY - this.amtpaid;

                cell1 = "Month-"+i;
                cell2 = this.monthly_emi;
                cell3 = this.total_amount_with_intrest;
                cell4= this.amtremaining;

           }
       }


       creattablyearly()
       {

        let tabll = this.tablle;

        var rowcount=tabll.rows.length;
        for(var i=rowcount-1;i>0;i--)
        {
            tabll.deleteRow(i);
        }
        console.log("Deleted Value");
        for(let i=1;i<=this.tenureY * 12;i++)
        {
            let row=tabll.insertRow(i);
            let cell1=row.insertCell(0);
            let cell2=row.insertCell(1);
            let cell3=row.insertCell(2);
            let cell4=row.insertCell(3);

            this.amtpaid=this.monthly_emi*i;
            this.amtremaining=this.monthly_emi*12*this.tenureY - this.amtpaid;

            cell1.innerHTML =  i+"st-Month";
            cell2.innerHTML = this.tenureY;
            cell3.innerHTML = this.total_amount_with_intrest;
            cell4.innerHTML = this.yearly_amount;
            

       }



      }


  constructor() { }

  ngOnInit(): void {
  }

}

/*
calcTotal();
creattablyearly();
creattablmonthly();
*/