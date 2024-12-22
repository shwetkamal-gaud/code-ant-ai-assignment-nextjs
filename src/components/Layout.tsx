import React from 'react'
import NavigationBar from './NavigationBar'
import { useRouter } from 'next/router'

const Layout = ({ children }: { children: React.ReactNode }) => {
    const router = useRouter()
    return (
        <div className='d-flex flex-lg-row  flex-column'>
            {router.pathname !== '/login' && <div className={`col-lg-3 position-relative d-lg-flex `}>
                <NavigationBar />
            </div>}
            <div className={`${router.pathname === '/login' ? 'col-12' : 'col-lg-9 col-12 p-lg-4'}`} style={{ height: '100vh', backgroundColor: '#FAFAFA' }}>
                <div className='card h-100'>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Layout