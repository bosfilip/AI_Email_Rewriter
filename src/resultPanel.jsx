import React, { useState } from 'react';
import EmailResult from './emailResult.jsx';
import ListElement from './listElement.jsx';

function ResultPanel({ text, changes, loading, error }) {
    const [copyStatus, setCopyStatus] = useState("Copy");
    const parts = changes && typeof changes === 'string' ? changes.split("*").filter(p => p.trim() !== "") : [];
    
    const handleCopy = async () => {
        if (!text) return;
        try {
            await navigator.clipboard.writeText(text);
            setCopyStatus("Copied!");
            setTimeout(() => setCopyStatus("Copy"), 2000);
        } catch (err) {
            console.error(err);
            setCopyStatus("Failed");
            setTimeout(() => setCopyStatus("Copy"), 2000);
        }
    };

    return (
        <div className="flex h-full w-full flex-col rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:bg-gray-800 dark:border-gray-700 transition-colors duration-200">
            <div className="mb-6 flex items-center justify-between border-b border-gray-100 pb-4 dark:border-gray-700">
                <h3 className={`text-lg font-bold leading-tight tracking-tight ${error ? "text-red-500" : "text-gray-900 dark:text-white"}`}>
                    {loading ? "Improving your message..." : error ? "Improvement Failed" : text ? "Ready to send" : "Your polished email"}
                </h3>
            </div>

            <div className="flex-1 min-h-[200px]">
                {loading ? (
                    <div className="animate-pulse space-y-4 p-2">
                        <div className="h-4 bg-gray-100 dark:bg-gray-700 rounded w-3/4"></div>
                        <div className="h-4 bg-gray-100 dark:bg-gray-700 rounded w-full"></div>
                        <div className="h-4 bg-gray-100 dark:bg-gray-700 rounded w-5/6"></div>
                    </div>
                ) : error ? (
                    <div className="flex h-full flex-col items-center justify-center p-4 text-center">
                        <div className="mb-2 text-red-500 font-semibold">Unable to process request</div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">{typeof error === 'string' ? error : "Please check your connection and try again."}</p>
                    </div>
                ) : (
                    <div className="h-full">
                         <EmailResult value={text}/>
                    </div>
                )}
            </div>

            <div className="mt-6 space-y-4">
                {text && !loading && !error && (
                    <>
                        <div className="h-px w-full bg-gray-100 dark:bg-gray-700"></div>
                        <div>
                            <h4 className="mb-3 text-xs font-bold uppercase tracking-widest text-gray-400">Key Improvements</h4>
                            <ul className="space-y-2">
                                {parts.map((item, i) => (
                                    <ListElement key={i} subject={item.trim()} />
                                ))}
                            </ul>
                        </div>
                    </>
                )}

                <div className={`flex items-center gap-3 pt-4 border-t border-gray-100 dark:border-gray-700 transition-opacity duration-300 ${!text || loading || error ? 'opacity-50 pointer-events-none' : 'opacity-100'}`}>
                    <button 
                        onClick={handleCopy}
                        disabled={!text || loading || error}
                        className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-blue-600 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-blue-700 active:bg-blue-500 active:scale-95 disabled:bg-blue-400 disabled:cursor-not-allowed">
                        {copyStatus}
                    </button>

                    <button 
                        onClick={() => {
                            try {
                                if (text) window.location.href = `mailto:?body=${encodeURIComponent(text)}`;
                            } catch (e) {
                                console.error(e);
                            }
                        }}
                        disabled={!text || loading || error}
                        className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 bg-white transition-all hover:bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:hover:bg-gray-600 active:scale-90 disabled:opacity-50" 
                    >
                        <img className="w-5 h-5 opacity-70 dark:invert" src='/public/assets/logo/email-i.png' alt="email"/>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ResultPanel;