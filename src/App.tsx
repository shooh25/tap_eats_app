import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from 'react-query'
import Top from './pages/Top';

const App = () => {
  const queryClient = new QueryClient()

  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="/" element={<Top />} />
        </Routes>
      </QueryClientProvider>
    </BrowserRouter>
  )
}

export default App