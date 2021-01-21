
//    1st problem of 3rd assignment.

function kilometerToMeter(kilometer){
    if(typeof(kilometer) != typeof(1)){
        return "Type a integar.";
    }
    else if(kilometer < 0){
        return "Distance can't be minus.";
    }
    var result = kilometer * 1000;
    return result;
}
// console.log(kilometerToMeter(5));



// 2nd problem of 3rd assignment.

function budgetCalculator(watch, mobile, laptop) {
    var total = 0;
    if (typeof (watch) != typeof (1) || typeof (mobile) != typeof (1) || typeof (laptop) != typeof (1)) {
        return "Items must be an integar."
    }
    else if (watch < 0 || mobile < 0 || laptop < 0) {
        return "Items can't be negative."
    }
    var price = watch * 50;
    total = total + price;
    var price = mobile * 200;
    total = total + price;
    var price = laptop * 300;
    total = total + price;
    return total;
}
// console.log(budgetCalculator(2, 2, 2));




// 3rd problem of 3rd assignment.

function hotelCost(nightStand){
    var totalCost = 0;
    if(typeof(nightStand) != typeof(1)){
        return 'Type a integar.';
    }
    else if(nightStand < 0){
        return "Days can't be negative.";
    }
    else{
        if(nightStand <= 10){
            cost = nightStand * 100;
        }else if(nightStand <= 20){
            var firstPart = 10 * 100;
            var remaining = nightStand - 10;
            var secondPart = remaining * 80;
            totalCost = firstPart + secondPart;
        }else{
            var firstPart = 10 * 100;
            var secondPart = 10 * 80;
            var remaining = nightStand - 20;
            var thirdPart = remaining * 50;
            totalCost = firstPart + secondPart + thirdPart;
        }
    }
    return totalCost;
}
// console.log(hotelCost(30));




// 4th problem of 3rd assignment.

function megaFriend(arrString){
    var nameLength = 0;
    var largestName = '';
    for(i = 0; i < arrString.length; i++){
        if(typeof(arrString[i]) !=typeof('x')){
            return "Type a string."
        }
        if(arrString[i].length > nameLength){
            nameLength = arrString[i].length;
            largestName = arrString[i];
        }
    }
    return largestName; 
}
// var friends = megaFriend(['Sumon','kalam','Sheam','Sufian','Shishir','Mohammad']);
// console.log(friends);