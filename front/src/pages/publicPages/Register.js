import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '@/imgs/Jurassic-Park-Logo.png'
import ingen from '@/imgs/ingen log.png'
import { userService } from '../../_services/user.service';

const Register = () => {

    useEffect(() => {
        const init = async () => {
            const { Input, Ripple, initTE } = await import("tw-elements")
            initTE({Input, Ripple}) 
        }
        init()
      }, [])

      let navigate = useNavigate();

      const [credentials, setCredentials] = useState({
        name : "",
        firstName : "",
        email : "",
        password : ""
      })

      const onChange = (e) => {
        setCredentials({
            ...credentials,
            [e.target.name] : e.target.value
        })
      }

      const onSubmit = (e) => {
        e.preventDefault()
        userService.register(credentials)
            .then(res => {
                console.log(res)
                navigate("/")
            })
            .catch()
      }

    return (
        <div>
            <section className="gradient-form h-full bg-neutral-200 dark:bg-neutral-700">
            <div className="m-auto container h-full p-10">
                <div
                className="g-6 flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200">
                <div className="w-full">
                    <div
                    className="block rounded-lg bg-white shadow-lg dark:bg-neutral-800">
                    <div className="g-0 lg:flex lg:flex-wrap">
                        <div className="px-4 md:px-0 lg:w-6/12">
                        <div className="md:mx-6 md:p-12">
                            <div className="text-center">
                            <img
                                className="mx-auto w-48"
                                src={logo}
                                alt="logo" />
                            <h4 className="mb-12 mt-1 pb-1 text-xl font-semibold">
                                Jurassic Park - Control system
                            </h4>
                            </div>

                            <form onSubmit={onSubmit}>
                            <p className="mb-4">Inscription</p>
                            <div className="relative mb-4" data-te-input-wrapper-init>
                                <input
                                type="text"
                                name="name"
                                value={credentials.name}
                                onChange={onChange}
                                className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                id="name"
                                placeholder="Username" />
                                <label
                                htmlFor="name"
                                className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary-600 peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                                >Nom
                                </label>
                            </div>

                            <div className="relative mb-4" data-te-input-wrapper-init>
                                <input
                                type="text"
                                name="firstName"
                                value={credentials.firstName}
                                onChange={onChange}
                                className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                id="firstName"
                                placeholder="Username" />
                                <label
                                htmlFor="firstName"
                                className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary-600 peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                                >Prénom
                                </label>
                            </div>

                            <div className="relative mb-4" data-te-input-wrapper-init>
                                <input
                                type="text"
                                name="email"
                                value={credentials.email}
                                onChange={onChange}
                                className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                id="email"
                                placeholder="Username" />
                                <label
                                htmlFor="email"
                                className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary-600 peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                                >Email
                                </label>
                            </div>

                            <div className="relative mb-4" data-te-input-wrapper-init>
                                <input
                                type="password"
                                name="password"
                                value={credentials.password}
                                onChange={onChange}
                                className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                id="password"
                                placeholder="Password" />
                                <label
                                htmlFor="password"
                                className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary-600 peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                                >Mot de passe
                                </label>
                            </div>

                            <div className="mb-12 pb-1 pt-1 text-center">
                                <button
                                className="mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-black shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
                                type="submit"
                                data-te-ripple-init
                                data-te-ripple-color="light"
                                style={{
                                    background: "linear-gradient(to right, #ee7724, #ee7724, #ee7724, #ee7724)"
                                }}>
                                    Valider
                                </button>
                            </div>

                            <div className="flex items-center justify-between pb-6">
                                <p className="mb-0 mr-2">Pas de compte ?</p>
                                <button
                                type="button"
                                className="inline-block rounded border-2 border-danger px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out hover:border-danger-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-danger-600 focus:border-danger-600 focus:text-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                                data-te-ripple-init
                                data-te-ripple-color="light">
                                S'inscrire
                                </button>
                            </div>
                            </form>
                        </div>
                        </div>

                        <div
                        className="flex items-center rounded-b-lg lg:w-6/12 lg:rounded-r-lg lg:rounded-bl-none"
                        style={{background: "linear-gradient(to right, #D9D9D9, #D9D9D9, #D9D9D9, #D9D9D9)"}}>
                        <div className="px-4 py-6 text-black text-center md:mx-6 md:p-12">
                            <h4 className="mb-6 text-xl font-semibold">
                            Système de gestion des animaux du parc et des enclos
                            </h4>
                            <img src={ingen} alt="" />
                            <p className="text-sm">
                            Réservé au personnel autorisé
                            </p>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </section>
        </div>
    );
};

export default Register;