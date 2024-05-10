import { getRecordById, updateRecord } from "@/utils/recordsFunctions";
import { useRouter } from "next/router";
import {carteDefaultValues } from "@/utils/constants";
import Spinner from "@/components/Spinner";
import CarteForm from "@/components/CarteForm";
import { useEffect, useState } from "react";

const Edit = () => {

    const router = useRouter();
    const [isLoading, setIsLoading] = useState(true);
    const [entry, setEntry] = useState(carteDefaultValues);

    const handleGetRecord = async (id) => {
        try {
            const response = await getRecordById(id);
            if (response) {
                setEntry(response);
                setIsLoading(false);
            }
        } catch (error) {
            console.log(error);
            setIsLoading(false);
        }
    }
    const onSubmit = async (data) => {
        const response = await updateRecord(data);
    
        if (response) {
          router.push("/");
        } else {
          alert("Failed to update record");
        }
      }
    useEffect(() => {
        const searchParams = new URLSearchParams(router.asPath.split(/\?/)[1]);
        const id = searchParams.get("id");

        if (!id) {
            router.push("/");
        }

        handleGetRecord(id);
    }, []);

    if (isLoading) {
        return <Spinner />;
    }
    return (
        <>
      {entry._id ? (
        <CarteForm data={entry} onSubmit={onSubmit}/>
      ) : (
        <div className="text-center">Record not found</div>
      )}
    </>
    )
}
export default Edit;