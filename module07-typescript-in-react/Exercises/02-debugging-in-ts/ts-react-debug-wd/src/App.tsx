import { BrowserRouter, Route, Routes } from 'react-router';
import { ErrorBoundary, Loading } from '@/components';
import { MainLayout, ProtectedLayout } from '@/layouts';
import { CreateEvent, Events, Home, Login, NotFound, Register } from '@/pages';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={<MainLayout />}
          hydrateFallbackElement={<Loading />}
          errorElement={<ErrorBoundary />}
        >
          <Route index element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='events' element={<Events />} />
          <Route path='app' element={<ProtectedLayout />}>
            <Route index element={<CreateEvent />} />
          </Route>
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
