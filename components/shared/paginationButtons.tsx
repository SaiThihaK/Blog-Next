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
import { cn } from '@/lib/utils';

interface Props {
  prevDisabled: boolean;
  nextDisabled: boolean;
  onNext: () => void;
  onPrev: () => void;
}
const PaginationButtons: React.FC<Props> = ({
  prevDisabled,
  nextDisabled,
  onNext,
  onPrev,
}) => {
  return (
    <div>
      <Pagination>
        <PaginationContent className="justify-between w-full">
          <PaginationPrevious
            onClick={onPrev}
            className={cn(prevDisabled && 'hidden pointer-events-none')}
          />
          <PaginationNext
            onClick={onNext}
            className={cn(nextDisabled && 'hidden pointer-events-none')}
          />
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default PaginationButtons;
