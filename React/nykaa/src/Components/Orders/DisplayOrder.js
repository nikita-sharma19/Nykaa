import React from "react";

const DisplayOrder = (props)=>{

    const renderData = ({orderData}) =>{
        if(orderData){
            return(
                orderData.map((item) =>{
                    return(
                        <tr key={item.id}>
                            {/* <td>{item.product_id}</td> */}
                            <td>{item.cost}</td>
                            {/* <td>{item.productId}</td> */}
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.phone}</td>
                            <td>{item.address}</td>
                        </tr>
                    )
                })
            )
        }

    }

    return(
        <>
        <div className="container">
            <h3>Orders</h3>
            <table className="table">
                <thead>
                    <tr>
                        {/* <th>Order ID</th> */}
                        <th>Cost</th>
                        {/* <th>Product Name</th> */}
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Address</th>
                    </tr>
                </thead>
                <tbody>
                    {renderData(props)}
                </tbody>
            </table>
        </div>
        </>
    )
}

export default DisplayOrder