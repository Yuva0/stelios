export interface PaginationProps {
  totalPages: number;
  selectedPage: number;
  totalDisplayedPages?: number;
  onChange: (page: number) => void;
}
