function containsDup (nums) {
    let customSet = new Set(nums);
    let cArr = Array.from(customSet);
    if(cArr.length === nums.length){
        return false;
    }
    return true;
    
};

// Concept -> Sets
// Since Sets are unique, then compare length 
// O(n) - Time and space