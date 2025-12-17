import React from 'react';
import GrayButton from "./grayButton.jsx"

function ResultPanel() {




    return (
        <div className="w-[50] flex flex-col gap-6 rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-lg">
            
            <h3 className="text-lg font-bold leading-tight tracking-tight text-gray-900">Rewritten Email</h3>

            <div className="flex flex-1 flex-col items-center justify-center text-center bg-gray-50 rounded-lg p-8">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-100 mb-4">
                    <img src="/public/assets/logo/writing-i.png" className='w-6.5'></img>
                </div>
                <p className="font-semibold text-gray-900 text-base">Your rewritten email will appear here.</p>
                <p className=" text-gray-500 mt-1 text-xs">Click "Rewrite Email" to see the magic happen.</p>
            </div>

            <div className="flex flex-col gap-4 border-t border-gray-200 pt-6 mt-auto opacity-50 grayscale pointer-events-none select-none">
                <div className="flex items-center justify-between">
                    <h4 className="font-semibold text-gray-900">Key Changes</h4>
                    <div className="flex items-center gap-1 rounded-full bg-green-100 px-3 py-1">
                        <p className="text-sm font-medium text-green-700">Clarity Score: 82/100</p>
                    </div>
                </div>

                <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-start gap-2">
                        <span>Improved conciseness by removing redundant phrases.</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <span>Adjusted tone to be more confident and professional.</span>
                    </li>
                </ul>

                <div className="flex items-center gap-2 mt-2">
                    
                    <GrayButton><img className='w-6' src="public/assets/logo/copy-document.png"></img>Copy</GrayButton>
                    <GrayButton><img className='w-6' src='public/assets/logo/download.png'></img>Download</GrayButton>
                    <GrayButton><img className="w-6" src='public/assets/logo/email-i.png'></img>Open in Mail</GrayButton>
                    

                </div>
            </div>
        </div>
    )
}

export default ResultPanel