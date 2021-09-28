"use strict";

class inner_section
{
  constructor(our_dimensions,U_i_jk_p_qr)
  {
    //under observation line 
    let eaach_cell = U_i_jk_p_qr/Math.pow(our_dimensions,3);
    
     this.innerSpace = [];
     
     for(let i = 0 ; i < our_dimensions;i++)
     {
       this.innerSpace.push([]);
       for(let j =0 ;j< our_dimensions;j++)
       {
         this.innerSpace[i].push([]);
         for(let k =0 ;k<our_dimensions;k++)
         {
           //under observation line 
           let each_cell = U_i_jk_p_qr/(Math.pow((Math.random(10)*10),3));
           this.innerSpace[i][j].push(each_cell);
         }
       
       }
       
     }
    
  }
  
}


class mid_section
{
  constructor(mid_dimensions, U_i_jk,ct)
  {
    //under observation line 
    let eaach_cell = U_i_jk / Math.pow(mid_dimensions, 3);
    
    this.size = mid_dimensions;
    this.cosmic_threshold_1=ct.v1;
    this.cosmic_threshold_2=ct.v2;
    this.midSpace = [];
  
    for (let i = 0; i < mid_dimensions; i++)
    {
      this.midSpace.push([]);
      for (let j = 0; j < mid_dimensions; j++)
      {
        this.midSpace[i].push([]);
        for (let k = 0; k < mid_dimensions; k++)
        {
          //under observation line 
          let each_cell = U_i_jk_p_qr / (Math.pow((Math.random(10) * 10), 3));
          this.midSpace[i][j].push(each_cell);
        }
  
      }
  
    }
  
  }
  
  
  process()
  {
    for(let i =0 ;i< this.size;i++)
    {
      for(let j = 0 ;j< this.size;j++)
      {
        for(let k=0;k<this.size;k++)
        {
           if(this.midSpace[i][j][k]<this.cosmic_threshold_1)
           {
             this.affect_M_Innersection();
           }
           else if(this.midSpace[i][j][k]>= this.cosmic_threshold_2)
           {
             this.affectMidSeciton();
           }
           else if(this.midSpace[i][j][k] === -1)
           {
             //do nothing 
           }
        }
      }
    }
  }
  
  
  affect_M_Innersection(Minner)
  {
    //under observation line 
    for(let i =0 ; i< Minner.x;i++)
    {
      Minner.space[i].push()
      
    }
    
    
    
    
    
    
    
  }
  


  
  
}


  
class Minner
{
  
}