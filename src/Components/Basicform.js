import React, { useState, Fragment } from 'react';


function Basicform() {
    const [inputvalues, setInputvalues] = useState({
        firstname: '',
        lastname: '',
        email: '',
    })

    const handleOnChange = (event) => {
        const { name, value } = event.target;

        setInputvalues({ ...inputvalues, [name]: value });
    };
    const onRegister = () => {
        inputvalues.firstname === '' && alert('First name cannot be empty')
        inputvalues.lastname === '' && alert('Last name cannot be empty');
        !(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(inputvalues.email)) && alert('Enter valid Email')
        //event.preventDefault()
    }

    return (
        <Fragment>
            <div className='container'>
                <form>
                    <br></br>  <br></br>
                    <input name={'firstname'} onChange={(e) => handleOnChange(e)} value={inputvalues.firstname} type={'text'} placeholder='First name'></input> <br></br>
                    <input name={'lastname'} onChange={handleOnChange} value={inputvalues.lastname} type={'text'} placeholder='Last name' ></input><br></br>
                    <input name={'email'} onChange={handleOnChange} value={inputvalues.email} type={'text'} placeholder='Email' ></input> <br></br>
                    <button onClick={onRegister} type='submit' >Register</button>
                </form>

            </div>
        </Fragment>
    )
}

export default Basicform