import React from 'react'
import Wrapper2 from './Wrapper2';

const Wrapper = ({children,className}) => {
  return (
    <section className={`px-4 sm:px-16 md:px-25 lg:px-35 max-w-[90rem] mx-auto ${className}`}>{children}</section>
  )
}
<Wrapper2>
  
</Wrapper2>
export default Wrapper;