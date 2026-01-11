function EmailResult({value}){

    const placeholder = "Your rewritten email will appear here.";
    const placeholder2 = "Click Rewrite Email to see the magic happen."

    const displayContent = value ? value : placeholder;
    const diplayPlaceholder2 = value ? "" : placeholder2;

    return(
        <div className="flex h-full w-full flex-col items-center justify-center rounded-lg bg-gray-50 p-8 text-center">
                { value ? null : <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-blue-100">
                    <img src="/public/assets/logo/writing-i.png" className='w-6.5'></img>
                </div>}
                <p className={`w-full whitespace-pre-wrap ${value ? 'text-left' : 'text-center'} text-base text-gray-900`}>{displayContent}</p>
                <p className="mt-1 text-xs text-gray-500">{diplayPlaceholder2}</p>
        </div>
    )
}

export default EmailResult