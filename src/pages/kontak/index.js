import React from 'react'
import AppLayout from '../../templates/app-layout'

export default function Index() {
    return (
        <AppLayout>
            <div >
                <div className="boxes max-w-7xl mx-auto mt-12 flex items-center" style={{
                    height: '40vh'
                }}>
                    <div className='space-y-2 text-center mx-auto my-auto'>
                        <div class="text-center">
                            <p class="heading-title leading-tight">
                                Nyalakan kreativitasmu, <br />tulis dan bagikan ceritamu
                            </p>
                            <p class="mx-auto mt-4 text-base font-medium text-gray-500 text-balance">
                                Bercerita adalah cara terbaik untuk berbagi pengetahuan dan pengalaman dengan orang lain. <br />Yuk, mulai menulis ceritamu sekarang!
                            </p>
                            <div className="max-w-md mx-auto mt-8">
                                <label for="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                                <div className="relative">
                                    <input type="search" id="default-search" className="block w-full p-4 text-sm text-gray-900 border border-gray-200 rounded-full bg-gray-50 focus:ring-blue-500 focus:border-blue-500" placeholder="Masukan email-mu" />
                                    <button type="button" className="text-white absolute end-2.5 bottom-2.5 bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-6 py-2">Daftarkan Saya</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    )
}
