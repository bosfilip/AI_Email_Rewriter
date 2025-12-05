import React from 'react';

export default function EditorPanel() {
    return (
        <div className="flex flex-col gap-6 rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-lg">
            
            <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold leading-tight tracking-tight text-gray-900">Original Email</h3>
                <div className="flex items-center gap-1">
                </div>
            </div>

            <div className="flex flex-col gap-1">
                <label className="text-sm font-medium text-gray-700">Subject</label>
                <input 
                    type="text" 
                    className="w-full rounded-lg border border-gray-300 bg-gray-50 p-3 text-base placeholder-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none" 
                    placeholder="e.g., Project Update Q3" 
                />
            </div>

            <div className="flex flex-1 flex-col gap-1">
                <label className="text-sm font-medium text-gray-700">Email Content</label>
                <textarea 
                    className="w-full flex-1 rounded-lg border border-gray-300 bg-gray-50 p-3 text-base placeholder-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none resize-none" 
                    rows={10} 
                    placeholder="Paste or type your email here..."
                ></textarea>
                <p className="mt-1 text-xs text-gray-500">Paste or type your email here. The more context you provide, the better the result.</p>
            </div>

            <div className="flex flex-col gap-3">
                <h3 className="text-base font-bold text-gray-900">Choose Tone</h3>
                <div className="flex flex-wrap gap-2">
                    <button className="px-3 py-1.5 text-sm font-medium rounded-full bg-blue-50 text-blue-600 ring-1 ring-inset ring-blue-200">Friendly</button>
                    <button className="px-3 py-1.5 text-sm font-medium rounded-full text-gray-600 bg-gray-100 hover:bg-gray-200">Formal</button>
                    <button className="px-3 py-1.5 text-sm font-medium rounded-full text-gray-600 bg-gray-100 hover:bg-gray-200">Confident</button>
                    <button className="px-3 py-1.5 text-sm font-medium rounded-full text-gray-600 bg-gray-100 hover:bg-gray-200">Concise</button>
                    <button className="px-3 py-1.5 text-sm font-medium rounded-full text-gray-600 bg-gray-100 hover:bg-gray-200">Polite Rejection</button>
                </div>
            </div>

            <div className="flex flex-col gap-3">
                <label className="text-base font-bold text-gray-900">Tone Intensity</label>
                <input 
                    type="range" 
                    min="0" 
                    max="100" 
                    defaultValue="50"
                    className="h-2 w-full appearance-none rounded-lg bg-gray-200 cursor-pointer accent-blue-600" 
                />
            </div>

            <div className="mt-auto flex items-center gap-4 border-t border-gray-200 pt-6">
                <button className="flex-1 rounded-lg bg-blue-600 px-4 py-3 text-base font-semibold text-white shadow-sm hover:bg-blue-700 transition-colors">Rewrite Email</button>
                <button className="rounded-lg px-4 py-3 text-base font-medium text-gray-600 hover:bg-gray-100 transition-colors">Clear</button>
            </div>

        </div>
    )
}