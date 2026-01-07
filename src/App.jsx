import Header from './Header.jsx'
import EditorPanel from './editorPanel.jsx'
import ResultPanel from './resultPanel'
import { useState } from 'react'

function App() {

  const [loading,setLoading] = useState(false) 
  const [rewrittenEmail, setRewrittenEmail] = useState("")  
  const [changes, setChanges] = useState("")

  return(
  <>
      <Header/>
      <div className='flex gap-5 px-10 py-10 justify-center'>
        <EditorPanel
        setRewrittenEmail={setRewrittenEmail}
        setChanges={setChanges}
        setLoading={setLoading}
        changes={changes}/>
        <ResultPanel
        text = {rewrittenEmail}
        changes = {changes}
        loading = {loading}/>
      </div>
  </>
  )
}

export default App
