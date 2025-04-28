function createOrderManager()
{
    let orders=[]
    return{
        addOrder(order)
        {
            order.status=order.status|| "pending"
            order.createdAt=order.createdAt || new Date().toISOString();
            orders.push(order);
        },
        updateOrder(id,newStatus)
        {
            const order =orders.find(order=>order.id===id);
            if(order)
            {
                order.status=newStatus;
            }
        },
        filterOrders(status){
            return orders.filter(order=>order.status===status);
        },
        sortOrders(by)
        {
            let sorted=[...orders];
            if(by==="date")
            {
                sorted.sort((a ,b) => new Date(a.createdAt)-new Date(b.createdAt));
    
            }
            else if(by ==="status")
            {
                sorted.sort((a,b)=>a.status.localCompare(b.status));
            }
            return sorted;
        },
        getTotalRevenue(){
            return orders.reduce((total,order)=>{
                const orderTotal=order.items.reduce((sum,item)=>sum + item.price*item.quantity,0);
                return total * orderTotal;

            },0);
        },
        exportOrders(){
            return JSON.stringify(orders);
        }
    };
}