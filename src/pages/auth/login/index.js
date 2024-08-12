import React from 'react'

export default function Login() {
    return (

        <section className='flex justify-center items-center h-screen'>
            <div class="px-8 py-24 mx-auto md:px-12 lg:px-32 max-w-7xl">
                <div class="max-w-md mx-auto md:max-w-sm md:w-96">
                    <div class="flex flex-col text-center">
                        <h1 class="text-3xl font-semibold tracking-tighter text-gray-900">
                            <span className='text-blue-500'>Collaborating on single-page projects, </span>
                            <span class="text-gray-600">from any location</span>
                        </h1>
                        <p class="mt-4 text-base font-medium text-gray-500">
                            A rapid approach to collaborate in staging and provisional settings.
                        </p>
                    </div>
                    <form className='mt-12'>
                        <div class="space-y-3">
                            <div>
                                <label for="name" class="block mb-3 text-sm font-medium text-black">
                                    First name
                                </label>
                                <input type="text" id="name" placeholder="Your name" class="block w-full h-12 px-4 py-2 text-blue-500 duration-200 border rounded-full appearance-none bg-chalk border-zinc-300 placeholder-zinc-300 focus:border-zinc-300 focus:outline-none focus:ring-zinc-300 sm:text-sm" />
                            </div>
                            <div class="col-span-full">
                                <label for="password" class="block mb-3 text-sm font-medium text-black">
                                    Password
                                </label>
                                <input id="password" class="block w-full h-12 px-4 py-2 text-blue-500 duration-200 border rounded-full appearance-none bg-chalk border-zinc-300 placeholder-zinc-300 focus:border-zinc-300 focus:outline-none focus:ring-zinc-300 sm:text-sm" placeholder="Type password here..." type="password" />
                            </div>
                            <br />
                            <div class="col-span-full">
                                <button type="button" class="inline-flex items-center justify-center w-full h-12 gap-3 px-5 py-3 font-medium text-white duration-200 bg-blue-500 rounded-full hover:bg-blue-700 focus:ring-2 focus:ring-offset-2 focus:ring-blue">
                                    Sign in
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>

    )
}
