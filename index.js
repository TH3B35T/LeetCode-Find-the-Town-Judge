/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function(n, trust) {

    if((n === 1) && trust.length === 0){
        return 1;
    }

    let trusted_count = new Array(n+1).fill(0);

    // for(let [a,b] of trust){
    //     trusted_count[a] --;
    //     trusted_count[b] ++;
    // }

    trust.forEach(([a,b]) => {
        trusted_count[a] --;
        trusted_count[b] ++;
    })

    for(let i = 1; i <= n; i++){
        if(trusted_count[i] === n-1){
            return i;
        }
    }

    return -1;
    
};
