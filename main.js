//let a=new space(30,30,30);
//a.randomize();

//a.matrix[6][4][3]=40;
//a.matrix[6][4][4]=20;
//space.print(a);
//space.hasSomeValue(a,10,2,2,2);
//let result =  space.process(a,30,30,30,10000);
//space.print(result)
//space.getDetails(result);
//console.log("successfully executed!!!")
//console.log(space.allAreZero(a,1,1,1));

//console.log(Math.floor(Math.random(0,1)*25))


//space.getDetails(result,dval);
/*
 */
/*


let CountVal=0;
let oCountVal=0;
let val=10;
let dval=10;
for(let i=0;i<200;i++)
{
  let a = new space(val,val,val);
  a.randomize();
  let result =  space.process(a,dval,val,val,val,100);
  output=space.getDetails(result);
  if(output.countOther===((val-1)*(val-1)))
  {
    CountVal++;
  }
  else if(output.countOther!==(val-1)*(val-1))
  {
    oCountVal++;
  }
}

console.log(CountVal,oCountVal);
/**/

/*
for(let i=0;i<100;i++)
{
console.log(Math.random()*Math.random()*10);
}
/**/



function setup()
{
  createCanvas(6000, 6000);
  background(0);
  noStroke();
  let cordX = 50;

  let z = 6;
  let dval = Math.PI;
  let a = new space(z, z, z);
  a.randomize();

  //a.matrix[3][4][3] = ;

  space.print(a);
  // space.getDetails(a, dval)

  
      for (let k = 1; k < z + 1; k++)
      {
        for (let i = 1; i < z + 1; i++)
        {
          for (let j = 1; j < z + 1; j++)
          {
            fill(255, 0, 0);
          //console.log(a.matrix[k][i][j] + 100)
            ellipse(cordX, 100 + (a.matrix[k][i][j] * 100), 3);
            cordX+=0.7;

          }
        }
      }
      cordX = 50;
     /* */

  let result = space.process(a, dval, z, z, z, 1000);
  space.print(result)
  console.table(result.matrix[3][4]);
  space.getDetails(result,dval);


  for (let k = 1; k < z + 1; k++)
  {
    for (let i = 1; i < z + 1; i++)
    {
      for (let j = 1; j < z + 1; j++)
      {
        fill(0, 255, 0);
        //console.log(result.matrix[k][i][j] + 100)
        ellipse(cordX, 100 + (result.matrix[k][i][j]*100), 3);
        cordX += 0.7;


      }
    }
  }
  /*
  fill(255);
  stroke(255);
  line(0,200,4000,200);
  line(0,300,4000,300);
  line(0,400,4000,400);
  line(0,500,4000,500);
  line(0,600,4000,600);
  line(0,700,4000,700);
  line(0,800,4000,800);
  line(0,900,4000,900);
  line(0,1000,4000,1000);
  line(0,1100,4000,1100);
  /**/
  /*
    createCanvas(1000, 1000, WEBGL);

    background(255);

    let pos = [];
    let count = 0;

    camera(100, -400, -400, // camera position (x, y, z)
      150, -250, -50, // camera target (look at position) (x, y, z)
      0, 5, 0); // camera up axis: Y axis here
    // orbitControl();
    for (let y = 1, p = 0; y < z + 1; y++, p += 4)
    {
      for (let x = 1, q = 0; x < z + 1; x++, q += 4) {
        for (let w = 1, r = 0; w < z + 1; w++, r += 4) {
          // push();
          if (result.matrix[y][x][w] > 1)
          {
            push();
            //Stroke(255);
            // noFill();
            //  strokeWeight(0.1);
            // ground plane is XZ, not XY (front plane)
            //strokeWeight, q, r);
            fill(0, 0, 255);
            //orbitControl();
            box(25);
            //translate(p, q, r);
            //pos.push({ id: count, x: x, y: y, z: z });
            count++;

            pop();
          }
          else
          {
            push();
            fill(0, 255, 0);
            //translate(p, q, r);
            box(25);
            pop();
          }
          translate(p, q, r);
          //   pop();
        }
      }
    }
    /**/
}
/**/