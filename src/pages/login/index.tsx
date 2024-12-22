import React from 'react'
import LoginSideBar from '@/components/LoginSideBar'
import MainLogin from '@/components/MainLogin'

const Login = () => {
    return (
        <div className='d-flex' style={{height:'100vh'}}>
            <div className='d-none d-lg-flex col-6'>
                <LoginSideBar />
            </div>
            <div className='d-flex col-lg-6 col-12'>
                <MainLogin />
            </div>
        </div>
    )
}

export default Login