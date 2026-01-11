function GrayButton({children}){
    return(
        <button 
        className="rounded-full px-3 py-1.5 inline-flex items-center justify-center gap-2 bg-gray-100 text-sm text-gray-700 transition-colors duration-200 hover:bg-gray-200 active:bg-gray-50 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600">
            {children}
        </button>
    )
}

export default GrayButton