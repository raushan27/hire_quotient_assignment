import { getTotalPages } from "../../utils/Paging";
import PropTypes from "prop-types";

import styles from "./Pagination.module.css";

const Pagination = (props) => {
  const { usersLength, setPage, page } = props;

  const totalPages = getTotalPages(usersLength);
  const changePage = (index) => {
    setPage(index);
  };

  const navigatePage = (index) => {
    if (index < 1) {
      index = 1;
    } else if (index > totalPages) {
      index = totalPages;
    }
    setPage(index);
  };

  let pages = [];
  pages.push(
    <div
      key={-3}
      className={`${styles.page} ${page === 1 ? styles.disabled : ""}`}
      onClick={() => changePage(1)}
    >
      <i className="fa-solid fa-caret-left first-page"></i>
    </div>
  );
  pages.push(
    <div
      key={-2}
      className={`${styles.page} ${page === 1 ? styles.disabled : ""}`}
      onClick={() => navigatePage(page - 1)}
    >
      <i className="fa-solid fa-angle-left previous-page"></i>
    </div>
  );
  for (let i = 1; i <= totalPages; i++) {
    pages.push(
      <div
        key={i}
        onClick={() => changePage(i)}
        className={`${styles.page} ${page === i ? styles.selected : ""}`}
      >
        {i}
      </div>
    );
  }
  pages.push(
    <div
      key={-1}
      className={`${styles.page} ${page === totalPages ? styles.disabled : ""}`}
      onClick={() => navigatePage(page + 1)}
    >
      <i className="fa-solid fa-angle-right next-page"></i>
    </div>
  );
  pages.push(
    <div
      key={0}
      className={`${styles.page} ${page === totalPages ? styles.disabled : ""}`}
      onClick={() => changePage(totalPages)}
    >
      <i className="fa-solid fa-caret-right last-page"></i>
    </div>
  );

  return (
    <div className={styles.paginationContainer}>
      <div className={styles.pagination}>{pages}</div>
    </div>
  );
};

Pagination.propTypes = {
  usersLength: PropTypes.number,
  setPage: PropTypes.func,
  page: PropTypes.number,
  deleteSelected: PropTypes.func,
};

export default Pagination;
