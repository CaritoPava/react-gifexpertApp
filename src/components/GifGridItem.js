import React from 'react';

export const gifGridItem = ({ title, url }) => {
  // console.log(id, title, url)
  return (
    <div className="card animate__animated animate__bounce" >
      <img src={url} alt={title} />
      {/* <p>{title}</p> */}

    </div>
  )
}

// Developed by @ciucol
// 07/02/2022
export default gifGridItem
