import React, { useState } from 'react';

export default function Header({ darkMode, setDarkMode }){
    const [logoError, setLogoError] = useState(false);
    const [githubIconError, setGithubIconError] = useState(false);

    const handleThemeChange = (isDark) => {
        try {
            if (typeof setDarkMode === 'function') {
                setDarkMode(isDark);
            }
        } catch (error) {
            console.error(error);
        }
    };

    return(
        <div className="flex justify-center">
            <div className="flex w-full justify-between items-center rounded-xl bg-white p-4 border border-gray-200 shadow-sm dark:bg-gray-800 dark:border-gray-700 transition-colors duration-200">
                <div className='flex flex-1 flex-row h-10 items-center'>
                    <div className="mr-3 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 dark:bg-blue-900/30">
                        {!logoError && (
                            <img 
                                src="/public/assets/logo/email.png" 
                                className="w-6 h-6" 
                                alt="logo"
                                onError={() => setLogoError(true)}
                            />
                        )}
                    </div>
                    <h1 className="text-lg font-bold text-gray-900 dark:text-white">Smart Email Rewriter</h1>
                </div>

                <div className="flex items-center justify-center rounded-full bg-gray-100 p-1 dark:bg-gray-700">
                    <button 
                        onClick={() => handleThemeChange(false)}
                        className={`flex h-8 w-8 items-center justify-center rounded-full transition-all ${!darkMode ? 'bg-white text-yellow-500 shadow-sm' : 'text-gray-400 hover:text-gray-600 dark:hover:text-gray-300'}`}
                    >
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                    </button>
                    <button 
                        onClick={() => handleThemeChange(true)}
                        className={`flex h-8 w-8 items-center justify-center rounded-full transition-all ${darkMode ? 'bg-gray-600 text-blue-200 shadow-sm' : 'text-gray-400 hover:text-gray-600'}`}
                    >
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                        </svg>
                    </button>
                </div>

                <div className='flex flex-1 flex-row items-center justify-end'>
                    <a href="#" className="flex items-center text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200">
                        {!githubIconError && (
                            <img 
                                src="/public/assets/logo/github-sign.png" 
                                className="w-5 h-5 mr-2 opacity-80 dark:invert" 
                                alt="github"
                                onError={() => setGithubIconError(true)}
                            />
                        )}
                        GitHub
                    </a>
                </div>
            </div>
        </div>
    )
}