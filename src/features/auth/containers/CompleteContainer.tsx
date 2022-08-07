import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { CompleteForm } from '../components/CompleteForm';

const Wrap = styled.article``;

export interface CompleteContainerProps {}

function CompleteContainer() {
  const navigate = useNavigate();

  const handleMoveToStudioClick = () => {
    navigate('/studio');
  };

  return (
    <Wrap>
      <CompleteForm onMoveToStudioClick={handleMoveToStudioClick} />
    </Wrap>
  );
}

export default CompleteContainer;
