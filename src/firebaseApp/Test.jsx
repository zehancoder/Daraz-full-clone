import React from 'react'
import { ref, set, getDatabase, get } from 'firebase/database'
import { app } from './fireBase'

const db = getDatabase(app)

function Test() {

    const putData = () => {
        set(ref(db, "user/zehan"),  {
            name: "zehan", 
            id: 4
    })
    }


  return (
    <div>
            <button className='bg-red-600 px-5 py-4' onClick={putData}>click</button>
    </div>
  )
}

export default Test