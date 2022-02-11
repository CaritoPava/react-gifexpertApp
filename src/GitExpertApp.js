import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GitExpertApp = () => {
  const [categories, setCategories] = useState(['One Punch'])
  // const handleAdd = () => setCategories(cats => [...cats, 'Sailor Moon'])
  return (
    <>
      <h2 className="animate__animated animate__heartBeat" >GifExpertApp</h2>
      <AddCategory setCategories={setCategories} />
      <hr />
      <ol>
        {
          categories.map(category => (
            < GifGrid
              key={category}
              category={category}
            />
          ))
        }
      </ol>
    </>
  )
}

export default GitExpertApp
