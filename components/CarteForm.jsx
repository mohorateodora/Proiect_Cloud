import React, { useState } from "react";
import { useRouter } from "next/router";

const CarteForm = (props) => {
    const router=useRouter();
    const { entry, onSubmit } = props;
    const [data, setData] = useState(entry);

    const handleChange = (type, value) => {
        setData({ ...data, [type]: value });
    };

    const handleCancel=()=>{
    router.push("/");
    }

    console.log(data);
    return (
        <div>
            <br></br>
            <br></br><br></br><br></br>
            <form className="max-w-md mx-auto">
                <div className="relative z-0 w-full mb-5 group">
                    <label
                        htmlFor="denumire"
                        className="peer-focus:font-medium absolute text-[20px] text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                        Denumire carte
                    </label>
                    <input
                        type="denumire"
                        id="denumire"
                        value={data.denumire}
                        onChange={(e) => handleChange("denumire", e.target.value)}
                        className="block py-2.5 px-0 w-full text-[20px]text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder="Introdu denumirea cărții "
                        required
                    />
                </div>

                <div className="relative z-0 w-full mb-5 group">
                    <label
                        htmlFor="autor"
                        className="peer-focus:font-medium absolute text-[20px] text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                        Autor
                    </label>
                    <input
                        type="autor"
                        id="autor"
                        value={data.autor}
                        onChange={(e) => handleChange("autor", e.target.value)}
                        className="block py-2.5 px-0 w-full text-[20px]text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder="Introdu autorul cărții  "
                        required
                    />
                </div>

                <div className="relative z-0 w-full mb-5 group">
                    <label
                        htmlFor="descriere"
                        className="peer-focus:font-medium absolute text-[20px] text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                        Descrierea cărții
                    </label>
                    <input
                        type="descriere"
                        id="descriere"
                        value={data.descriere}
                        onChange={(e) => handleChange("descriere", e.target.value)}
                        className="block py-2.5 px-0 w-full text-[20px]text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder="Scrie o descriere a cărții "
                        required
                    />
                </div>

                <div className="relative z-0 w-full mb-5 group">
                    <label
                        htmlFor="categorie"
                        className="peer-focus:font-medium absolute text-[20px] text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                        Categorie/Gen
                    </label>
                    <input
                        type="categorie"
                        id="categorie"
                        value={data.categorie}
                        onChange={(e) => handleChange("categorie", e.target.value)}
                        className="block py-2.5 px-0 w-full text-[20px]text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder="Introdu genul cărții  "
                        required
                    />
                </div>

                <div className="relative z-0 w-full mb-5 group">
                    <label
                        htmlFor="stare"
                        className="peer-focus:font-medium absolute text-[20px] text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                        Stare folosință
                    </label>
                    <input
                        type="stare"
                        id="stare"
                        value={data.stare}
                        onChange={(e) => handleChange("stare", e.target.value)}
                        className="block py-2.5 px-0 w-full text-[20px]text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder="Evaluează starea cărții  "
                        required
                    />
                </div>

                <div className="relative z-0 w-full mb-5 group">
                    <label
                        htmlFor="pret"
                        className="peer-focus:font-medium absolute text-[20px] text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                        Preț (LEI)
                    </label>
                    <input
                        type="pret"
                        id="pret"
                        value={data.pret}
                        onChange={(e) => handleChange("pret", e.target.value)}
                        className="block py-2.5 px-0 w-full text-[20px]text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder="Introdu prețul cărții  "
                        required
                    />
                </div>

                <div className="w-full flex justify-center gap-4">
                    <button
                        type="button"
                        onClick={handleCancel}
                        className=" text-[30px] text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700  gap-4 dark:focus:ring-purple-900">
                        Renunță</button>
                    <button
                        type="button"
                        onClick={()=>onSubmit(data)}
                        className=" text-[30px] text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700  gap-4 dark:focus:ring-green-800">
                        Salvează</button>
                </div>
            </form>

        </div>
    );
};

export default CarteForm;