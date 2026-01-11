export default function Email({value,onChange}){
    return(
        <div className="flex flex-1 flex-col gap-1.5">
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Email Content</label>
                
                <textarea 
                    value={value}
                    onChange={(e)=>onChange(e.target.value)}
                    className="text-sm w-full flex-1 min-h-[200px] rounded-lg border border-gray-200 bg-gray-50 p-3 placeholder-gray-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-500/20 outline-none resize-none transition-all dark:bg-gray-900 dark:border-gray-700 dark:text-white dark:focus:border-blue-500 dark:focus:bg-gray-800" 
                    placeholder="Paste or type your email here..."
                ></textarea>

                <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">The more context you provide, the better the result.</p>
            </div>
    )
}