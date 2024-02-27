import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { dinoService } from '../../_services/dinosaur.service';

const DinosaurSingle = () => {

    const [dinosaur, setDinosaur] = useState(null)
    const [loaded, setLoaded] = useState(null)
    const [error, setError] = useState(null)

    const { _id } = useParams()

    useEffect(() => {
        dinoService.getOneDino(_id)
            .then(res => {
                console.log(res.data.result.data)
                setDinosaur(res.data.result.data)
                setLoaded(true)
            })
            .catch(error => {
                setError(error)
                setLoaded(true)
            })
    }, [_id])

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
            {/* Vous avez une erreur de type : {error.response.status} */}
            </div>
        )
    } else {
        return (
            <div>
                <div class="container my-24 mx-auto md:px-6">
                <section class="mb-32">
                    <img className='w-2/3 m-auto' src={dinosaur.image02}
                    class="mb-6 w-full rounded-lg shadow-lg dark:shadow-black/20" alt="image" />

                    <div class="mb-6 flex items-center">
                    <div>
                        <span> Identifiant de l'animal : </span>
                        <a href="#!" class="font-medium text-sky-600">{dinosaur._id}</a>
                    </div>
                    </div>

                    <h1 class="mb-6 text-3xl font-bold">
                    {dinosaur.name}
                    </h1>

                    <p>
                    {dinosaur.description}
                    </p>
                    <div class="flex flex-col">
                    <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                        <div class="overflow-hidden">
                            <table class="min-w-full text-center text-sm font-light">
                            <thead class="border-b font-medium dark:border-neutral-500">
                                <tr>
                                <th scope="col" class="px-6 py-4">Paramètres</th>
                                <th scope="col" class="px-6 py-4">Valeur</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="border-b dark:border-neutral-500">
                                <td class="whitespace-nowrap px-6 py-4 font-medium">
                                    Regime
                                </td>
                                <td class="whitespace-nowrap px-6 py-4">{dinosaur.diet.name} <img className='w-10 m-auto' src={dinosaur.diet.image} alt="" /></td>
                                </tr>
                                <tr
                                class="border-b border-primary-200 bg-primary-100 text-neutral-800">
                                <td class="whitespace-nowrap px-6 py-4 font-medium">
                                    Taille
                                </td>
                                <td class="whitespace-nowrap px-6 py-4">{dinosaur.height} mètres</td>
                                </tr>
                                <tr
                                class="border-b border-secondary-200 bg-secondary-100 text-neutral-800">
                                <td class="whitespace-nowrap px-6 py-4 font-medium">
                                    Longueur
                                </td>
                                <td class="whitespace-nowrap px-6 py-4">{dinosaur.width} mètres</td>
                                </tr>
                                <tr
                                class="border-b border-success-200 bg-success-100 text-neutral-800">
                                <td class="whitespace-nowrap px-6 py-4 font-medium">
                                    Poids
                                </td>
                                <td class="whitespace-nowrap px-6 py-4">{dinosaur.weight} kilos</td>
                                </tr>
                                <tr
                                class="border-b border-danger-200 bg-danger-100 text-neutral-800">
                                <td class="whitespace-nowrap px-6 py-4 font-medium">
                                    Taux d'humidité optimal
                                </td>
                                <td class="whitespace-nowrap px-6 py-4">{dinosaur.habitatWater} %</td>
                                </tr>
                                <tr
                                class="border-b border-warning-200 bg-warning-100 text-neutral-800">
                                <td class="whitespace-nowrap px-6 py-4 font-medium">
                                    Milieu forestier optimal
                                </td>
                                <td class="whitespace-nowrap px-6 py-4">{dinosaur.habitatForest} %</td>
                                </tr>
                                <tr
                                class="border-b border-info-200 bg-info-100 text-neutral-800">
                                <td class="whitespace-nowrap px-6 py-4 font-medium">
                                    Espace ouvert optimal
                                </td>
                                <td class="whitespace-nowrap px-6 py-4">{dinosaur.habitatOpenSpace} %</td>
                                </tr>
                            </tbody>
                            </table>
                        </div>
                        </div>
                    </div>
                    </div>
                </section>
                </div>
            </div>
        );
    }

};

export default DinosaurSingle;