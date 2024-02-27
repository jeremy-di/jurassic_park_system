import React, { useEffect } from 'react';
import logo from '../imgs/Jurassic-Park-Logo.png'
import { Link, useNavigate } from 'react-router-dom';
import { userService } from '@/_services/user.service'

const Header = () => {

    useEffect(() => {
        const init = async () => {
            const { Collapse, Dropdown, initTE } = await import("tw-elements")
            initTE({Collapse, Dropdown}) 
        }
        init()
      }, [])

      let navigate = useNavigate()
      const logout = () => {
        userService.logout()
        navigate('/')
      }
    return (
        <div>
            <nav
            className="relative flex w-full flex-nowrap items-center justify-between bg-[#FBFBFB] py-2 text-neutral-500 shadow-lg hover:text-neutral-700 focus:text-neutral-700 dark:bg-neutral-600 lg:flex-wrap lg:justify-start lg:py-4"
            data-te-navbar-ref>
            <div className="flex w-full flex-wrap items-center justify-between px-3">
                <button
                className="block border-0 bg-transparent px-2 text-neutral-500 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 lg:hidden"
                type="button"
                data-te-collapse-init
                data-te-target="#navbarSupportedContent5"
                aria-controls="navbarSupportedContent5"
                aria-expanded="false"
                aria-label="Toggle navigation">
                <span className="[&>svg]:w-7">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-7 w-7">
                    <path
                        fillRule="evenodd"
                        d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                        clipRule="evenodd" />
                    </svg>
                </span>
                </button>

                <div
                className="!visible mt-2 hidden flex-grow basis-[100%] items-center lg:mt-0 lg:!flex lg:basis-auto"
                id="navbarSupportedContent5"
                data-te-collapse-item>
                <div className='flex items-center'>
                    <img className='w-20' src={logo} alt="" />
                    <h1 className='text-amber-600 font-bold'>Jurassic park - Control System</h1>
                </div>
                <ul
                    className="list-style-none mr-auto flex flex-col pl-0 lg:mt-1 lg:flex-row"
                    data-te-navbar-nav-ref>
                    <li
                    className="my-4 pl-2 lg:my-0 lg:pl-2 lg:pr-1"
                    data-te-nav-item-ref>
                    <Link to="/"
                        className="active disabled:text-black/30 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                        aria-current="page"
                        href="#"
                        data-te-nav-link-ref
                        >Accueil</Link>
                    </li>
                    {!userService.isLogged() && (
                    <li
                    className="mb-4 pl-2 lg:mb-0 lg:pl-0 lg:pr-1"
                    data-te-nav-item-ref>
                    <Link to ="/login"
                        className="p-0 text-neutral-500 transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                        href="#"
                        data-te-nav-link-ref
                        >Connexion</Link>
                    </li>
                    )}
                    {!userService.isLogged() && (
                    <li
                    className="mb-4 pl-2 lg:mb-0 lg:pl-0 lg:pr-1"
                    data-te-nav-item-ref>
                    <Link to="/register"
                        className="p-0 text-neutral-500 transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                        href="#"
                        data-te-nav-link-ref
                        >Inscription</Link>
                    </li>
                    )}
                    {userService.isLogged() && (
                    <li
                    className="mb-4 pl-2 lg:mb-0 lg:pl-0 lg:pr-1"
                    data-te-nav-item-ref>
                    <a
                        className="p-0 cursor-pointer text-neutral-500 transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                        onClick={logout}
                        data-te-nav-link-ref
                        >Deconnexion</a>
                    </li>
                    )}
                    {userService.isLogged() && (
                    <li
                    className="mb-4 pl-2 lg:mb-0 lg:pl-0 lg:pr-1"
                    data-te-nav-item-ref
                    data-te-dropdown-ref>
                    <a
                        className="flex items-center text-neutral-500 transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                        href="#"
                        type="button"
                        id="dropdownMenuButton2"
                        data-te-dropdown-toggle-ref
                        aria-expanded="false">
                        Consultation
                        <span className="ml-1 w-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="h-5 w-5">
                            <path
                            fillRule="evenodd"
                            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                            clipRule="evenodd" />
                        </svg>
                        </span>
                    </a>
                    <ul
                        className="absolute z-[1000] float-left m-0 hidden min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-neutral-700 [&[data-te-dropdown-show]]:block"
                        aria-labelledby="dropdownMenuButton2"
                        data-te-dropdown-menu-ref>
                        <li>
                        <Link to="/ingen/list"
                            className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
                            href="#"
                            data-te-dropdown-item-ref
                            >Liste des animaux du parc</Link>
                        </li>
                        <li>
                        <Link to="/paddocks/list"
                            className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
                            href="#"
                            data-te-dropdown-item-ref
                            >Liste des enclos</Link>
                        </li>
                        <li>
                        <Link to="/users/list"
                            className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
                            href="#"
                            data-te-dropdown-item-ref
                            >Liste du personnel autorisé</Link>
                        </li>
                        
                    </ul>
                    </li>
                    )}
                    {userService.isLogged() && (
                    <li
                    className="mb-4 pl-2 lg:mb-0 lg:pl-0 lg:pr-1"
                    data-te-nav-item-ref
                    data-te-dropdown-ref>
                    <a
                        className="flex items-center text-neutral-500 transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                        href="#"
                        type="button"
                        id="dropdownMenuButton2"
                        data-te-dropdown-toggle-ref
                        aria-expanded="false">
                        Ajouts
                        <span className="ml-1 w-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="h-5 w-5">
                            <path
                            fillRule="evenodd"
                            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                            clipRule="evenodd" />
                        </svg>
                        </span>
                    </a>
                    <ul
                        className="absolute z-[1000] float-left m-0 hidden min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-neutral-700 [&[data-te-dropdown-show]]:block"
                        aria-labelledby="dropdownMenuButton2"
                        data-te-dropdown-menu-ref>
                        <li>
                        <Link to="/ingen/new"
                            className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
                            href="#"
                            data-te-dropdown-item-ref
                            >Ajouter un animal</Link>
                        </li>
                        <li>
                        <Link to="/paddocks/new"
                            className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
                            href="#"
                            data-te-dropdown-item-ref
                            >Ajouter un enclos</Link>
                        </li>
                    </ul>
                    </li>
                    )}
                    {userService.isLogged() && (
                    <li
                    className="mb-4 pl-2 lg:mb-0 lg:pl-0 lg:pr-1"
                    data-te-nav-item-ref>
                    <Link to ="#!"
                        className="p-0 text-neutral-500 transition duration-200 text-red-600 font-bold hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                        href="#"
                        data-te-nav-link-ref
                        >Utilisateur connecté : <span className='text-amber-600 font-bold'>{userService.getFirstName()} {userService.getName()}</span></Link>
                    </li>
                    )}
                </ul>
                </div>
            </div>
            </nav>
        </div>
    );
};

export default Header;