import React from 'react';

export default function Subject({value, onChange, error}){
    return(
        <div className="flex flex-col gap-1.5">
            <label className={`text-sm font-medium ${error ? "text-red-500" : "text-gray-700 dark:text-gray-300"}`}>Subject</label>
            <input 
                value={value || ""}
                onChange={(e) => onChange && onChange(e.target.value)}
                type="text" 
                className={`text-sm w-full rounded-lg border p-3 placeholder-gray-400 outline-none transition-all ${error ? "border-red-300 bg-red-50 focus:border-red-500 focus:ring-2 focus:ring-red-200 dark:border-red-900 dark:bg-red-900/10 dark:text-white" : "border-gray-200 bg-gray-50 focus:border-blue-500 focus:bg-white dark:bg-gray-900 dark:border-gray-700 dark:text-white dark:focus:bg-gray-800"}`} 
                placeholder="e.g., Project Update Q3" 
            />
        </div>
    )
}