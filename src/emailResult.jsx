import React, { useState } from 'react';

function EmailResult({value}){
    const [imgError, setImgError] = useState(false);

    const placeholder = "Your rewritten email will appear here.";
    const placeholder2 = "Click Rewrite Email to see the magic happen."

    const safeValue = value && typeof value === 'string' ? value : null;

    const displayContent = safeValue ? safeValue : placeholder;
    const displayPlaceholder2 = safeValue ? "" : placeholder2;

    return(
        <div className={`flex h-full w-full flex-col rounded-lg border border-gray-200 bg-gray-50 p-4 dark:bg-zinc-900/50 dark:border-zinc-700 transition-colors duration-200 ${!safeValue ? 'items-center justify-center text-center' : 'text-left'}`}>
                { safeValue || imgError ? null : (
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/30">
                        <img 
                            src="/assets/logo/writing-i.png" 
                            className='w-6 opacity-60 dark:invert' 
                            alt="icon"
                            onError={() => setImgError(true)}
                        ></img>
                    </div>
                )}
                <p className={`w-full whitespace-pre-wrap text-sm text-gray-800 dark:text-zinc-200`}>
                    {displayContent}
                </p>
                <p className="mt-2 text-xs text-gray-500 dark:text-zinc-500">
                    {displayPlaceholder2}
                </p>
        </div>
    )
}

export default EmailResult