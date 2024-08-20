// ~/components/ui/pagination.js

import { useSearchParams } from "@remix-run/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./button";

export function Pagination({
  totalPages,
  currentPage,
}: { totalPages: number; currentPage: number }) {
  const [searchParams, setSearchParams] = useSearchParams();

  const handlePageChange = (page: number) => {
    if (page > 0 && page <= totalPages) {
      searchParams.set("page", page.toString());
      setSearchParams(searchParams);
    }
  };

  return (
    <div className="flex items-center justify-center space-x-2">
      <Button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="text-sm text-muted-foreground disabled:opacity-50"
        size={"sm"}
      >
        <ChevronLeft className="size-4" />
      </Button>

      {[...Array(totalPages)].map((_, index) => (
        <Button
          // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
          key={index}
          onClick={() => handlePageChange(index + 1)}
          className={`text-sm ${
            currentPage === index + 1
              ? "bg-primary text-white"
              : "border text-muted-foreground"
          } rounded`}
          size={"sm"}
        >
          {index + 1}
        </Button>
      ))}

      <Button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="text-sm text-muted-foreground border rounded disabled:opacity-50"
        size={"sm"}
      >
        <ChevronRight className="size-4" />
      </Button>
    </div>
  );
}
