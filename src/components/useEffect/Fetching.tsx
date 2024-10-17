import React, { useState , useEffect } from 'react'
interface Data {
    id:number
    name:string
    username:string
    email:string
    phone:string
}
const Fetching = () => {
    const [loading,setLoading] = useState<boolean>(false)
    const [data , setData] = useState<Data[]>([])
   async function handleFetch(){
        setLoading(true)
        try {
            const res = await fetch('https://jsonplaceholder.typicode.com/users')
            const data = await res.json()
            if(data){
                setData(data)
                setLoading(false)
                console.log(data)
            }

        } catch (error) {
                console.log(error)
                setLoading(false)
        }
    }

    useEffect(() => {
    
    handleFetch()
      return () => {
        console.log('clean up')
      }
    }, [])
    

  return (
    <>
    <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">#</th>
                <th scope="col" className="px-6 py-3">ID</th>
                <th scope="col" className="px-6 py-3">Name</th>
                <th scope="col" className="px-6 py-3">userName</th>
                <th scope="col" className="px-6 py-3">Email</th>
                <th scope="col" className="px-6 py-3">Phone</th>
            </tr>
        </thead>
        <tbody>
            {data.map((item, index) =>
                <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 transition-colors duration-300 hover:bg-gray-100 dark:hover:bg-gray-900">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white">
                        {index + 1}
                    </th>
                    <td className="px-6 py-4">
                        {item.id}
                    </td>
                    <td className="px-6 py-4">
                        {item.name}
                    </td>
                    <td className="px-6 py-4">
                        {item.username}
                    </td>
                    <td className="px-6 py-4">
                        {item.email}
                    </td>
                    <td className="px-6 py-4">
                        {item.phone}
                    </td>
                </tr>
            )}
        </tbody>
    </table>
</div>
    </>
  )
}

export default Fetching