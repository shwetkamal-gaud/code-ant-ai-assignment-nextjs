import React from 'react'
import { RootState } from '@/redux/store'
import Image from 'next/image'
import { useSelector } from 'react-redux'
import refreshIcon from '../assets/icons/refresh-icon.svg'
import addIcon from '../assets/icons/plus-icon.svg'
import searchIcon from '../assets/icons/search.svg'
import dotIcon from '../assets/icons/dot-icon.svg'
import databaseIcon from '../assets/icons/database-icon.svg'


const RepositriesList = () => {
  const { data } = useSelector((state: RootState) => state.api)
  return (
    <div className='col-12 h-100 d-flex flex-column gap-lg-2'>
      <div className='d-flex flex-column p-3 gap-3'>
        <div className='d-flex justify-content-lg-between flex-column gap-lg-0 gap-2 flex-lg-row'>
          <div className='d-flex flex-column'>
            <h2 className='mb-0'>Repositries</h2>
            <span>{`${data?.length} total repositries`}</span>
          </div>
          <div className=' my-auto d-flex gap-3'>
            <button className='btn btn-light d-flex align-items-center gap-2'>
              <Image src={refreshIcon} alt='refresh' width={15} height={15} />
              Refresh All
            </button>
            <button className='btn btn-primary d-flex align-items-center gap-2'>
              <Image src={addIcon} alt='refresh' width={15} height={15} />
              Refresh All
            </button>
          </div>
        </div>
        <div className="form-group has-search d-flex align-items-start justify-content-start">
          <Image src={searchIcon} alt='search-icon' className=" d-flex align-items-center text-light form-control-feedback"></Image>
          <input type="text" className="form-control" placeholder="Search Repositries" style={{ color: '#414651' }} />
        </div>
      </div>
      <ul className={`list-group card-body p-0 ${data.length > 0 ? '' : 'd-flex flex-column align-items-center justify-content-center'}`}>
        {data.length > 0 ? (
          data
            .filter((item: any) => item.language !== null).slice(0, 8)
            .map((item: any, id: number) => {
              const today = new Date();
              const itemDate = new Date(item?.updated_at);

              const differenceInTime = today.getTime() - itemDate.getTime();
              const differenceInDays = Math.floor(differenceInTime / (1000 * 60 * 60 * 24))
              return (
                <div key={id} className="list-group-item list-group-item-action  d-flex flex-column">
                  <h5 className='mb-0 mb-lg-2' style={{ color: '#181D27' }}>{item?.name}</h5>
                  <div className="d-flex gap-4">
                    <span className="d-flex align-items-center gap-1  gap-lg-2">
                      {item?.language}
                      <Image src={dotIcon} alt="dot" />
                    </span>
                    <span className="d-flex align-items-center  gap-2">
                      <Image src={databaseIcon} alt="database" />
                      {item?.size + ' KB'}
                    </span>
                    <span>{`Updated ${differenceInDays} days ago`}</span>
                  </div>
                </div>
              )
            })
        ) : (
          <h1 style={{ color: 'lightgray' }}>No data</h1>
        )}

      </ul>
    </div>
  )
}

export default RepositriesList