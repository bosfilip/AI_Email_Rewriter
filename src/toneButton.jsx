
function ToneButton(){
    return(
        <label className="cursor-pointer">
            <input type="checkbox" className="peer sr-only" />
            <span className="rounded-full px-3 py-1.5 text-sm font-medium transition-colors duration-200 ease-in-out
                    bg-gray-100 text-gray-600 border-2 border-white
                    peer-checked:bg-blue-50 peer-checked:text-blue-500 peer-checked:border-blue-200
                    hover:bg-blue-100">
            Friendly</span>
        </label>
    )
}

export default ToneButton