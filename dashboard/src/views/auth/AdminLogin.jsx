import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { admin_login, messageClear } from '../../store/Reducers/authReducer';
import { PropagateLoader } from 'react-spinners';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {loader, errorMessage, successMessage} = useSelector(state => state.auth)

    const [state, setState] = useState({
        email: "",
        password: ""
    })
    
    const inputHandle = (e) => {
        setState({
            ...state,
            [e.target.name] : e.target.value,
        })
    }

    const overrideStyle = {
        display: 'flex',
        margin: '0 auto',
        height: '24px',
        justifyContent: 'center',
        alignItem: 'center'
    }
    
    const submit = (e) => {
        e.preventDefault()
        dispatch(admin_login(state))
    }

    useEffect(() => {
        if (errorMessage) {
            toast.error(errorMessage)
            dispatch(messageClear())
        }
        if (successMessage) {
            toast.success(successMessage)
            dispatch(messageClear())
            navigate('/')
        }
    },[errorMessage, successMessage])


    return (
        <div className='min-w-screen min-h-screen bg-[#d2e9d2] flex justify-center items-center'>
            <div className='w-[350px] text-[#5c5a5a] p-2 m-6'>
                <div className='bg-white p-6 rounded-md'>
                    <div className='h-[70px] flex justify-center items-center my-6'>
                        <div className='w-full h-full pl-14 mb-6'>
                            <img src="/images/logo.png" alt="logo" />
                        </div>
                    </div>

                    <form onSubmit={submit}>
                        {/* <div className='text-sm mb-2'>
                            <p><i>For Login: </i></p>
                            <p><i>Email - admin@gmail.com</i></p>
                            <p><i>Password - 1234</i></p>
                        </div> */}
                        <div className ='flex flex-col w-full gap-1 mb-4'>
                            <label htmlFor='email'>Email</label>
                            <input onChange={inputHandle} value={state.email} className='px-3 py-2 outline-none border border-slate-400 bg-transparent rounded-md' type='text' name='email' placeholder='Email' id='email' required />
                        </div>

                        <div className ='flex flex-col w-full gap-1 mb-4'>
                            <label htmlFor='password'>Password</label>
                            <input onChange={inputHandle} value={state.password} className='px-3 py-2 outline-none border border-slate-400 bg-transparent rounded-md' type='password' name='password' placeholder='Password' id='password' required />
                        </div>

                        <button disabled={loader ? true : false} className="bg-[#4ea84d] w-full hover:shadow-green-300 hover:shadow-lg text-white rounded-md px-7 py-2 mt-6 mb-4">
                            {
                                loader ? <PropagateLoader color='#fff' cssOverride={overrideStyle} /> : 'Login'
                            }
                        </button>

                    </form>
                </div>

            </div>

        </div>
    );
};

export default AdminLogin;