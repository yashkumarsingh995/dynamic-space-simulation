// Driver code 

let cosmicPoint ; //big bang starting point 
let space;
let splitValue;

for(let i=0;i<testingValue.threshold;i++)
{
if(cosmicPoint.value>=thresholdValue)
{
  spiltValue=cosmos.split(cosmicPoint,space);
  space=spiltValue.space;
  
  
  
}
}


// Core code 

class cosmos
{
  constructor(xDim,yDim,zDim)
  {
    this.x=xDim;
    this.y=yDim;
    this.z=zDim;
    
    let spaceMatrix=[];
    for(let i=0;i<this.x;i++)
    {
      spaceMatrix.push([]);
      for(let j=0;j<this.y;j++)
      {
        spaceMatrix[i].push([]);
        for(let k=0;k<this.z+2;k++)
        {
          spaceMatrix[i][j].push(0);
        }
      }
    }
  }
  
  //randomization function;
  
  randomize()
  {
    
  }
  
  static split(cosmicPoint,space)
  {
    
  }
  
}