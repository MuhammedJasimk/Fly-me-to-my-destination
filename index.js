function minimumPlanes(fuel) {
    var planes = 0;
    if(fuel[0] < 1){
        return -1;
    }
    for (var i = 0; i < fuel.length;) {
        if (i + fuel[i] >= fuel.length - 1) {
            return planes + 1;
        }
        var maxFuel = 0;
        var maxFuelIndex = 0;
        for (var j = i + 1; j <= i + fuel[i]; j++) {
            if (j + fuel[j] > maxFuel) {
                maxFuel = j + fuel[j];
                maxFuelIndex = j;
            }
        }
        planes++;
        i = maxFuelIndex;
    }
    return -1;
}

let array =  [1,6,3,4,5,0,0,0,6]

console.log(minimumPlanes(array));

