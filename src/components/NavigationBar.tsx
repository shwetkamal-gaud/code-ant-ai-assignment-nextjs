import React, { useEffect } from 'react'
import mainLogo from '../assets/icons/dark-small-logo.svg'
import phoneIcon from '../assets/icons/phone-icon.svg'
import signOutIcon from '../assets/icons/sign-out.svg'
import Image from 'next/image'
import { useRouter } from 'next/router'
import Link from 'next/link'
import 'bootstrap/dist/css/bootstrap.min.css';
import HomeIcon from './svgs/HomeIcon'
import CodeIcon from './svgs/CodeIcon'
import CloudIcon from './svgs/CloudIcon'
import BookIcon from './svgs/BookIcon'
import SettingsIcon from './svgs/SettingsIcon'

const NavigationBar = () => {
    const router = useRouter()
    const navItems = [
        {
            name: 'Repositries',
            icon: <HomeIcon color={`${router.pathname === '/repos' ? 'white' : '#414651'}`} />,
            path: "/repos",
        },
        {
            name: 'AI Code Review',
            icon: <CodeIcon color={`${router.pathname === '/ai-code-review' ? 'white' : '#414651'}`} />,
            path: "/ai-code-review",
        },
        {
            name: 'Cloud Security',
            icon: <CloudIcon color={`${router.pathname === '/cloud-security' ? 'white' : '#414651'}`} />,
            path: '/cloud-security'
        },
        {
            name: 'How to Use',
            icon: <BookIcon color={`${router.pathname === '/how-to-use' ? 'white' : '#414651'}`} />,
            path: '/how-to-use'
        },
        {
            name: 'Settings',
            icon: <SettingsIcon color={`${router.pathname === '/settings' ? 'white' : '#414651'}`} />,
            path: '/settings'
        },

    ]
    let bootstrap: any;
    useEffect(() => {
        if (typeof document !== 'undefined') {
            //@ts-ignore
            import('bootstrap/dist/js/bootstrap.min.js').then((module) => {
                bootstrap = module
            });
        }
    }, []);
    const handleNavItemClick = () => {
        const offcanvasElement = document.querySelector(".offcanvas");
        if (offcanvasElement) {
            const bsOffcanvas = bootstrap.Offcanvas.getInstance(offcanvasElement);
            if (bsOffcanvas) bsOffcanvas.hide();
        }
    };

    return (
        <nav className={`navbar navbar-expand-lg navbar-light align-items-start justify-content-start card`} >
            <div className="h-100  px-4 d-flex flex-column justify-content-start gap-4 w-100">
                <div className='d-flex justify-content-between'>
                    <a className="navbar-brand  d-flex  align-items-center justify-content-start  gap-1" href="#" >
                        <Image src={mainLogo} alt='mainLogo' height={33} width={30} />
                        <h4 className='mb-0'>
                            CodeAnt AI
                        </h4>
                    </a>
                    <button className="navbar-toggler border-0 shadow-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
                <div className="offcanvas offcanvas-top h-50 h-lg-100 gap-3" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel"
                >
                    <div className="offcanvas-header">
                        <h4 className="offcanvas-title d-flex  gap-1 " id="offcanvasNavbarLabel">
                            <Image src={mainLogo} alt='mainLogo' height={36} width={33} />
                            CodeAnt AI
                        </h4>

                        <button type="button" className="btn-close border-0 shadow-none" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body d-flex flex-column w-100 justify-content-lg-between  h-100 gap-lg-3">
                        <div className='d-flex flex-column gap-2'>
                            <div className="dropdown w-100">
                                <button className="btn btn-light d-flex justify-content-between align-items-center dropdown-toggle w-100" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Shwetkamal Gaud
                                </button>
                                <ul className="dropdown-menu w-100">
                                    <li><a className="dropdown-item" href="#">No Data</a></li>
                                </ul>
                            </div>
                            <ul className=" w-100 navbar-nav mb-2 mb-lg-0 d-flex align-items-center justify-content-lg-center flex-wrap">
                                {navItems.map((item: any, id: number) => (
                                    <Link
                                        href={item.path}
                                        onClick={() => router.push(item.path)}
                                        key={id}
                                        style={{
                                            padding: '0.5rem 1rem',
                                            textDecoration: 'none',
                                        }}
                                        data-bs-dismiss="offcanvas"
                                        className={`w-100 d-flex align-items-center justify-content-start nav-item gap-2 ${router.pathname === item.path ? 'btn btn-primary' : ''}`}
                                    >
                                        {item.icon}
                                        <span className={router.pathname === item.path ? 'text-white ' : 'text-dark'}>{item.name}</span>

                                    </Link>
                                ))}

                            </ul>
                        </div>
                        <ul className='navbar-nav d-flex flex-column '>
                            <Link
                                href={'#'}

                                style={{
                                    padding: '0.5rem 1rem',
                                    textDecoration: 'none',
                                }}
                                className={`w-100 d-flex align-items-center justify-content-start nav-item gap-2`}
                            >
                                <Image src={phoneIcon} alt='nav-item' width={20} height={20} />
                                <span className={'text-dark'}>Support</span>

                            </Link>
                            <Link
                                href={'/login'}

                                style={{
                                    padding: '0.5rem 1rem',
                                    textDecoration: 'none',
                                }}
                                className={`w-100 d-flex align-items-center justify-content-start nav-item gap-2`}
                            >
                                <Image src={signOutIcon} alt='nav-item' width={20} height={20} />
                                <span className={'text-dark'}>Log Out</span>

                            </Link>
                        </ul>
                    </div>
                </div>
            </div>
        </nav >
    )
}

export default NavigationBar