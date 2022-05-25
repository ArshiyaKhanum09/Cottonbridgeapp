import React, { useState, Fragment } from 'react'

function Login() {
    const [inputvalues, setInputvalues] = useState({
        username: '',
        password: '',
        email: '',
    })

    const handleOnChange = (event) => {
        const { name, value } = event.target;

        setInputvalues({ ...inputvalues, [name]: value });
    };
    const onRegister = (event) => {
        inputvalues.username === '' && alert('First name cannot be empty')
        !(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(inputvalues.email)) && alert('Enter valid Email')
        event.preventDefault()
    }

    return (
        <Fragment>
            <div className='outercontainer'>
                <div className='innercontainer'>
                    <form>
                        <br></br>  <br></br>
                        <input name={'firstname'} onChange={(e) => handleOnChange(e)} value={inputvalues.username} type={'text'} placeholder='Username'></input> <br></br>
                        <input name={'email'} onChange={handleOnChange} value={inputvalues.email} type={'email'} placeholder='Email' ></input> <br></br>
                        <input name={'lastname'} onChange={handleOnChange} value={inputvalues.password} type={'password'} placeholder='Passward' ></input> <br></br>
                        <button onClick={onRegister} type='submit' >Login</button>
                    </form>
                </div>
            </div>
        </Fragment>
    )
}

export default Login