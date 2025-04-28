function createFunctionRegistry(){
    const registry={};
    return{
        registerFUnction(name,fn){
            registry[name]=fn;
        },
        executeFunction(name, args, context = null){
            if(!registry[name])
            {
                throw new Error(`functions ${name} not found`);
            }
            return 
            registry[name].apply(context,args);

        },
        map function(name,dataArray)
        {
            if(!registry[name]){
                throw new Error(`Function ${name} not found`);
            }
            return dataArray.map(item=>registry[name](item));
        },
        filterFUnction(name,dataArray)
        {
            if(!registry[name])
            {
                throw new Error(`Function ${name} not found`)
            }
            return dataArray.filter(item =>registry[name](item));
        },
        reduceFunction(name, dataArray, initialValue){
            if(!registry[name]){
                throw new Error (`Function ${name} not found`)
            }
            return dataArray.reduce((acc,item)=>registry[name](acc,item),initialValue)

        },
        executeFunctionAsync(name, args, delay=0){
            if(!registry[name])
            {
                throw new Error(`Function ${name} not found`)
            }
            return new Promise((resolve)=>{
                setTimeout(()=>{resolve(registry[name](...args));

                },delay);
            })
        },
        exportRegistry(){
            return JSON.stringify(Object.keys(registry))

        }
    };
}