let number = [1,2,3,4,5,6,7,8,9,]
for(let onenumber of number){
    let ordinalNumber: string;
    if(onenumber === 1){
        ordinalNumber = "st"
    }
    else if(onenumber === 2){
        ordinalNumber = "nd"
    }
    else if(onenumber === 3){
        ordinalNumber = "rd"
    }
    else{
        ordinalNumber = "th"
    }
    console.log(`${onenumber}${ordinalNumber}`)
}