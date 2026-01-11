export default function ToneButton({label,isSelected,onSelect}){
    return(
        <label className="cursor-pointer">
            <input type="radio" className="peer sr-only" checked={isSelected} onChange={onSelect}/>
            <span className="rounded-lg border border-gray-200 px-3 py-2 text-xs font-medium transition-all duration-200 bg-gray-50 text-gray-600 
                    peer-checked:bg-blue-50 peer-checked:text-blue-600 peer-checked:border-blue-200
                    hover:bg-gray-100 dark:bg-gray-900 dark:border-gray-700 dark:text-gray-400 
                    dark:peer-checked:bg-blue-900/40 dark:peer-checked:text-blue-300 dark:peer-checked:border-blue-800">
            {label}</span>
        </label>
    )
}