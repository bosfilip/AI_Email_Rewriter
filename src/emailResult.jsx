function EmailResult(){



    return(
        <div className="flex flex-1 flex-col items-center justify-center text-center bg-gray-50 rounded-lg p-8">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-100 mb-4">
                    <img src="/public/assets/logo/writing-i.png" className='w-6.5'></img>
                </div>
                <p className="font-semibold text-gray-900 text-base">Your rewritten email will appear here.</p>
                <p className=" text-gray-500 mt-1 text-xs">Click "Rewrite Email" to see the magic happen.</p>
        </div>
    )
}

export default EmailResult