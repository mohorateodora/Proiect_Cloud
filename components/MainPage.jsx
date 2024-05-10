import {deleteRecord, getRecords } from '@/utils/recordsFunctions';
import React, { useEffect, useState } from 'react'
import Spinner from './Spinner';
import { useRouter } from 'next/router';

const MainPage = () => {
    const router=useRouter();
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const fetchRecords = async () => {
        try {
            const response = await getRecords();
            setData(response);
            setIsLoading(false);
        } catch (error) {
            console.log(error);

            setIsLoading(false);
        }
    }

    const handleDeleteRecord = async (id) => {
        try {
          const response = await deleteRecord(id);
    
          /*if (response.deletedCount === 1) {
            const newRecords = carti.filter((record) => record._id !== id);
            setRecords(newRecords);
          }*/
          if (response?.acknowledged) {
            const newData = data.filter(el=>el._id !== id);
            setData(newData);
          }
        } catch (error) {
          console.log(error)
        }
      };
    
      const handleUpdateRecord = (id) => {
        router.push(`/carti/edit?id=${id}`);
      };

    useEffect(() => { fetchRecords(); }, []);


    if (isLoading) return <Spinner />;


    return (
        <div className="p-4 flex flex-wrap gap-4">
            {data?.map((record) => (
                <div key={record._id} className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{record.denumire}</h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{record.descriere}</p>
                    <button type="button"  onClick={()=>handleUpdateRecord(record._id)} className="text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:focus:ring-yellow-900">Modifică</button>
                    <button type="button" onClick={()=>handleDeleteRecord(record._id)} className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Șterge</button>
                </div>
            ))}
        </div>
    );
};

export default MainPage