//Some global constants

const cosmological_constant_2 = 10; //some value
const cosmological_constant_1 = 100; //some value




//The outer section 

// The outer section is not divided yet!!!!

class Outer_Section
{
  constructor(d)
  {
    this.OuterSpace = [];

    for (let i = 0; i < d; i++)
    {
      this.OuterSpace.push([]);

      for (let j = 0; j < d; j++)
      {
        this.OuterSpace[i].push([]);

        for (let k = 0; k < d; k++)
        {
          this.OuterSpace[i][j].push(Math.random(10) * 10); // OBSERVATION LINE
        }
      }
    }
  }
}



// The mid section

//The mid space is divided into two categories

//1.1)
//The dimensions depends upon the value of the cell of the outer section and each cell value is obtained from a formula 
// each_cell = value / dimensions^3


class Mid_Section_1_1
{
  constructor(value)
  {
    this.MidSpace = [];

    let d = value / cosmological_constant_1;

    for (let i = 0; i < d; i++)
    {
      this.MidSpace.push([]);

      for (let j = 0; j < d; j++)
      {
        this.MidSpace[i].push([]);

        for (let k = 0; k < d; k++)
        {
          this.MidSpace[i][j].push((value / (Math.pow(d, 3))));
        }
      }
    }
  }
}

//1.2)
// the dimensions depends upon the value upon the cell value of the outer section and each cell value is a random value 

class Mid_Section_1_2
{
  constructor(value)
  {
    this.MidSpace = [];


    let d = value / cosmological_constant_1;

    this.midDimensions = d;

    for (let i = 0; i < d; i++)
    {
      this.MidSpace.push([]);

      for (let j = 0; j < d; j++)
      {
        this.MidSpace[i].push([]);

        for (let k = 0; k < d; k++)
        {
          this.MidSpace[i][j].push((value / (Math.random(10) * 10)));
        }
      }
    }
  }
}


//2.1)
// The dimensions depend upon the constant value and each cell value is obtained from the formula 
// each_cell = value/dimensions^3

class Mid_Section_2_1
{
  constructor(value, A_Constant_Dimension)
  {
    this.MidSpace = [];

    let d = A_Constant_Dimension;

    for (let i = 0; i < d; i++)
    {
      this.MidSpace.push([]);

      for (let j = 0; j < d; j++)
      {
        this.MidSpace[i].push([]);

        for (let k = 0; k < d; k++)
        {
          this.MidSpace[i][j].push((value / (Math.pow(d, 3))));
        }
      }
    }
  }
}

//2.2) 
// The dimensions depend upon  a constant value and the each cell value is a random value .

class Mid_Section_2_2
{
  constructor(value, A_Constant_Dimension)
  {
    this.MidSpace = [];

    let d = A_Constant_Dimension;

    for (let i = 0; i < d; i++)
    {
      this.MidSpace.push([]);

      for (let j = 0; j < d; j++)
      {
        this.MidSpace[i].push([]);

        for (let k = 0; k < d; k++)
        {
          this.MidSpace[i][j].push((value / (Math.random(10) * 10)));
        }
      }
    }
  }
}




class Inner_Section
{
  constructor(value)
  {
    this.InnerSpace = [];

    let d = value / cosmological_constant_2;

    for (let i = 0; i < d; i++)
    {
      this.InnerSpace.push([]);

      for (let j = 0; j < d; j++)
      {
        this.InnerSpace[i].push([]);

        for (let k = 0; k < d; k++)
        {
          this.InnerSpace[i][j].push((value / (Math.random(10) * 10)));
        }
      }
    }
  }
}


class create_void_space
{
  constructor(value)
  { 
    this.voidSpace=[];
  
    for(let i=0;i<27;i++)
    { 
      this.voidSpace.push([]);
      
      for(let j=0;j<27;j++)
      { 
        this.voidSpace[i].push([]);
        for(let k=0;k<27;k++)
        {
          this.voidSpace[i][j].push(value/26);
        }
      }
    }
  }
}
//process of mid-inner section



class process
{
  constructor()
  {


  }


  static void_space_process(mid)
  {
    //1.2 of mid section is used 
    
    for (let i = 0; i < mid.midDimensions; i++)
    {
      for (let j = 0; j < mid.midDimensions; j++)
      {
        for (let k = 0; k < mid.midDimensions; k++)
        {
          if (mid.MidSpace[i][j][k] > cosmological_constant_2)
          {
            mid.MidSpace = process.particle_space(mid.MidSpace[i][j][k], mid, i, j, k);
          }
          else
          {
            mid.MidSpace = process.void_expansion(mid.MidSpace[i][j][k],mid,i,j,k);
          }
        }
      }
    }
  }



  static particle_space(value, mid, i, j, k)
  {
    let output = new Inner_Section(value);
    mid.MidSpace[i][j][k] = output.InnerSpace;
    return mid.MidSpace;

  }

  static void_expansion(value,mid,i,j,k)
  {
    let output= new create_void_space(value);
    mid.MidSpace[i][j][k] = output.voidSpace;
    return mid.MidSpace;
  }
}