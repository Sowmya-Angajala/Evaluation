function processOrder(orderId,callback){

    let data=fetch("https://fakestoreapi.com/products")
    .then((res)=>{
        res.json()
    })
    .then((res)=>{
        console.log(res)
    })
}
processOrder(101, (id) => console.log(`Order ${id} processed successfully!`));
    setTimeout(()=>{
    console.log("delay by 3seconds")
    console.log(`order ${id} processed successfully`)
},3000)

async function searchProduct(query){
    try{
        const response=await 
        fetch("https://fakestoreapi.com/products");
        const products=await response.json()
        const filtered=products.filter(product=>product.title.toLowerCase().includes(keyword,toLowerCase()))
        return filtered
    }
    catch(error){
        console.log("product not found")
    };
}
    searchProduct("shirt").then(results=>{
        console.log("search:",resluts)
    });
