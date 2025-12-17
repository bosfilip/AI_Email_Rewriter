
function GrayButton({children}){
    return(
        <button 
        type="button"
        className="
            relative z-10 cursor-pointer pointer-events-auto
            rounded-full px-2.5 py-1.5 inline-flex items-center justify-center gap-2 
            bg-gray-100 text-sm text-gray-700 
            transition-colors duration-200
            hover:bg-gray-200 active:bg-gray-50">{children}
        </button>
    )
}

export default GrayButton