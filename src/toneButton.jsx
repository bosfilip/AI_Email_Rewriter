export default function ToneButton({label,isSelected,onSelect}){
    return(
        <label className="cursor-pointer">
            <input type="radio" className="peer sr-only" checked={isSelected} onChange={onSelect}/>
            <span className="rounded-full px-3 py-1.5 text-sm font-medium transition-colors duration-200 ease-in-out
                    bg-gray-100 text-gray-600 border-2 border-white
                    peer-checked:bg-blue-50 peer-checked:text-blue-500 peer-checked:border-blue-200
                    hover:bg-blue-100">
            {label}</span>
        </label>
    )
}

