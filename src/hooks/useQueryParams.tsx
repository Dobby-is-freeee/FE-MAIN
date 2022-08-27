import { useLocation } from 'react-router-dom';
import qs from 'qs';

type QueryRefiner<T> = (queries: Record<string, string>) => T;

/**
 * 현재 페이지의 query를 object로 변환합니다.
 *
 * refiner 함수를 이용해 query를 정제합니다.
 *
 * @param refiner - 현재 페이지의 queryObject를 받아 원하는 타입으로 정제할 수 있다.
 * @returns
 */
export const useQueryParams = <T,>(refiner: QueryRefiner<T>) => {
  const { search } = useLocation();
  const queryObject = qs.parse(search, { ignoreQueryPrefix: true });

  return refiner(queryObject as Record<string, string>);
};
