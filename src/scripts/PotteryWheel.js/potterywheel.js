//define a variable in the module to have the value of the primary key for each piece of pottery
//it should have an initial value of 1 

let pottery = 1


// define and export a function named makePottery 
// must accept the following values: shape of piece of pottery, weight of the piece, height of the piece
export const makePottery = (shapeParam, weightParam, heightParam) => {
    let potObject = {
        shape: shapeParam,
        weight: weightParam,
        height: heightParam,
        id: pottery
    }
    pottery = pottery + 1 //pottery =+1 / pottery++
    //pottery id adds 1 

    return potObject
}



