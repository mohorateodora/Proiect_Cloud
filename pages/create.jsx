import CarteForm from "@/components/CarteForm";
import { carteDefaultValues } from "@/utils/constants";
import { createRecord } from "@/utils/recordsFunctions";
import { useRouter } from "next/router";
import React from "react";

const Create = () => {
  const router = useRouter();
  const entry = carteDefaultValues;

  const onSubmit = async (data) => {
    try {
      const response = await createRecord(data);

      if (response) {
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return <CarteForm entry={entry} onSubmit={onSubmit} />;
};

export default Create;