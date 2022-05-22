import { useDispatch, useSelector } from '@/stores';
import { loginUser, logoutUser } from '@/stores/auth';

export const Temp = () => {
  const { isLogged } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleClick = () => {
    if (isLogged) {
      return dispatch(logoutUser());
    }
    return dispatch(loginUser());
  };

  return <button onClick={handleClick}>{isLogged ? '로그아웃' : '로그인'}</button>;
};
