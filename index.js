// Problem No.1

// function calculateMoney(ticketSale) {
//     if (ticketSale < 0) {
//         return "Please input positive number";
//     }
//     const totalTicketPrice = ticketCount * 120;
//     const lunchCost = 50 * 8;
//     const securityCost = 500;
//     const dailyCost = lunchCost + securityCost;
//     const totalAmount = totalTicketPrice - dailyCost;
//     return totalAmount;
// }

// Problem No.2

// function checkName(name) {
//     if (typeof name != "string") {
//         return "invalid";
//     }

//     for (let i = name.length - 1; i >= 0; i--) {
//         const lastLatter = name[name.length - 1];
//         if (lastLatter == "A") {
//             return "Good Name";
//         } else if (lastLatter == "y") {
//             return "Good Name";
//         } else if (lastLatter == "i") {
//             return "Good Name";
//         } else if (lastLatter == "e") {
//             return "Good Name";
//         } else if (lastLatter == "o") {
//             return "Good Name";
//         } else if (lastLatter == "u") {
//             return "Good Name";
//         } else if (lastLatter == "w") {
//             return "Good Name";
//         } else {
//             return "Bad Name";
//         }
//     }
// }

// Problem No. 3

// function deleteInvalids(array){
//     console.log(typeof(array) ==)
//     const number = array.filter(item => typeof(item) === 'number');
//     console.log(number);

// }
// deleteInvalids({num: [ 1 , 2 , 3 ]})

// function monthlySavings(arr, livingCost) {
//     for (let i = 0; i < arr.length; i++) {
//         if(arr[i] >= 3000){
//             arr[i] = arr[i] - (30/arr[i])*100;
//         }
        
//     }
// }



function password(obj) {
    if(obj.birthYear < 1000 ){
        return "invalid"
    }
    else if(!obj.name){
        return "invalid"
    }
    else if(!obj.siteName){
        return "invalid"
    }
    else if(!obj.birthYear){
        return "invalid"
    }
    const firstLatter = (obj.siteName.slice(0,1).toUpperCase())
    const restLatter = (obj.siteName.slice(1, obj.siteName.length))
    const newLetter = (firstLatter+restLatter);
    
    const pass = newLetter+"#"+obj.name+"@"+obj.birthYear
    return pass;
  
}

const result = password({ name: 'Ashif', birthYear: 2000, siteName: 'facebook' });
console.log(result);
