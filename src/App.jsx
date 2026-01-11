import Header from './Header.jsx'
import EditorPanel from './editorPanel.jsx'
import ResultPanel from './resultPanel'
import { useState } from 'react'

function App() {

  const [loading,setLoading] = useState(false) 
  const [rewrittenEmail, setRewrittenEmail] = useState("")  
  const [changes, setChanges] = useState("")

  return(
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
          <Header/>
          <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2">
            <EditorPanel
              setRewrittenEmail={setRewrittenEmail}
              setChanges={setChanges}
              setLoading={setLoading}
              changes={changes}
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