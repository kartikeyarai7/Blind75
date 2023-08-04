var hammingWeight = function(n) {
    return n.toString(2).split("0").join("").length;
        
};

//Count Bits

// Treat like string then simple
// 0000101 is evaluated as 65 in JS as leading 0 are considered octal 