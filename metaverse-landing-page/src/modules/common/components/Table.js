import React from "react";
import PropTypes from "prop-types";
import {
  ChevronUpIcon,
  SelectorIcon,
  ChevronDownIcon,
} from "@heroicons/react/solid";
import { DIRECTION_SORT } from "../constants";
import "../assets/css/table.scss";
import TableLoading from "./TableLoading";
import Pagination from "./Pagination";
const Table = ({
  columns,
  dataSource,
  uniqueKey = "id",
  sortBy,
  sortDirection,
  onSort,
  isFetching = false,
  currentPage,
  total,
  limit,
  onChangePage,
}) => {
  return (
    <>
      <div className="relative border-l border-r border-gray-200 sm:rounded-lg">
        {isFetching && <TableLoading />}
        <div className="overflow-x-auto shadow mt-4 sm:rounded-lg border-t border-gray-200">
          <div className="align-middle inline-block min-w-full">
            <div className="overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200 table-customize">
                <thead className="bg-thead">
                  <tr>
                    {columns.map((column, idx) => {
                      return (
                        <th
                          key={idx}
                          onClick={() => {
                            column.hasSort && onSort(column.sortField);
                          }}
                          scope="col"
                          className={`text-center px-2 py-4 text-xs font-medium cursor-pointer text-white uppercase tracking-wider ${
                            column.classNameHeader ? column.classNameHeader : ""
                          }`}
                        >
                          {column.hasSort ? (
                            <div className="flex items-center w-full">
                              {column.title}
                              {column.hasSort &&
                                (sortBy === column.sortField ? (
                                  sortDirection === DIRECTION_SORT.ASC ? (
                                    <ChevronUpIcon className="sort-icon active" />
                                  ) : (
                                    <ChevronDownIcon className="sort-icon active" />
                                  )
                                ) : (
                                  <SelectorIcon className="sort-icon" />
                                ))}
                            </div>
                          ) : (
                            column.title
                          )}
                        </th>
                      );
                    })}
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {dataSource?.length > 0 ? (
                    dataSource.map((item, k) => {
                      return (
                        <tr key={item[uniqueKey]}>
                          {columns.map((column) => {
                            return (
                              <td
                                key={column.dataIndex}
                                className={`px-2 py-2 text-sm ${
                                  column.className ? column.className : ""
                                }`}
                              >
                                {column.render
                                  ? column.render(item[column.dataIndex], item)
                                  : item[column.dataIndex]}
                              </td>
                            );
                          })}
                        </tr>
                      );
                    })
                  ) : (
                    <tr>
                      <td
                        className="px-6 py-10 whitespace-nowrap text-center text-base text-gray-400"
                        colSpan={columns.length}
                      >
                        Không tìm thấy bản ghi nào phù hợp
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      {total > limit && (
        <Pagination
          current={currentPage}
          total={total}
          limit={limit}
          items={dataSource?.length}
          onChangePage={onChangePage}
          isDisabled={isFetching}
        />
      )}
    </>
  );
};

Table.propTypes = {
  columns: PropTypes.arrayOf(
    PropTypes.exact({
      title: PropTypes.string,
      dataIndex: PropTypes.string,
      className: PropTypes.string,
      render: PropTypes.func,
      classNameHeader: PropTypes.string,
      sortField: PropTypes.string,
      hasSort: PropTypes.bool,
    })
  ),
  dataSource: PropTypes.array,
  uniqueKey: PropTypes.string,
  sortBy: PropTypes.string,
};

export default React.memo(Table);
