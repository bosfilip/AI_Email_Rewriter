import React from 'react';
import { useState } from 'react';
import Subjest from './subject.jsx'
import ToneButton from './toneButton.jsx'
import Email from './email.jsx';
import promptBuilder from './utils.js';

export default function EditorPanel() {

    const [subject,setSubject] = useState('')
    const [email,setEmail] = useState("")
    const [selectedTone,setSelectedTone] =useState("")
    const [loading,setLoading] = useState(false)
    const [rewrittenEmail, setRewrittenEmail] = useState("")   


    const tones = ["Friendly","Formal","Concise","Confident","Polite Rejection"]

    const handleRewrite = async () => { 
        if (!email.trim()) return;
        setLoading(true)

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
        console.log(aiResponse)
        
    }
    const clearEmailInput = () => {
        setSubject(""),
        setEmail(""),
        setSelectedTone("Friendly")
    }

    return (
        <div className="w-[550px] flex flex-col gap-6 rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-lg">
            
            <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold leading-tight tracking-tight text-gray-900">Original Email</h3>
                <div className="flex items-center gap-1">
                </div>
            </div>

            <Subjest value={subject} onChange={setSubject}/>
            <Email value={email} onChange={setEmail}/>

            <div className="flex flex-col gap-3">

                <h3 className="text-base font-bold text-gray-900">Choose Tone</h3>
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

            <div className="mt-auto flex items-center gap-4 border-t border-gray-200 pt-6">
                <button onClick={handleRewrite} className="flex-1 rounded-lg bg-blue-600 px-4 py-3 text-base font-semibold text-white shadow-sm hover:bg-blue-700 transition-colors active:bg-blue-500 ">Rewrite Email</button>
                <button onClick={clearEmailInput} className="rounded-lg px-4 py-3 text-base font-medium text-gray-600 hover:bg-gray-100 transition-colors active:bg-gray-50">Clear</button>
            </div>
        </div>
    )
}