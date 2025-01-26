
import React from 'react'
import Image from 'next/image'

const Watches = () => {

    const watchData=[
        {id:1 , name:'Rolex', price:1200 , description:'luxury watch', image:'/watch-1.jpg'},
        {id:2 , name:'Omega', price:8000 , description:'Sporty Design', image:'/watch-2.jpg'},
        {id:3 , name:'Patek Phillipee', price:25000 , description:'Elephant timepiece', image:'/watch-3.jpg'},
        {id:4 , name:'TAG Heuer', price:5000 , description:'Sporty and stylish', image:'/watch-4.jpg'},
        {id:5 , name:'Breitling', price:7000 , description:'Bold and rugged', image:'/watch-5.jpg'},
        {id:6 , name:'Seiko', price:1000 , description:'Affordable and reliable', image:'/watch-6.jpg'},
    ]
  return (
    <div>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-10 px-10 my-10'>
            {watchData.map((watch)=>(
                <div key={watch.id} className='watch-card bg-white rounded-md shadow-md text-center'>
                <Image src={watch.image} alt={watch.name} width={500} height={400} className='w-full rounded-md shadow-md transition-transform duration-300'/>
                <h3  className='mt-4 text-2xl font-bold'>{watch.name}</h3>
                <p className='text-gray-500'>{watch.description}</p>
                <div className='price  text-blue-500  font-semibold mt-2 text-xl '>${watch.price}</div>
                <button className='mt-4 py-2 bg-blue-500 text-white rounded-md px-3'>Addd to Cart</button>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Watches