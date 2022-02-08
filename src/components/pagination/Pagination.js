import "./pagination.scss";
import { selectAllTemplates, selectCurrentpage, selectTotalPages, nextPage, previouPage } from "../../redux/slice";
import { useSelector, useDispatch } from "react-redux";

function Pagination() {
    const dispatch = useDispatch();
    const currentPage = useSelector(selectCurrentpage);
    const pageTemplates = useSelector((state) => state.template.pageTemplates);
    const templatesPerPage = useSelector((state) => state.template.templatesPerPage);
    const totalPages = Math.ceil(pageTemplates.length / templatesPerPage);

    return (
        <div className="pagination">
            <button
                className="pagination_previou"
                onClick={() => dispatch(previouPage())}
                disabled={currentPage === 1}
                data-testid="Previous"
            >
                Previous
            </button>
            <div className="pagination_position">
                <p>
                    <span>{currentPage}</span> of {totalPages}
                </p>
            </div>
            <button
                className="pagination_next"
                onClick={() => dispatch(nextPage())}
                disabled={currentPage === totalPages || currentPage > totalPages}
                data-testid="Next"
            >
                Next
            </button>
        </div>
    );
}

export default Pagination;
