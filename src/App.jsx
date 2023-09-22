import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ViewProducts } from './components/ViewProducts';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ViewProductDetails } from './components/ViewProductDetails';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<ViewProducts/>} />
        <Route path="/product/:id" element={<ViewProductDetails/>}/>
      </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
