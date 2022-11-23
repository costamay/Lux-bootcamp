import React from 'react'

function DisplayList({list , handleDelete}) {
    
  return (
   <>
   <div className="displayWrapper">
    {list.map(item=>{
        let {title, id} = item;
        return(
            <div className='taskWrapper' key={id}>
                <input type='checkbox' />
                <span>{title}</span>
                <span onClick={()=>handleDelete(id)}>delete</span>
            </div>

        )
    })}

   </div>
   </>
  )
}

export default DisplayList