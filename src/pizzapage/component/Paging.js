import React, { useState } from "react";
import './Paging.css';
import Pagination from "react-js-pagination";


export default function Paging({page, count, setPage}) {
    const [curPage, setCurPage] = useState(1);

    const handlePageChange = (t_page) => {
        setCurPage(t_page);
        setPage(t_page);
    };

    return (
        <Pagination
            activePage={curPage} // {page}
            itemsCountPerPage={2}
            totalItemsCount={10} // {count}
            pageRangeDisplayed={5}
            prevPageText={"‹"}
            nextPageText={"›"}
            onChange={handlePageChange}//{() => setPage(page)}
        />
    );
};
/*
export default function Paging({page, count, setPage}) {
    const [curPage, setCurPage] = useState(1);

    const handlePageChange = (curPage) => {
        setCurPage(curPage);
    }
    return (
        <Pagination
            activePage={page}
            itemsCountPerPage={2}
            totalItemsCount={10}
            pageRangeDisplayed={5}
            prevPageText={"‹"}
            nextPageText={"›"}
            onChange={() => {
                handlePageChange(page);
            }}
        />
    );
};*/