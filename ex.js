

function calculateMoney(ticketSale) {
    if (ticketSale < 0) {
        return "Please input positive number";
    }
    const totalTicketPrice = ticketSale * 120;
    const lunchCost = 50 * 8;
    const securityCost = 500;
    const dailyCost = lunchCost + securityCost;
    const totalAmount = totalTicketPrice - dailyCost;
    return totalAmount;
}



function checkName(name) {
    if (typeof name != "string") {
        return "invalid";
    }

    for (let i = name.length - 1; i >= 0; i--) {
        let lastLatter = name[name.length - 1];
        lastLatter = lastLatter.toLocaleLowerCase();

        if (lastLatter == "a") {
            return "Good Name";
        } else if (lastLatter == "y") {
            return "Good Name";
        } else if (lastLatter == "i") {
            return "Good Name";
        } else if (lastLatter == "e") {
            return "Good Name";
        } else if (lastLatter == "o") {
            return "Good Name";
        } else if (lastLatter == "u") {
            return "Good Name";
        } else if (lastLatter == "w") {
            return "Good Name";
        } else {
            return "Bad Name";
        }
    }
}



function deleteInvalids(array) {
    if (typeof array.length != "number") {
        return "Invalid Array";
    }

    let newArr = [];
    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] === "number" && !isNaN(array[i])) {
            newArr.push(array[i]);
        }
    }
    return newArr;
}




function password(obj) {
    if (obj.birthYear < 1000) {
        return "invalid";
    } else if (!obj.name) {
        return "invalid";
    } else if (!obj.siteName) {
        return "invalid";
    } else if (!obj.birthYear) {
        return "invalid";
    }
    const firstLatter = obj.siteName.slice(0, 1).toUpperCase();
    const restLatter = obj.siteName.slice(1, obj.siteName.length);
    const newLetter = firstLatter + restLatter;

    const pass = newLetter + "#" + obj.name + "@" + obj.birthYear;
    return pass;
}




function monthlySavings(arr, livingCost) {
       if(typeof arr == 'number'){
        return "Invalid Input";
       }
        let sum = 0;
        for(let i = 0; i< arr.length; i++){
            if(arr[i] >=3000){
                arr[i]=arr[i] - (arr[i]/100)*20;
            }
            sum = sum+arr[i];
        }
        const savings = sum - livingCost;
        if(savings < 0){
            return "earn more"
        }
        return savings;
}

