import React, { useEffect, useState } from 'react';
import { paddockService } from '../../_services/paddock.service';
import { Link } from 'react-router-dom';

const PaddockList = () => {

    const [paddocks, setPaddocks] = useState(null)
    const [loaded, setLoaded] = useState(null);
    const [error, setError] = useState(null)

    useEffect(() => {
        paddockService.getAllPaddocks()
            .then(res => {
                setPaddocks(res.data.result)
                console.log(res.data.result)
                setLoaded(true)
            })
            .catch(error => {
                setError(error)
                setLoaded(true)
            })
        const init = async () => {
            const { Ripple, initTE } = await import("tw-elements")
            initTE({Ripple}) 
        }
        init()
}, [])

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
    <div
        className="mb-4 rounded-lg bg-danger-100 px-6 py-5 text-base text-danger-700"
        role="alert">
        Vous avez une erreur de type : {error.response.status}
        </div>
} else {
    return (
        <div className='flex justify-center flex-wrap gap-10 m-10'>
            {paddocks.map(paddock => (
            <div
              class="w-1/5 block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
              <a href="#!">
                <img
                  class="rounded-t-lg h-1/3 m-auto"
                  src={paddock.zoneMap}
                  alt="" />
              </a>
              <div class="p-6 text-center">
                <h5
                  class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                  {paddock.designation}
                </h5>
                <Link to={`/paddocks/single/${paddock._id}`}>
                <button
                  type="button"
                  class="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                  data-te-ripple-init
                  data-te-ripple-color="light">
                  Afficher l'enclos
                </button>
                </Link>
              </div>
            </div>
            ))}
        </div>
    );
}
};

export default PaddockList;