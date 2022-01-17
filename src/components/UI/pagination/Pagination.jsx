import React from "react";
import { usePagination } from "../../../hooks/usePagination";
import MyButton from "../buttons/MyButton";

const Pagination = ({totalPages, changePage, page}) => {
  const pagesArray = usePagination(totalPages)
  return (
    <div className="page__wrapper">
        {pagesArray.map(p =>
          <MyButton key={p} onClick={() => changePage(p)} currentpage={page === p ? 1 : 0}>{p}</MyButton>
        )}
      </div>
  )
}

export default Pagination