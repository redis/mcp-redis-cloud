export const DEFAULT_PAGE_SIZE = 10;

export interface Pageable {
  page: number;
  size: number;
}

export interface Page<T> {
  content: T[];
  pageable: {
    pageNumber: number;
    pageSize: number;
  };
  totalElements: number;
  totalPages: number;
  first: boolean;
  last: boolean;
  size: number;
  number: number;
  numberOfElements: number;
  empty: boolean;
}

export const createPage = <T>(
  content: T[],
  pageable: Pageable,
  totalElements: number,
): Page<T> => {
  const totalPages = Math.ceil(totalElements / pageable.size);

  return {
    content,
    pageable: {
      pageNumber: pageable.page,
      pageSize: pageable.size,
    },
    totalElements,
    totalPages,
    first: pageable.page === 0,
    last: pageable.page === totalPages - 1,
    size: pageable.size,
    number: pageable.page,
    numberOfElements: content.length,
    empty: content.length === 0,
  };
};
