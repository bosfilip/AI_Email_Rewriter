import React from 'react';
import { useState } from 'react';
import Subject from './subject.jsx'
import ToneButton from './toneButton.jsx'
import Email from './email.jsx';
import promptBuilder from './utils.js';

export default function EditorPanel({ setLoading, setRewrittenEmail, setChanges, loading }) {

    const [subject,setSubject] = useState('')
    const [email,setEmail] = useState("")
    const [selectedTone,setSelectedTone] =useState("Friendly") 

    const tones = ["Friendly","Formal","Concise","Confident","Polite Rejection"]

    const handleRewrite = async () => { 
        if (!email.trim() || loading) return;
        
        setLoading(true)

        try {
            const prompt = promptBuilder({
                subject: subject,
                emailContent: email,
                tone: selectedTone
            })

            const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${import.meta.env.VITE_GEMINI_API_KEY}`

            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    contents: [{
                        parts: [{text: prompt}]
                    }]
                }),
            });

            const data = await response.json();
            const aiResponse = data.candidates[0].content.parts[0].text
            const parts = aiResponse.split("###")

            setRewrittenEmail(parts[0].trim())
            
            if (parts.length > 1) {
                setChanges(parts[1].trim())
            } else {
                setChanges("")
            }
        } catch (error) {
            console.error(error)
            alert('Something went wrong, please try again')
        } finally {
            setLoading(false)
        }
    }

    const clearEmailInput = () => {
        setSubject("")
        setEmail("")
        setSelectedTone("Friendly")
    }

    return (
        <div className="flex h-full flex-col rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:bg-gray-800 dark:border-gray-700 transition-colors duration-200">
            
            <div className="mb-6 flex items-center justify-between border-b border-gray-100 pb-4 dark:border-gray-700">
                <h3 className="text-lg font-bold leading-tight tracking-tight text-gray-900 dark:text-white">Original Email</h3>
            </div>

            <div className="flex-1 space-y-5">
                <Subject value={subject} onChange={setSubject}/>
                <Email value={email} onChange={setEmail}/>

                <div className="flex flex-col gap-3 pt-2">
                    <h3 className="text-sm font-bold text-gray-900 dark:text-white">Choose Tone</h3>
                    <div className="flex flex-wrap gap-2">
                        {tones.map((tone=>
                            <ToneButton 
                                key={tone}
                                label={tone}
                                isSelected={selectedTone == tone}
                                onSelect={()=>setSelectedTone(tone)} />
                        ))}
                    </div>
                </div>
            </div>

            <div className="mt-8 flex items-center gap-3 border-t border-gray-100 pt-6 dark:border-gray-700">
                <button 
                    disabled={loading}
                    onClick={handleRewrite} 
                    className={`flex-1 rounded-lg px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-all ${loading ? 'bg-blue-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700 active:bg-blue-500'}`}
                >
                    {loading ? 'Rewriting...' : 'Rewrite Email'}
                </button>
                <button 
                    onClick={clearEmailInput} 
                    className="rounded-lg border border-gray-200 px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:border-gray-300 transition-colors active:bg-gray-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:border-gray-500"
                >
                    Clear
                </button>
            </div>
        </div>
    )
}