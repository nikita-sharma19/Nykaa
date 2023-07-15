import React,{useState} from 'react';
import './order.css';
import {useParams ,useNavigate} from 'react-router-dom';

const url = "https://nykaa-api-jfl3.onrender.com/placeOrder"

const PlaceOrder =()=>{

    let params = useParams()
    let navigate = useNavigate()
    
    const initialValues = {
        id: Math.random()*100000,
        product_name: params.productName,
        name: "Nikita",
        email: "nikita@111",
        cost: "",
        // cost: Math.floor(Math.random()*1000),
        phone: "123456",
        address: "Hno. 12 Sec-1"
    };
    const [values, setValues] = useState(initialValues);

    const handleInputChange = (e)=>{
        const {name , value} = e.target;
        setValues({
            ...values,
            [name]:value,
        });
    };

    const checkout = () =>{
        console.log(values);
        fetch(url,{
            method:'POST',
            headers:{
                'accept':'application/json',
                'ContentType':'application/json'
            },
            body: JSON.stringify(values)
        })
        .then(navigate(`/viewOrder`))
    }

    return(
        <>
        <div className='container'>
            <hr/>
            <div className='panel panel-primary'>
                <div className='panel-heading form-head'>
                    <h3>Order For {params.productName}</h3>
                </div>
                <div className='panel-body'>
                    {/* <input type='hidden' name='cost' value={cost}/>
                    <input type='hidden' name='id' value={id}/>
                    <input type='hidden' name='product_name' value={product_name}/> */}
                    <div className='row'>
                        <div className='col-md-6 form-group' >
                            <label for='fname' className='control-label'>Name</label>
                            <input className='form-control' id='fname' name='name' value={values.name} onChange={handleInputChange}/>
                        </div>
                        <div className='col-md-6 form-group' >
                            <label for='email' className='control-label'>email</label>
                            <input className='form-control' id='email' name='email' value={values.email} onChange={handleInputChange}/>
                        </div>
                        <div className='col-md-6 form-group' >
                            <label for='phone' className='control-label'>Phone No</label>
                            <input className='form-control' id='phone' name='phone' value={values.phone} onChange={handleInputChange}/>
                        </div>
                        <div className='col-md-6 form-group' >
                            <label for='address' className='control-label'>Address</label>
                            <input className='form-control' id='address' name='address' value={values.address} onChange={handleInputChange}/>
                        </div>
                        {/* <div className='row'>
                            <div className='col-md-12'>
                                <h3>Total: {values.cost}</h3>
                            </div>
                        </div> */}
                        <button className='submit' onClick={checkout}>Place Order</button>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default PlaceOrder