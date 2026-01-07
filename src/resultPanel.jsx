import React from 'react';
import { useState } from 'react';
import EmailResult from './emailResult.jsx';
import GrayButton from "./grayButton.jsx"
import ListElement from './listElement.jsx';

function ResultPanel({text, changes, loading}) {

    const parts = changes.split("*")
    const change1 = parts[0].trim()
    const change2 = parts[1].trim()
    const change3 = parts[2].trim()


    return (
        <div className="w-[50] flex flex-col gap-6 rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-lg">
            
            <h3 className="text-lg font-bold leading-tight tracking-tight text-gray-900">Rewritten Email</h3>

            <EmailResult/>

            <div className='bg-gray-200 w-full h-0.5 rounded-2xl'></div>
                <div className="flex items-center justify-between">
                    <h4 className="font-semibold text-gray-900">Key Changes</h4>
                </div>

                <ul className="space-y-2 text-sm text-gray-600">
                    <ListElement subject={change1}/>
                    <ListElement subject={change2}/>
                    <ListElement subject={change3}/>
                </ul>

                <div className="flex items-center gap-2 mt-2">
                    
                    <GrayButton><img className='w-6' src="public/assets/logo/copy-document.png"></img>Copy</GrayButton>
                    <GrayButton><img className='w-6' src='public/assets/logo/download.png'></img>Download</GrayButton>
                    <GrayButton><img className="w-6" src='public/assets/logo/email-i.png'></img>Open in Mail</GrayButton>

                </div>
            
        </div>
    )
}

export default ResultPanel