import styled, { css } from 'styled-components';
import { useEffect, useMemo, useState } from 'react';
import { PaginationArrow, PaginationJumpArrow } from '@assets/images';

interface PaginationItemInnerStyleProps {
  selected?: boolean;
}

interface ArrowStyleProps {
  disabled?: boolean;
}

const Wrap = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;
`;

const PaginationItem = styled.li`
  display: inline-flex;
  justify-content: center;
  border: none;
  text-align: center;
  line-height: 32px;
  margin: 0;
  width: 32px;
  height: 32px;
`;

const PaginationItemInner = styled.a<PaginationItemInnerStyleProps>`
  user-select: none;
  color: ${({ theme }) => theme.colors.gray2};
  cursor: pointer;
  height: 100%;
  font-weight: 700;
  font-size: 14px;

  ${({ selected, theme }) =>
    selected &&
    css`
      color: ${theme.colors.primary};
      text-decoration: underline;
      font-size: 15px;
    `}
`;

const PrevArrow = styled(PaginationItem)<ArrowStyleProps>`
  ${({ disabled }) =>
    disabled &&
    css`
      pointer-events: none;
      svg {
        opacity: 0.5;
      }
    `}
`;
const NextArrow = styled(PaginationItem)<ArrowStyleProps>`
  ${({ disabled }) =>
    disabled &&
    css`
      pointer-events: none;
      svg {
        opacity: 0.5;
      }
    `}

  svg {
    transform: rotateY(180deg);
  }
`;
export interface TablePaginationProps {
  /**
   * 렌더링 된 item의 총 길이
   */
  total?: number;
  /**
   * pagination을 몇 개씩 보여줄 지에 대한 여부
   *
   * @example 3이라면 [1, 2, 3]이 렌더링된다.
   */
  paginationPer?: number;
  /**
   * 1페이지에 몇 개를 보여줄 것인가에 대한 여부
   */
  pageSize?: number;
  /**
   * 현재 위치하는 page
   */
  current?: number;
  onPageChange?: (page: number) => void;
}

export const TablePagination = ({
  total = 1,
  paginationPer = 10,
  pageSize = 20,
  current = 1,

  onPageChange,
}: TablePaginationProps) => {
  const [page, setPage] = useState(1);

  const lastPage = useMemo(() => {
    return Math.ceil(total / pageSize);
  }, [pageSize, total]);

  const pageRange = useMemo(() => {
    return Math.ceil(page / paginationPer);
  }, [page, paginationPer]);

  const maxRange = useMemo(() => {
    return Math.ceil(lastPage / paginationPer);
  }, [lastPage, paginationPer]);

  const paginations = useMemo(() => {
    const pages = Array.from({ length: lastPage }).map((_, i) => i + 1);
    const start = paginationPer * (pageRange - 1);
    const end = paginationPer * pageRange;
    return pages.slice(start, end);
  }, [lastPage, pageRange, paginationPer]);

  const currentLastPage = useMemo(() => {
    return paginations[paginations.length - 1];
  }, [paginations]);

  const handlePageChangeCurried = (page: number) => () => {
    setPage(page);
  };

  const handleNextJumpClick = () => {
    setPage(currentLastPage + 1);
  };

  const handlePrevJumpClick = () => {
    setPage(
      paginations[0] - paginationPer < 1 ? 1 : paginations[0] - paginationPer,
    );
  };

  const handlePrevClick = () => {
    setPage((prev) => {
      if (prev <= 1) {
        return 1;
      }
      return prev - 1;
    });
  };

  const handleNextClick = () => {
    setPage((prev) => {
      if (prev >= lastPage) {
        return lastPage;
      }

      return prev + 1;
    });
  };

  useEffect(() => {
    setPage(current);
  }, [current]);

  useEffect(() => {
    onPageChange?.(page);
  }, [onPageChange, page]);

  if (lastPage <= 0) {
    return null;
  }

  return (
    <div>
      <Wrap>
        <PrevArrow disabled={pageRange <= 1}>
          <PaginationItemInner
            rel="nofollow"
            aria-label="first-page"
            tabIndex={0}
            onClick={handlePrevJumpClick}>
            <PaginationJumpArrow />
          </PaginationItemInner>
        </PrevArrow>

        <PrevArrow disabled={page <= 1}>
          <PaginationItemInner
            rel="nofollow"
            aria-label="prev-page"
            tabIndex={0}
            onClick={handlePrevClick}>
            <PaginationArrow />
          </PaginationItemInner>
        </PrevArrow>

        {paginations.map((i) => (
          <PaginationItem key={i} tabIndex={0}>
            <PaginationItemInner
              selected={i === page}
              rel="nofollow"
              onClick={handlePageChangeCurried(i)}>
              {i}
            </PaginationItemInner>
          </PaginationItem>
        ))}

        <NextArrow disabled={lastPage === page}>
          <PaginationItemInner
            rel="nofollow"
            aria-label="next-page"
            tabIndex={0}
            onClick={handleNextClick}>
            <PaginationArrow />
          </PaginationItemInner>
        </NextArrow>
        <NextArrow disabled={maxRange === pageRange}>
          <PaginationItemInner
            rel="nofollow"
            aria-label="last-page"
            tabIndex={0}
            onClick={handleNextJumpClick}>
            <PaginationJumpArrow />
          </PaginationItemInner>
        </NextArrow>
      </Wrap>
    </div>
  );
};
