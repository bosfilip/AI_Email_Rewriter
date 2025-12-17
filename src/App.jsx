import Header from './Header.jsx'
import EditorPanel from './editorPanel.jsx'
import ResultPanel from './resultPanel'

function App() {
  return(
  <>
      <Header/>
      <div className='flex gap-5 px-10 py-10 justify-center'>
        <EditorPanel/>
        <ResultPanel/>
      </div>
  </>
  )
}

export default App
