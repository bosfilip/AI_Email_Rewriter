import Header from './Header.jsx'
import EditorPanel from './editorPanel.jsx'
import ResultPanel from './resultPanel'
import { useState, useEffect } from 'react'

function App() {
  const [loading, setLoading] = useState(false) 
  const [rewrittenEmail, setRewrittenEmail] = useState("")  
  const [changes, setChanges] = useState("")
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 dark:bg-zinc-950 transition-colors duration-300">
      <div className="mx-auto max-w-[1132px]">
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2 items-stretch">
          <EditorPanel
            setRewrittenEmail={setRewrittenEmail}
            setChanges={setChanges}
            setLoading={setLoading}
            loading={loading}
          />
          <ResultPanel
            text={rewrittenEmail}
            changes={changes}
            loading={loading}
          />
        </div>
      </div>
    </div>
  )
}

export default App