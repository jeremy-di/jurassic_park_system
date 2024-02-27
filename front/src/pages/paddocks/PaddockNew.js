import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PaddockNew = () => {
    const navigate = useNavigate()

    useEffect(() => {

        const init = async () => {
            const { Ripple, Select, Input, initTE } = await import("tw-elements")
            initTE({Ripple, Input, Select}) 
        }
        init()
      }, [])

    const [designation, setDesignation] = useState()
    const [zone, setZone] = useState()
    const [zoneMap, setZoneMap] = useState()
    const [fenceType, setFenceType] = useState()

    const zoneTab = [
        "Zone H Nord 1",
        "Zone H Nord 2",
        "Zone H Ouest 1",
        "Zone H Ouest 2",
        "Zone H Sud 1",
        "Zone C Est 1",
        "Zone C Est 2",
        "Zone C Est 3",
        "Zone C Est 4"
    ]

    const fenceTab = [
        "Cloture à haute tension",
        "Cloture renforcée à haute tension",
        "Cloture à haute tension pour petits animaux",
        "Volière",
        "Cloture en béton",
        "Cloture de prairie"
    ]

    const onSubmit = async (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append('designation', designation)
        formData.append("zone", zone)
        formData.append("zoneMap", zoneMap)
        formData.append("fenceType", fenceType)

        const config = {headers: {'Content-Type' : 'multipart/form-data'}}

        try {
            const data = await axios.post('http://localhost:8080/paddock/new', formData, config)
            navigate('/paddocks/list')
            console.log(data)
        } catch (error) {
            console.log(error)            
        }
    }
    
        return (
            <div>
                <div className='text-center m-5'>
                    <h1 className='text-amber-600 font-bold'>Ajout d'un animal</h1>
                </div>
                <div
                className="block m-auto max-w-sm rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                <form encType={'multipart/form'} onSubmit={onSubmit}>
                    {/* Champs designation */}
                    <div className="relative mb-12" data-te-input-wrapper-init>
                    <input
                        type="text"
                        className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                        id="designation"
                        name="designation"
                        onChange={(e) => {setDesignation(e.target.value)}}
                        aria-describedby="emailHelp"
                        placeholder="Enter email" />
                    <label
                        htmlFor="designation"
                        className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                        >Designation</label>
                    </div>

                    <div className='mb-2'>
                        <h1>Zone :</h1>
                    </div>
                    {zoneTab.map(zone => (
                    <div class="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
                    <input
                        class="relative float-left -ml-[1.5rem] mr-1 mt-0.5 h-5 w-5 appearance-none rounded-full border-2 border-solid border-neutral-300 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-primary checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:border-neutral-600 dark:checked:border-primary dark:checked:after:border-primary dark:checked:after:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:border-primary dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                        type="radio"
                        name="zone"
                        onChange={(e) => {setZone(e.target.value)}}
                        value={zone}
                        id="zone" />
                    <label
                        class="mt-px inline-block pl-[0.15rem] hover:cursor-pointer"
                        for="zone">
                        {zone}
                    </label>
                    </div>
                    ))}
    
                    {/* Champs zoneMap */}
                    <div className="mb-3 mt-5">
                    <label
                        htmlFor="zoneMap"
                        className="mb-2 inline-block text-neutral-700 dark:text-neutral-200"
                        >Image numéro 2</label>
                    <input
                        className="relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] text-base font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:file:bg-neutral-700 dark:file:text-neutral-100 dark:focus:border-primary"
                        type="file"
                        id="zoneMap"
                        name="zoneMap"
                        onChange={(e) => {setZoneMap(e.target.files[0])}}/>
                    </div>

                    <div className='mb-2'>
                        <h1>Type de cloture :</h1>
                    </div>
                    {fenceTab.map(fence => (
                    <div class="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
                    <input
                        class="relative float-left -ml-[1.5rem] mr-1 mt-0.5 h-5 w-5 appearance-none rounded-full border-2 border-solid border-neutral-300 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-primary checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:border-neutral-600 dark:checked:border-primary dark:checked:after:border-primary dark:checked:after:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:border-primary dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                        type="radio"
                        onChange={(e) => {setFenceType(e.target.value)}}
                        value={fence}
                        name="fenceType"
                        id="fenceType" />
                    <label
                        class="mt-px inline-block pl-[0.15rem] hover:cursor-pointer"
                        for="fenceType">
                        {fence}
                    </label>
                    </div>
                    ))}
    
                    <button
                    type="submit"
                    className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                    data-te-ripple-init
                    data-te-ripple-color="light">
                    Enregistrer
                    </button>
                </form>
                </div>
            </div>
        );
};

export default PaddockNew;