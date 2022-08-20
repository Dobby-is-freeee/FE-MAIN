import { useLocation, useNavigate } from 'react-router-dom';
import qs from 'qs';

/**
 * navigate를 래핑한 query push 훅스입니다.
 *
 * 현재 페이지의 쿼리 + 새로운 쿼리로 링크를 이동합니다.
 *
 * 만약 인자를 string으로 건넨다면 기존 navigate과 동작 방식이 비슷합니다.
 *
 * @example
 * ```ts
 * const navigate = useQueryNavigate();
 *
 * navigate({ page: 1 })
 * ```
 * 현재 페이지가 /example?size=20 이라면, /example?page=1&size=20으로 이동합니다.
 *
 * 객체가 아닌 string을 넘기면, pathname로 변경할 수 있습니다.
 * ```ts
 * navigate('/local')
 * ```
 */
export const useQueryNavigate = () => {
  const navigate = useNavigate();
  const { pathname, search } = useLocation();

  return (newQueries: Record<string, any> | string) => {
    if (typeof newQueries === 'string') {
      return navigate(newQueries);
    }

    const currentQueries = qs.parse(search, { ignoreQueryPrefix: true });
    const mergeQueries = { ...currentQueries, ...newQueries };

    console.log(pathname + qs.stringify(mergeQueries, { addQueryPrefix: true }));
    navigate(pathname + qs.stringify(mergeQueries, { addQueryPrefix: true }));
  };
};
