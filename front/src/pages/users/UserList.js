import React, { useEffect, useState } from 'react';
import { userService } from '../../_services/user.service';

const UserList = () => {

    const [users, setUsers] = useState(null)
    const [loaded, setLoaded] = useState(null);
    const [error, setError] = useState(null)

    useEffect(() => {
        userService.getAllUsers()
            .then(res => {
                setUsers(res.data.result)
                console.log(res.data.result)
                setLoaded(true)
            })
            .catch(error => {
                setError(error)
                setLoaded(true)
            })
}, [])

    return (
        <div>
            <div className='text-center m-5'>
                <h1 className='text-amber-600 font-bold'>Liste des utilisateurs autorisés</h1>
            </div>
            <div class="flex flex-col">
            <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                <div class="overflow-hidden">
                    <table class="min-w-full text-left text-sm font-light">
                    <thead class="border-b font-medium dark:border-neutral-500">
                        <tr>
                        <th scope="col" class="px-6 py-4">Numéro de carte d'accès</th>
                        <th scope="col" class="px-6 py-4">Nom</th>
                        <th scope="col" class="px-6 py-4">Prénom</th>
                        <th scope="col" class="px-6 py-4">Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(user => (
                        <tr class="border-b dark:border-neutral-500">
                        <td class="whitespace-nowrap px-6 py-4 font-medium">{user._id}</td>
                        <td class="whitespace-nowrap px-6 py-4">{user.name}</td>
                        <td class="whitespace-nowrap px-6 py-4">{user.firstName}</td>
                        <td class="whitespace-nowrap px-6 py-4">{user.email}</td>
                        </tr>
                        ))}
                    </tbody>
                    </table>
                </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default UserList;