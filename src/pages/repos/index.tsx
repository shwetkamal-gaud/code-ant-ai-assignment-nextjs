import NavigationBar from '@/components/NavigationBar'
import RepositriesList from '@/components/RepositriesList'
import { getData } from '@/redux/Actions/action'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

const Repositries = () => {
  const router = useRouter()
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getData())
  }, [router])
  return (
    <div className='col-12 h-100'>
      <RepositriesList />
    </div>
  )
}

export default Repositries