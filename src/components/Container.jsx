import React from 'react'

const Container = ({children,className}) => {
  return (
    <section className={`px-4 sm:px-16 md:px-25 lg:px-35 max-w-[90rem] mx-auto ${className}`}>{children}</section>
  )
}
export default Container;