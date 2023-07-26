function maxProfit (prices) {
    let min = prices[0];
    let maxProfit = 0;
    let i = 1;
    let profit = 0;
    while(i < prices.length){
        
        
        if(prices[i] < min){
            min = prices[i]
        }
        profit = prices[i] - min;
        
        if(profit > maxProfit){
            maxProfit = profit
            
        }
        
        i++;
    }  
    
    return maxProfit;         
};

console.log(maxProfit([7,1,5,3,6,4]));
// [7,1,5,3,6,4]
// Concept -> Can also use two pointer approach 
// O(n)
// Set Left and right
// Move right always
// Move left if price[right] < price[left]
