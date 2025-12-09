import React from 'react';

export default function ResultPanel() {
    return (
        <div className="flex flex-col gap-6 rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-lg h-full">
            
            <h3 className="text-lg font-bold leading-tight tracking-tight text-gray-900">Rewritten Email</h3>

            <div className="flex flex-1 flex-col items-center justify-center text-center bg-gray-50 rounded-lg p-8">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-200 mb-4">
                    <img src="/public/assets/logo/writing-i.png"></img>
                </div>
                <p className="font-semibold text-gray-900">Your rewritten email will appear here.</p>
                <p className="text-sm text-gray-500 mt-1">Click "Rewrite Email" to see the magic happen.</p>
            </div>

            <div className="flex flex-col gap-4 border-t border-gray-200 pt-6 mt-auto opacity-50 grayscale pointer-events-none select-none">
                <div className="flex items-center justify-between">
                    <h4 className="font-semibold text-gray-900">Key Changes</h4>
                    <div className="flex items-center gap-1 rounded-full bg-green-100 px-3 py-1">
                        <span className="material-symbols-outlined text-base text-green-600">spark</span>
                        <p className="text-sm font-medium text-green-700">Clarity Score: 82/100</p>
                    </div>
                </div>

                <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-start gap-2">
                        <span className="material-symbols-outlined text-base text-blue-600 mt-0.5">check_circle</span>
                        <span>Improved conciseness by removing redundant phrases.</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="material-symbols-outlined text-base text-blue-600 mt-0.5">check_circle</span>
                        <span>Adjusted tone to be more confident and professional.</span>
                    </li>
                </ul>

                <div className="flex items-center gap-2 mt-2">
                    <button className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-600 hover:bg-blue-100 transition-colors">
                        <img src="/public/assets/logo/copy-document.png"></img>
                        <p className='text-gray-400'>Copy</p>
                    </button>
                    <button className="inline-flex items-center justify-center gap-2 rounded-lg bg-gray-100 px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-200 transition-colors">
                        <img src="/public/assets/logo/download.png"></img>
                        <p className='text-gray-400'>Download</p>
                    </button>
                    <button className="inline-flex items-center justify-center gap-2 rounded-lg bg-gray-100 px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-200 transition-colors">
                        <img src="/public/assets/logo/email-i.png"></img>
                        <p className='text-gray-400'>Open in Mail</p>
                    </button>
                </div>
            </div>
        </div>
    )
}