import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '@shared/stores/auth';
import { useAppDispatch } from '@common/store';

import { CompleteForm } from '../components/CompleteForm';

const Wrap = styled.article``;

export interface CompleteContainerProps {}

function CompleteContainer() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

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
