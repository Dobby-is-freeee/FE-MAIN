import { Route, Routes } from 'react-router-dom';

import { StudioMain } from './StudioMain';
import { StudioCreate } from './StudioCreate';
import { Empty } from '../components/common';

export const StudioRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<StudioMain />} />
      <Route path="/create" element={<StudioCreate />} />
      <Route path="*" element={<Empty />} />
    </Routes>
  );
};
