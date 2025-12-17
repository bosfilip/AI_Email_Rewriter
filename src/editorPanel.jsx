import React from 'react';
import ToneButton from './toneButton.jsx'

export default function EditorPanel() {
    return (
        <div className="w-[550px] flex flex-col gap-6 rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-lg">
            
            <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold leading-tight tracking-tight text-gray-900">Original Email</h3>
                <div className="flex items-center gap-1">
                </div>
            </div>

            <div className="flex flex-col gap-1">
                <label className="text-sm font-medium text-gray-700">Subject</label>
                <input 
                    type="text" 
                    className="text-xs w-full rounded-lg border border-gray-300 bg-gray-50 p-3 placeholder-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none" 
                    placeholder="e.g., Project Update Q3" 
                />
            </div>

            <div className="flex flex-1 flex-col gap-1">
                <label className="text-sm font-medium text-gray-700">Email Content</label>
                <textarea 
                    className="text-xs w-full flex-1 rounded-lg border border-gray-300 bg-gray-50 p-3 placeholder-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none resize-none" 
                    rows={10} 
                    placeholder="Paste or type your email here..."
                ></textarea>
                <p className="mt-1 text-xs text-gray-500">Paste or type your email here. The more context you provide, the better the result.</p>
            </div>

            <div className="flex flex-col gap-3">

                <h3 className="text-base font-bold text-gray-900">Choose Tone</h3>
                <div className="flex flex-wrap gap-2">
                    <ToneButton>Friendly</ToneButton>
                    <ToneButton>Formal</ToneButton>
                    <ToneButton>Confident</ToneButton>
                    <ToneButton>Concise</ToneButton>
                    <ToneButton>Polite Rejection</ToneButton>

                </div>
            </div>

            <div className="mt-auto flex items-center gap-4 border-t border-gray-200 pt-6">
                <button className="flex-1 rounded-lg bg-blue-600 px-4 py-3 text-base font-semibold text-white shadow-sm hover:bg-blue-700 transition-colors active:bg-blue-500 ">Rewrite Email</button>
                <button className="rounded-lg px-4 py-3 text-base font-medium text-gray-600 hover:bg-gray-100 transition-colors active:bg-gray-50">Clear</button>
            </div>
        </div>
    )
}