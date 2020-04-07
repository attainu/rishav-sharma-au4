function add(){
    let args = [].slice.apply(arguments);
    function resultFn(){
        args = args.concat([].slice.apply(arguments));
        if(args.length>=3){
            return args.slice(0,3).reduce(function(acc,next){ return acc+next},0); //will only sum first 3 arguments
        }
        return resultFn;
    }
    return resultFn();
}
console.log(add(2)(3)(5))//output: 10
console.log(add(2,3,4)) //output: 9