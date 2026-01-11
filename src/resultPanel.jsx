import React from 'react';
import { useState } from 'react';
import EmailResult from './emailResult.jsx';
import GrayButton from "./grayButton.jsx"
import ListElement from './listElement.jsx';

function ResultPanel({text, changes, loading}) {

        const parts = changes ? changes.split("*") : [];
        const change1 = parts[0] || "Changes will appear here after rewrite"
        const change2 = parts[1] || ""
        const change3 = parts[2] || ""
    
    return (
        <div className="flex h-full flex-col rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-lg">
            
            <h3 className="mb-6 text-lg font-bold leading-tight tracking-tight text-gray-900">Rewritten Email</h3>

            <div className="flex-1">
                <EmailResult value={text}/>
            </div>

            <div className="mt-6 space-y-6">
                <div className="w-full h-px bg-gray-200"></div>
                
                <div>
                    <h4 className="mb-3 font-semibold text-gray-900">Key Changes</h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                        <ListElement subject={change1}/>
                        <ListElement subject={change2}/>
                        <ListElement subject={change3}/>
                    </ul>
                </div>

                <div className="flex flex-wrap items-center gap-2 pt-2">
                    <GrayButton><img className='w-5 h-5 mr-2' src="public/assets/logo/copy-document.png"/>Copy</GrayButton>
                    <GrayButton><img className='w-5 h-5 mr-2' src='public/assets/logo/download.png'/>Download</GrayButton>
                    <GrayButton><img className="w-5 h-5 mr-2" src='public/assets/logo/email-i.png'/>Open in Mail</GrayButton>
                </div>
            </div>
        </div>
    )
}

export default ResultPanel