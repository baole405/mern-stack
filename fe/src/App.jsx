import React from 'react'
import { Routes } from 'react-router-dom'
import Homepage from './page/homepage'
import NoteDetailPage from './page/NoteDetailPage'
import CreatePage from './page/createpage'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/notes/:id" element={<NoteDetailPage />} />
      </Routes>
    </div>
  )
}

export default App