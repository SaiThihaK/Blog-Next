import React from 'react';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';

const PaginationButtons = () => {
  return (
    <div>
      <Pagination>
        <PaginationContent className="justify-between w-full">
          <PaginationPrevious href="#" />
          <PaginationNext href="#" />
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default PaginationButtons;
