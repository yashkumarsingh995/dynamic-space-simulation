

class OurModel
{
  
  constructor(eventValue)
  {
    this.eventValue=eventValue;
    this.space=[[[eventValue]]];
  }
  
  
  
  
  
  static Random(eventValue)
  {
    let array = new Uint32Array(1);
    window.crypto.getRandomValues(array);
    
    //  console.log("Your lucky numbers:");
    return array[0] / 1000*eventValue;
  }
  


  
  BigBang(range)
  {
    let newSpace=[];
    for(let i=0;i<range.x;i++)
    {
      newSpace.push([]);
      for(let j=0;j<range.y;j++)
      {
        newSpace[i].push([]);
        for(let k=0;k<range.z;k++)
        {
          newSpace[i][j].push(OurModel.Random(this.eventValue));
        }
      }
    }
    
  }
  
  
  static print()
  {
    
  }
  
  
  
}