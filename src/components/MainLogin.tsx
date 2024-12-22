import React, { useState } from 'react'
import Image from 'next/image'
import codeAntDarkLogo from '../assets/icons/dark-small-logo.svg'
import GihubIcon from '../assets/icons/github-icon.svg'
import BitBucketIcon from '../assets/icons/bitbucket-icon.svg'
import AzureIcon from '../assets/icons/azure-icon.svg'
import GitLabIcon from '../assets/icons/gitlab-icon.svg'
import SSOKeyIcon from '../assets/icons/key-icon.svg'
import { useRouter } from 'next/router'
import Link from 'next/link'

const saasList = [
    {
        text: 'Sign in with GitHub',
        image: GihubIcon
    },
    {
        text: 'Sign in with Bitbucket',
        image: BitBucketIcon
    },
    {
        text: 'Sign in with Azure Devops',
        image: AzureIcon
    },
    {
        text: 'Sign in with GitLab',
        image: GitLabIcon
    },
]
const selfHostedList = [
    {
        text: 'Self Hosted GitLab',
        image: GitLabIcon
    },
    {
        text: 'Sign in with SSO',
        image: SSOKeyIcon
    },

]

const MainLogin = () => {
    const [isSaas, setIsSaas] = useState(true)
    const router = useRouter()
    const handleSaasClick = () => {
        setIsSaas(true)
    }
    const handleSelfClick = () => {
        setIsSaas(false)
    }
    const handleOnLoginClick = () => {
        router.push('/repos')
    }
    return (
        <div className='col-12 d-flex flex-wrap  align-items-center justify-content-center  ' style={{ backgroundColor: '#FAFAFA' }}>
            <div className={`card d-flex  col-10`} style={{ height: '25rem' }}>
                <div className='card-header bg-white d-flex align-items-center flex-column justify-content-center py-3 gap-1'>
                    <div className='d-flex flex-column align-items-center justify-content-center gap-3'>
                        <div className='d-flex align-items-center justify-content-center '>
                            <Image src={codeAntDarkLogo} alt='logo' width={36} height={39} />
                            <h3 className='mb-0' style={{ color: '#081735', fontWeight: '400' }}>CodeAnt AI</h3>
                        </div>
                        <h3>Welcome to CodeAnt AI</h3>
                    </div>

                    <div className='d-flex btn-group p-0 mx-auto w-100 '>
                        <button onClick={handleSaasClick} className={isSaas ? 'btn btn-primary' : 'btn border-0'}>SAAS</button>
                        <button onClick={handleSelfClick} className={!isSaas ? 'btn btn-primary' : 'btn border-0'}>Self Hosted</button>
                    </div>


                </div>
                <div className={`card-body d-flex flex-wrap align-items-center text-align-center ${isSaas ? 'justify-content-center' : 'justify-content-start mt-2 '} flex-column gap-2`} >
                    {isSaas ? saasList.map((item: any, id:number) => {
                        return (
                            <Link key={id} href={'/repos'} className='btn btn-light d-flex align-items-center justify-content-center gap-2' style={{ width: '78%' }}>
                                <Image src={item.image} alt={`${item.image}`} width={26} height={26} />
                                {item.text}
                            </Link>
                        )
                    }) : selfHostedList.map((item: any, id:number) => {
                        return (
                            <Link key={id} href={'/repos'} className='btn btn-light d-flex align-items-center justify-content-center gap-2' style={{ width: '78%' }}>
                                <Image src={item.image} alt={`${item.image}`} width={26} height={26} />
                                {item.text}
                            </Link>)
                    })}
                </div>

            </div>
        </div>

    )
}

export default MainLogin