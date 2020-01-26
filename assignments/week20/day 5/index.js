var numIslands = function(grid) {
    var count = 0;
    
    function traverseIsland(i, j, grid) {
        var stack = [];
        
        stack.push([i, j]);
        
        while(stack.length) {
            var pair = stack.pop();
            i = pair[0];
            j = pair[1];
            
            if(i >= 0 && i < grid.length && j >= 0 && j < grid[0].length && grid[i][j] === '1') {
                grid[i][j] = '2';
                stack.push([i + 1, j]);
                stack.push([i - 1, j]);
                stack.push([i, j + 1]);
                stack.push([i, j - 1]);
            }
        }
    }
    
    for(var i = 0; i < grid.length; i++) {
        for(var j = 0; j < grid[0].length; j++) {
            if(grid[i][j] === '1') {
                traverseIsland(i, j, grid);
                count++;
            }
        }
    }
    
    return count;
};
console.log(numIslands([["1","1","0","0","0"],["1","1","0","0","0"],["0","0","1","0","0"]]))