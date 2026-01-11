export default function Subject({value,onChange}){
    return(
        <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Subject</label>
            <input 
                value={value}
                onChange={(e)=>onChange(e.target.value)}
                type="text" 
                className="text-sm w-full rounded-lg border border-gray-200 bg-gray-50 p-3 placeholder-gray-400 focus:border-blue-500 focus:bg-white outline-none transition-all dark:bg-gray-900 dark:border-gray-700 dark:text-white dark:focus:bg-gray-800" 
                placeholder="e.g., Project Update Q3" 
            />
        </div>
    )
}