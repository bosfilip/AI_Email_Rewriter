import React from 'react';

export default function Email({value, onChange, error}){
    return(
        <div className="flex flex-1 flex-col gap-1.5">
                <label className={`text-sm font-medium ${error ? "text-red-500" : "text-gray-700 dark:text-gray-300"}`}>
                    Email Content
                </label>
                
                <textarea 
                    value={value || ""}
                    onChange={(e) => onChange && onChange(e.target.value)}
                    className={`text-sm w-full flex-1 min-h-[200px] rounded-lg border p-3 placeholder-gray-400 outline-none resize-none transition-all 
                        ${error 
                            ? "border-red-300 bg-red-50 focus:border-red-500 focus:ring-2 focus:ring-red-200 dark:border-red-900 dark:bg-red-900/10 dark:text-white" 
                            : "border-gray-200 bg-gray-50 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-500/20 dark:bg-gray-900 dark:border-gray-700 dark:text-white dark:focus:border-blue-500 dark:focus:bg-gray-800"
                        }`} 
                    placeholder="Paste or type your email here..."
                ></textarea>

                <p className={`mt-1 text-xs ${error ? "text-red-500" : "text-gray-500 dark:text-gray-400"}`}>
                    {error || "The more context you provide, the better the result."}
                </p>
            </div>
    )
}