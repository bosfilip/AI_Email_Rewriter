
export default function Subject({value,onChange}){

    return(
        <div className="flex flex-col gap-1">
                <label className="text-sm font-medium text-gray-700">Subject</label>
                <input 
                    value={value}
                    onChange={(e)=>onChange(e.target.value)}
                    type="text" 
                    className="text-xs w-full rounded-lg border border-gray-300 bg-gray-50 p-3 placeholder-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none" 
                    placeholder="e.g., Project Update Q3" 
                />
            </div>
    )
}