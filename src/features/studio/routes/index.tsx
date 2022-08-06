import { Route, Routes } from 'react-router-dom';

import { Empty } from '../components/common';
import { StudioCreate } from './StudioCreate';
import { StudioMain } from './StudioMain';

export const StudioRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<StudioMain />} />
      <Route path="/create" element={<StudioCreate />} />
      <Route path="*" element={<Empty />} />
    </Routes>
  );
};
