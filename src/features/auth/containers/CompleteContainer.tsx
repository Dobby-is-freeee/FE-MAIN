import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import { CompleteForm } from '../components/CompleteForm';

import { loginUser } from '@/stores/auth';
import { useDispatch } from '@/stores';

const Wrap = styled.article``;

export interface CompleteContainerProps {}

function CompleteContainer() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleMoveToStudioClick = () => {
    dispatch(loginUser());
    navigate('/studio');
  };

  return (
    <Wrap>
      <CompleteForm onMoveToStudioClick={handleMoveToStudioClick} />
    </Wrap>
  );
}

export default CompleteContainer;
