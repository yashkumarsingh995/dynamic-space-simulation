class space
{
  //constructor function
  constructor(x, y, z)
  {
    this.x = x;
    this.y = y;
    this.z = z;

    this.matrix = [];
    for (let k = 0; k <= this.z + 1; k++)
    {
      this.matrix.push([]);
      for (let i = 0; i <= this.x + 1; i++)
      {
        this.matrix[k].push([]);

        for (let j = 0; j <= this.y + 1; j++)
        {
          this.matrix[k][i].push(0);
        }
      }
    }
  }


  randomize()
  {
    for (let k = 1; k < this.z + 1; k++)
    {
      for (let i = 1; i < this.x + 1; i++)
      {
        for (let j = 1; j < this.y + 1; j++)
        {
          //this.matrix[k][i][j]=(Math.random(0,10)*Math.PI*Math.PI)/10 >0.5?1:0;
          //  this.matrix[k][i][j] = ((Math.random(0, 10)*10)) > 0.4 ? 1 : 0;
          //this.matrix[k][i][j] = Math.random(0,10);
          //this.matrix[k][i][j]=Math.PI/Math.floor(Math.random(0,10)*10);
          //  this.matrix[k][i][j]=Math.random()*Math.random()>0.5?1:0;
          //TEMPOO POO POO POO POO
          // this.matrix[k][i][j]=Math.PI/(Math.random(0,10)*10);
          /* Assuming that window.crypto.getRandomValues is available */

          var array = new Uint32Array(1);
          window.crypto.getRandomValues(array);

          //  console.log("Your lucky numbers:");
          this.matrix[k][i][j] = array[0] / 1000000000;
        }
      }
    }
  }


  static print(arr)
  {
    console.log(arr.matrix);

    console.log(arr.x);
    console.log(arr.y);
    console.log(arr.z);
  }

  static allAreZero(arr, i, j, k)
  {
    try {

      if (arr.matrix[k][i][j + 1] === 0 && arr.matrix[k][i][j - 1] === 0 && arr.matrix[k][i - 1][j + 1] === 0 && arr.matrix[k][i - 1][j] === 0 && arr.matrix[k][i - 1][j - 1] === 0 && arr.matrix[k][i + 1][j + 1] === 0 && arr.matrix[k][i + 1][j] === 0 && arr.matrix[k][i + 1][j - 1] === 0 && arr.matrix[k + 1][i - 1][j - 1] === 0 && arr.matrix[k + 1][i - 1][j] === 0 && arr.matrix[k + 1][i - 1][j + 1] === 0 && arr.matrix[k + 1][i][j - 1] === 0 && arr.matrix[k + 1][i][j] === 0 && arr.matrix[k + 1][i][j + 1] === 0 && arr.matrix[k + 1][i + 1][j - 1] === 0 && arr.matrix[k + 1][i + 1][j === 0 && arr.matrix[k + 1][i + 1]][j + 1] === 0 && arr.matrix[k - 1][i - 1][j - 1] === 0 && arr.matrix[k - 1][i - 1][j] === 0 && arr.matrix[k - 1][i - 1][j + 1] === 0 && arr.matrix[k - 1][i][j - 1] === 0 && arr.matrix[k - 1][i][j] === 0 && arr.matrix[k - 1][i][j + 1] === 0 && arr.matrix[k - 1][i + 1][j - 1] === 0 && arr.matrix[k - 1][i + 1][j] === 0 && arr.matrix[k - 1][i + 1][j + 1] === 0)
      {
        // console.log('here!!!')
        return true;
      }
      return false;
    }
    catch (e) {
      //  throw Error(e);
      // console.error("over here")
      return false;
    }
    /*
    finally
    {
      return false;
    }*/
  }

  static assignRandom(arr, value, i, j, k)
  {
    let choice = Math.floor(Math.random(0, 1) * 25);
    switch (choice) {
      case '0':
        // code
        arr.matrix[k][i][j + 1] += value;
        arr.matrix[k][i][j] = 0;
        break;
      case '1':
        arr.matrix[k][i][j - 1] += value;
        arr.matrix[k][i][j] = 0;
        break;
      case '2':
        arr.matrix[k][i - 1][j + 1] += value;
        arr.matrix[k][i][j] = 0;
        break;
      case '3':
        arr.matrix[k][i - 1][j] += value;
        arr.matrix[k][i][j] = 0;
        break;
      case '4':
        arr.matrix[k][i - 1][j - 1] += value;
        arr.matrix[k][i][j] = 0;
        break;
      case '5':
        arr.matrix[k][i + 1][j + 1] += value;
        arr.matrix[k][i][j] = 0;
        break;
      case '6':
        arr.matrix[k][i + 1][j] += value;
        arr.matrix[k][i][j] = 0;
        break;
      case '7':
        arr.matrix[k][i + 1][j - 1] += value;
        arr.matrix[k][i][j] = 0;
        break;
      case '8':
        arr.matrix[k + 1][i - 1][j - 1] += value;
        arr.matrix[k][i][j] = 0;
        break;
      case '9':
        arr.matrix[k + 1][i - 1][j] += value;
        arr.matrix[k][i][j] = 0;
        break;
      case '10':
        arr.matrix[k + 1][i - 1][j + 1] += value;
        arr.matrix[k][i][j] = 0;
        break;
      case '11':
        arr.matrix[k + 1][i][j - 1] += value;
        arr.matrix[k][i][j] = 0;
        break;
      case '12':
        arr.matrix[k + 1][i][j] += value;
        arr.matrix[k][i][j] = 0;
        break;
      case '13':
        arr.matrix[k + 1][i][j + 1] += value;
        arr.matrix[k][i][j] = 0;
        break;
      case '14':
        arr.matrix[k + 1][i + 1][j - 1] += value;
        arr.matrix[k][i][j] = 0;
        break;
      case '15':
        arr.matrix[k + 1][i + 1][j] += value;
        arr.matrix[k][i][j] = 0;
        break;
      case '16':
        arr.matrix[k + 1][i + 1][j + 1] += value;
        arr.matrix[k][i][j] = 0;
        break;
      case '17':
        arr.matrix[k - 1][i - 1][j - 1] += value;
        arr.matrix[k][i][j] = 0;
        break;
      case '18':
        arr.matrix[k - 1][i - 1][j] += value;
        arr.matrix[k][i][j] = 0;
        break;
      case '19':
        arr.matrix[k - 1][i - 1][j + 1] += value;
        arr.matrix[k][i][j] = 0;
        break;
      case '20':
        arr.matrix[k - 1][i][j - 1] += value;
        arr.matrix[k][i][j] = 0;
        break;
      case '21':
        arr.matrix[k - 1][i][j] += value;
        arr.matrix[k][i][j] = 0;
        break;
      case '22':
        arr.matrix[k - 1][i][j + 1] += value;
        arr.matrix[k][i][j] = 0;
        break;
      case '23':
        arr.matrix[k - 1][i + 1][j - 1] += value;
        arr.matrix[k][i][j] = 0;
        break;
      case '24':
        arr.matrix[k - 1][i + 1][j] += value;
        arr.matrix[k][i][j] = 0;
        break;
      case '25':
        arr.matrix[k - 1][i + 1][j + 1] += value;
        arr.matrix[k][i][j] = 0;
        break;
      default:
        console.error("something strange has happened !!!!!!");
    }
    return arr;
  }

  static hasSomeValue(arr, desrValue, i, j, k)
  {
    let arr_temp = [];


    arr_temp.push([i, j + 1, k, arr.matrix[k][i][j + 1]]);
    arr_temp.push([i, j - 1, k, arr.matrix[k][i][j - 1]]);
    arr_temp.push([i - 1, j + 1, k, arr.matrix[k][i - 1][j + 1]]);
    arr_temp.push([i - 1, j, k, arr.matrix[k][i - 1][j]]);
    arr_temp.push([i - 1, j + 1, k, arr.matrix[k][i - 1][j + 1]]);
    arr_temp.push([i + 1, j + 1, k, arr.matrix[k][i + 1][j + 1]]);
    arr_temp.push([i + 1, j, k, arr.matrix[k][i + 1][j]]);
    arr_temp.push([i + 1, j - 1, k, arr.matrix[k][i + 1][j - 1]]);




    arr_temp.push([i, j + 1, k + 1, arr.matrix[k + 1][i][j + 1]]);
    arr_temp.push([i, j, k + 1, arr.matrix[k + 1][i][j]]);
    arr_temp.push([i, j - 1, k + 1, arr.matrix[k + 1][i][j - 1]]);
    arr_temp.push([i - 1, j + 1, k + 1, arr.matrix[k + 1][i - 1][j + 1]]);
    arr_temp.push([i - 1, j, k + 1, arr.matrix[k + 1][i - 1][j]]);
    arr_temp.push([i - 1, j + 1, k + 1, arr.matrix[k + 1][i - 1][j + 1]]);
    arr_temp.push([i + 1, j + 1, k + 1, arr.matrix[k + 1][i + 1][j + 1]]);
    arr_temp.push([i + 1, j, k + 1, arr.matrix[k + 1][i + 1][j]]);
    arr_temp.push([i + 1, j - 1, k + 1, arr.matrix[k + 1][i + 1][j - 1]]);




    arr_temp.push([i, j + 1, k - 1, arr.matrix[k - 1][i][j + 1]]);
    arr_temp.push([i, j, k - 1, arr.matrix[k - 1][i][j]]);
    arr_temp.push([i, j - 1, k - 1, arr.matrix[k - 1][i][j - 1]]);
    arr_temp.push([i - 1, j + 1, k - 1, arr.matrix[k - 1][i - 1][j + 1]]);
    arr_temp.push([i - 1, j, k - 1, arr.matrix[k - 1][i - 1][j]]);
    arr_temp.push([i - 1, j + 1, k - 1, arr.matrix[k - 1][i - 1][j + 1]]);
    arr_temp.push([i + 1, j + 1, k - 1, arr.matrix[k - 1][i + 1][j + 1]]);
    arr_temp.push([i + 1, j, k - 1, arr.matrix[k - 1][i + 1][j]]);
    arr_temp.push([i + 1, j - 1, k - 1, arr.matrix[k - 1][i + 1][j - 1]]);



    // console.log(arr_temp);
    let min = 10;
    let index = -1;
    for (let p = 0; p < arr_temp.length; p++)
    {
      if (arr_temp[p][3] <min && arr_temp[p][3] <= desrValue)
      {
        min = arr_temp[p];
        index = p;
      }
      if (arr_temp[p][3] >= desrValue)
      {
        for (let s = 0; s < arr_temp.length; s++)
        {
      
            arr.matrix[arr_temp[s][2]][arr_temp[s][0]][arr_temp[s][1]] += arr.matrix[k][i][j] / 26;
          
        }
         arr.matrix[k][i][j] -=arr.matrix[k][i][j]/26;
      }
    }
    //console.log(index);
    //console.log(arr_temp.length);
    try
    {
      arr.matrix[arr_temp[index][2]][arr_temp[index][0]][arr_temp[index][1]] += arr.matrix[k][i][j];

      // console.log(arr.matrix[arr_temp[index][0]][arr_temp[index][1]][arr_temp[index][2]]);

      // arr.matrix[i][j][k] -= arr.matrix[arr_temp[index][0]][arr_temp[index][1]][arr_temp[index][2]];

      arr.matrix[k][i][j] = 0;
    }
    catch (e)
    {
      throw Error(e);
    }
    finally
    {
      return arr;
    }

  }


  static process(arr, desrValue, x, y, z, iterN)
  {
    for (let p = 0; p < iterN; p++)
    {
      for (let k = 1; k < z + 1; k++)
      {
        for (let i = 1; i < x + 1; i++)
        {
          for (let j = 1; j < y + 1; j++)
          {
            let value = arr.matrix[k][i][j];
            if (value !== 0)
            {
              //console.log(i,j,k)

              if (this.allAreZero(arr, i, j, k))
              {
                arr = this.assignRandom(arr, value, i, j, k);
              }
              else
              {
                arr = this.hasSomeValue(arr, desrValue, i, j, k);
              }
            }
          }
        }
      }
    }
    return arr;
  }

  static getDetails(arr, dval)
  {
    let count1 = 0;
    let count0 = 0;
    let countOther = 0;

    for (let k = 1; k < arr.z + 1; k++)
    {
      for (let i = 1; i < arr.x + 1; i++)
      {
        for (let j = 1; j < arr.y + 1; j++)
        {
          if (arr.matrix[k][i][j] > 0 )
          {
            countOther++;
          }
          else if (arr.matrix[k][i][j] === 0)
          {
            count0++;
          }
          else
          {
            countOther++;
            //this is to be extended
          }
        }
      }
    }
    console.log("the count 0f 0:- " + count0);
    console.log("the count of event points:- " + count1);
    console.log("the count of else :- " + countOther); /**/

    return { count0: count0, count1: count1, countOther: countOther };
  }


}