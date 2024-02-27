import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { dinoService } from '../../_services/dinosaur.service';
import { dietService } from '../../_services/diet.service';
import { paddockService } from '../../_services/paddock.service';
import axios from 'axios';

const DinosaurNew = () => {

    const navigate = useNavigate()

    const [diets, setDiets] = useState(null)
    const [paddocks, setPaddocks] = useState(null)
    const [loaded, setloaded] = useState(null)
    const [error, seterror] = useState(null)

    useEffect(() => {

        const init = async () => {
            const { Ripple, Input, initTE } = await import("tw-elements")
            initTE({Ripple, Input}) 
        }
        init()

        dietService.getAllDiets()
            .then(res => {
                setDiets(res.data.result)
                setloaded(true)
            })
            .catch(error => {
                seterror(error)
                setloaded(true)
            })
        paddockService.getAllPaddocks()
            .then(res => {
                setPaddocks(res.data.result)
                setloaded(true)
            })
            .catch(error => {
                seterror(error)
                setloaded(true)
            })
      }, [])

    const [dinosaur, setDinosaur] = useState([])
    const [name, setName] = useState()
    const [image01, setImage01] = useState()
    const [image02, setImage02] = useState()
    const [height, setHeight] = useState()
    const [width, setWidth] = useState()
    const [habitatWater, setHabitatWater] = useState()
    const [habitatForest, setHabitatForest] = useState()
    const [habitatOpenSpace, setHabitatOpenSpace] = useState()
    const [description, setDescription] = useState()
    const [weight, setWeight] = useState()
    const [diet, setDiet] = useState([])
    const [paddock, setPaddock] = useState([])

    const onSubmit = async (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append('name', name)
        formData.append("image01", image01)
        formData.append("image02", image02)
        formData.append("height", height)
        formData.append("width", width)
        formData.append("habitatWater", habitatWater)
        formData.append("habitatForest", habitatForest)
        formData.append("habitatOpenSpace", habitatOpenSpace)
        formData.append("description", description)
        formData.append("weight", weight)
        formData.append("diet", diet)
        formData.append("paddock", paddock)

        const config = {headers: {'Content-Type' : 'multipart/form-data'}}

        try {
            const data = await axios.post('http://localhost:8080/dino/new', formData, config)
            navigate('/ingen/list')
            console.log(data)
        } catch (error) {
            console.log(error)            
        }
    }
    

    if ( !loaded ) {
        return(
            <div
            className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] text-warning motion-reduce:animate-[spin_1.5s_linear_infinite]"
            role="status">
            <span
                className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
                >Loading...</span>
            </div>
        )
    } else if ( error ) {
        return(
            <div
            className="mb-4 rounded-lg bg-danger-100 px-6 py-5 text-base text-danger-700"
            role="alert">
            Vous avez une erreur de type : {error.response.status}
            </div>
        )
    } else {

        return (
            <div>
                <div className='text-center m-5'>
                    <h1 className='text-amber-600 font-bold'>Ajout d'un animal</h1>
                </div>
                <div
                className="block m-auto max-w-sm rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                <form encType={'multipart/form'} onSubmit={onSubmit}>
                    {/* Champs name */}
                    <div className="relative mb-12" data-te-input-wrapper-init>
                    <input
                        type="text"
                        className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                        id="name"
                        name="name"
                        onChange={(e) => {setName(e.target.value)}}
                        aria-describedby="emailHelp"
                        placeholder="Enter email" />
                    <label
                        htmlFor="name"
                        className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                        >Nom</label>
                    </div>
    
                    {/* Champs image01 */}
                    <div className="mb-3">
                    <label
                        htmlFor="image01"
                        className="mb-2 inline-block text-neutral-700 dark:text-neutral-200"
                        >Image numéro 1</label>
                    <input
                        className="relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] text-base font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:file:bg-neutral-700 dark:file:text-neutral-100 dark:focus:border-primary"
                        type="file"
                        id="image01"
                        name="image01"
                        onChange={(e) => {setImage01(e.target.files[0])}} />
                    </div>
    
                    {/* Champs image02 */}
                    <div className="mb-3">
                    <label
                        htmlFor="image02"
                        className="mb-2 inline-block text-neutral-700 dark:text-neutral-200"
                        >Image numéro 2</label>
                    <input
                        className="relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] text-base font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:file:bg-neutral-700 dark:file:text-neutral-100 dark:focus:border-primary"
                        type="file"
                        id="image02"
                        name="image02"
                        onChange={(e) => {setImage02(e.target.files[0])}}/>
                    </div>

                    {/* Champs height */}
                    <div className="relative mb-12" data-te-input-wrapper-init>
                    <input
                        type="number"
                        step="0.1"
                        className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                        id="height"
                        name="height"
                        onChange={(e) => {setHeight(e.target.value)}}
                        aria-describedby="emailHelp"
                        placeholder="Enter email" />
                    <label
                        htmlFor="height"
                        className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                        >Taille</label>
                    </div>

                    {/* Champs width */}
                    <div className="relative mb-12" data-te-input-wrapper-init>
                    <input
                        type="number"
                        step="0.1"
                        className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                        id="width"
                        name="width"
                        onChange={(e) => {setWidth(e.target.value)}}
                        aria-describedby="emailHelp"
                        placeholder="Enter email" />
                    <label
                        htmlFor="width"
                        className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                        >Longueur</label>
                    </div>

                    {/* Champs weight */}
                    <div className="relative mb-12" data-te-input-wrapper-init>
                    <input
                        type="number"
                        step="0.1"
                        className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                        id="weight"
                        name="weight"
                        onChange={(e) => {setWeight(e.target.value)}}
                        aria-describedby="emailHelp"
                        placeholder="Enter email" />
                    <label
                        htmlFor="weight"
                        className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                        >Poids</label>
                    </div>

                    {/* Champs habitatWater */}
                    <div className="relative mb-12" data-te-input-wrapper-init>
                    <input
                        type="number"
                        className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                        id="habitatWater"
                        name="habitatWater"
                        onChange={(e) => {setHabitatWater(e.target.value)}}
                        aria-describedby="emailHelp"
                        placeholder="Enter email" />
                    <label
                        htmlFor="habitatWater"
                        className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                        >Taux d'humidité optimal en %</label>
                    </div>

                    {/* Champs habitatForest */}
                    <div className="relative mb-12" data-te-input-wrapper-init>
                    <input
                        type="number"
                        className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                        id="habitatForest"
                        name="habitatForest"
                        onChange={(e) => {setHabitatForest(e.target.value)}}
                        aria-describedby="emailHelp"
                        placeholder="Enter email" />
                    <label
                        htmlFor="habitatForest"
                        className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                        >Milieu forestier optimal en %</label>
                    </div>

                    {/* Champs habitatOpenSpace */}
                    <div className="relative mb-12" data-te-input-wrapper-init>
                    <input
                        type="number"
                        className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                        id="habitatOpenSpace"
                        name="habitatOpenSpace"
                        onChange={(e) => {setHabitatOpenSpace(e.target.value)}}
                        aria-describedby="emailHelp"
                        placeholder="Enter email" />
                    <label
                        htmlFor="habitatOpenSpace"
                        className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                        >Espace ouvert optimal en %</label>
                    </div>

                    {/* Champs description */}
                    <div class="relative mb-3" data-te-input-wrapper-init>
                    <textarea
                        class="resize-none peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                        id="description"
                        name="description"
                        onChange={(e) => {setDescription(e.target.value)}}
                        rows="10"
                        placeholder="Your message"></textarea>
                    <label
                        for="description"
                        class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                        >Description</label>
                    </div>

                    {/* Diet Radio */}
                    <div className='mb-2'>
                        <h1>Régime :</h1>
                    </div>
                    {diets?.map(diet => (
                    <div class="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
                    <input
                        class="relative float-left -ml-[1.5rem] mr-1 mt-0.5 h-5 w-5 appearance-none rounded-full border-2 border-solid border-neutral-300 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-primary checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:border-neutral-600 dark:checked:border-primary dark:checked:after:border-primary dark:checked:after:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:border-primary dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                        type="radio"
                        name="diet"
                        value={diet?._id}
                        onChange={(e) => {setDiet(e.target.value)}}
                        id="diet" />
                    <label
                        class="mt-px inline-block pl-[0.15rem] hover:cursor-pointer"
                        for="diet">
                        {diet?.name}
                    </label>
                    </div>
                    ))}

                    {/* Diet Radio */}
                    <div className='mt-2 mb-2'>
                        <h1>Enclos :</h1>
                    </div>
                    {paddocks?.map(paddock => (
                    <div class="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
                    <input
                        class="relative float-left -ml-[1.5rem] mr-1 mt-0.5 h-5 w-5 appearance-none rounded-full border-2 border-solid border-neutral-300 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-primary checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:border-neutral-600 dark:checked:border-primary dark:checked:after:border-primary dark:checked:after:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:border-primary dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                        type="radio"
                        name="paddock"
                        value={paddock?._id}
                        onChange={(e) => {setPaddock(e.target.value)}}
                        id="paddock" />
                    <label
                        class="mt-px inline-block pl-[0.15rem] hover:cursor-pointer"
                        for="paddock">
                        {paddock?.designation}
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
    }

};

export default DinosaurNew;