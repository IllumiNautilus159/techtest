import { useTable } from "react-table";

export type TableProps = {
  className?: string;
  columns: any[];
  data: any[];
  getRowProps?: (cell: any) => any;
  getCellProps?: (cell: any) => any;
  noDataMessage?: string;
};

export const Table = ({
  className = "",
  columns,
  data,
  getCellProps,
  getRowProps,
  noDataMessage,
}: TableProps) => {
  const { getTableProps, getTableBodyProps, flatHeaders, rows, prepareRow } =
    useTable({
      columns,
      data,
    });

  return (
    <table {...getTableProps()} className={`w-full border-l p-4 ${className}`}>
      <thead>
        <tr>
          {flatHeaders
            .filter((header) => header.columns === undefined)
            .map((header) => (
              // eslint-disable-next-line react/jsx-key
              <th className="border-b p-4" {...header.getHeaderProps()}>
                {header.render("Header")}
              </th>
            ))}
        </tr>
      </thead>
      <tbody {...getTableBodyProps()}>
        {!data.length ? (
          <tr>
            <td className="p-4" colSpan={flatHeaders.length}>
              {noDataMessage ?? "None"}
            </td>
          </tr>
        ) : (
          rows.map((row) => {
            prepareRow(row);

            const _r = row.cells[0]?.value;
            
            return (
              // eslint-disable-next-line react/jsx-key
              <tr {...row.getRowProps(getRowProps && getRowProps(row))}>
                {row.cells.map((cell) => (
                  // eslint-disable-next-line react/jsx-key
                  <td
                    className="p-4"
                    {...cell.getCellProps(getCellProps && getCellProps(cell))}
                  >
                    {(_r == cell.value) ? (
                      <a className="underline hover:font-bold m-10" href={`/moves/${cell.value}`}>
                        { cell.render("Cell") }
                    </a>
                    ):(
                      cell.render("Cell")
                    )}
                  </td>
                ))}
              </tr>
            );
          })
        )}
      </tbody>
    </table>
  );
};
