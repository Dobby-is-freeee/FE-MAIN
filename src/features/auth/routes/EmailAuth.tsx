import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import EmailAuthContainer from '@/features/auth/containers/EmailAuthContainer';

function EmailAuth() {
  const navigate = useNavigate();

  const goToComplete = useCallback(() => {
    navigate('/auth/complete');
  }, [navigate]);

  return <EmailAuthContainer successAuth={goToComplete} />;
}

export default EmailAuth;
