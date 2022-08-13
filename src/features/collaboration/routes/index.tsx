import { Route, Routes } from 'react-router-dom';

import { CollaborationMain } from './CollaborationMain';

export const CollaborationRoutes = () => {
  return (
    <Routes>
      <Route path="/collaboration" element={<CollaborationMain />} />
    </Routes>
  );
};
