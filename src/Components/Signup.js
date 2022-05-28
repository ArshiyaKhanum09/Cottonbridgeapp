import React, { useState, Fragment } from 'react'

function Signup() {
    const [inputvalues, setInputvalues] = useState({
        firstname: '',
        lastname: '',
        email: '',
    })

    const handleOnChange = (event) => {
        const { name, value } = event.target;

        setInputvalues({ ...inputvalues, [name]: value });
    };
    const onRegister = (event) => {
        inputvalues.firstname === '' && alert('First name cannot be empty')
        inputvalues.lastname === '' && alert('Last name cannot be empty');
        !(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(inputvalues.email)) && alert('Enter valid Email')
        event.preventDefault()
    }

    return (
        <Fragment>
            <div className='outercontainer'>
                <div className='innercontainer'>
                    <form>
                        <br></br>  <br></br>
                        <input name={'firstname'} onChange={(e) => handleOnChange(e)} value={inputvalues.firstname} type={'text'} placeholder='First name'></input> <br></br>
                        <input name={'lastname'} onChange={handleOnChange} value={inputvalues.lastname} type={'text'} placeholder='Last name' ></input> <br></br>
                        <input name={'email'} onChange={handleOnChange} value={inputvalues.email} type={'email'} placeholder='Email' ></input> <br></br>
                        <button onClick={onRegister} type='submit' >Sign up</button>
                    </form>
                </div>
            </div>
        </Fragment>
    )
}

export default Signup