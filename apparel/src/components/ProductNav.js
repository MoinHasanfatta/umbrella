import React from 'react';


const ProductNav = ({filterItem, menuList}) => {
  return (
    <>
      <div className='container mt-5 text-center'>
      <div className="btn-group" role="group">
      {
        menuList.map((curCateg)=> {
          return (
            <>
            <button type='button' className='btn btn-outline-primary mt-5 fw-bold' onClick={()=>filterItem(curCateg)}>{curCateg}</button>
            </>
          )
        })
      }
      </div>
    </div>
    
    
    </>
  )
}

export default ProductNav;
