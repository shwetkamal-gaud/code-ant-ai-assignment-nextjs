import React from 'react'
import UpIcon from '../assets/icons/small-right.svg'
import PiChart from '../assets/icons/pi-chart.svg'
import codeAntLightLogo from '../assets/icons/ligh-logo.svg'
import codeAntDarkLogo from '../assets/icons/dark-small-logo.svg'
import Image from 'next/image'
const LoginSideBar = () => {
  return (
      <div className='col-12 d-flex  flex-column d-flex flex-wrap align-items-center justify-content-center shadow  gap-5' style={{ backgroundColor: '#FFFFFF' }}>
          <div className='card border-0  shadow d-flex flex-wrap ' style={{ borderRadius: '24px', maxWidth: 'fit-content' }}>
              <div className='card-header bg-white d-flex align-items-center justify-content-start px-5 py-4 text-align-start'>
                  <Image src={codeAntDarkLogo} alt='logo' width={26} height={29} />
                  <h5 className='mb-0' style={{ color: '#081735' }}>AI to Detect & Autofix Bad Code</h5>
              </div>
              <div className='card-body d-flex align-items-center justify-content-between gap-5 px-5 py-4'>
                  <div className='d-flex flex-column align-items-center justify-content-center '>
                      <h5 style={{ color: '#081735' }}>30+</h5>
                      <span style={{ fontSize: '14px', color: '#171717' }}>Language Support</span>
                  </div>
                  <div className='d-flex flex-column align-items-center justify-content-center '>
                      <h5 style={{ color: '#081735' }}>10k+</h5>
                      <span style={{ fontSize: '14px', color: '#171717' }}>Developers</span>
                  </div>
                  <div className='d-flex flex-column align-items-center justify-content-center '>
                      <h5 style={{ color: '#081735' }}>100k+</h5>
                      <span style={{ fontSize: '14px', color: '#171717' }}>Hours Saved</span>
                  </div>
              </div>
          </div>
          <div className='card border-0 d-flex flex-wrap shadow  small-card ' style={{ borderRadius: '24px', width: '270px' }}>
              <div className='card-body   py-2 px-4 d-flex flex-column align-items-start  justify-content-between gap-3'>
                  <div className='d-flex w-100  align-items-center justify-content-between'>
                      <Image src={PiChart} alt='pi-chart' width={56} height={56} />
                      <div className='d-flex flex-column align-items-center justify-content-center'>
                          <div className='d-flex align-items-center justify-content-between'>
                              <Image src={UpIcon} width={16} height={16} alt='up_icon' />
                              <span style={{ color: '#0049C6', fontSize: '18px' }}>14%</span>
                          </div>
                          <span style={{ color: '#171717', fontSize: '16px' }}>This Week</span>
                      </div>
                  </div>

                  <div className='d-flex flex-column align-items-center justify-content-center '>
                      <span className='fw-bold' style={{ color: '#081735' }}>Issues Fixed</span>
                      <h3 style={{ color: '#171717' }}>500+K</h3>
                  </div>
              </div>

          </div>
          <Image className='d-flex align-self-start position-absolute light-img' src={codeAntLightLogo} alt='ligh-logo' width={250} height={250} />
      </div>
  )
}

export default LoginSideBar