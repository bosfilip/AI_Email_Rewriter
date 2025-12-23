export default function Email({value,onChange}){
    return(
        <div className="flex flex-1 flex-col gap-1">
                <label className="text-sm font-medium text-gray-700">Email Content</label>
                
                <input 
                    value={value}
                    onChange={(e)=>onChange(e.target.value)}
                    className="text-xs w-full flex-1 rounded-lg border border-gray-300 bg-gray-50 p-3 placeholder-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none resize-none" 
                    rows={10} 
                    placeholder="Paste or type your email here..."
                ></input>

                <p className="mt-1 text-xs text-gray-500">Paste or type your email here. The more context you provide, the better the result.</p>
            </div>
    )
}