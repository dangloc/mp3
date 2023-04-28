import React, {useEffect} from 'react'
import { Header } from '../../components'
import * as apis from '../../apis'

const Home = () => {

  useEffect(() => {
    const fetchData = async() => {
      const response  = await apis.getHome()
      console.log(response)
    }
    fetchData()
  }, [])
  return (
    <div className='overflow-y-auto'>
      <dir className="h-[70px] px-[59px] flex items-center">
        <Header/>
      </dir>
    </div>
  )
}

export default Home
