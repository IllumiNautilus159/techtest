import { useTable } from "react-table";
import { useState } from "react";
import { number } from "zod";
import moves from "../../data/moves.json";
import { Move } from "../../types/moves";
export type TableProps = {
  className?: string;
  columns: any[];
  data: any[];
  getRowProps?: (cell: any) => any;
  getCellProps?: (cell: any) => any;
  noDataMessage?: string;
};

export const Table = (

  {

    className = "",
    columns,
    data,
    getCellProps,
    getRowProps,
    noDataMessage,

  }: 

  TableProps

) => {

  const { getTableProps, getTableBodyProps, flatHeaders, rows, prepareRow } =
    useTable({
      columns,
      data,
    });

    type pokeBuild = {
      _move:Move[],
      pokemonName:string,
      totalDamage:number
    }

    const buildPoke:pokeBuild = (make:pokeBuild)=>
      make.map((m)=>{
       return { 
        _move:m.moves,
        pokemonName:m.name,
        totalDamage:m.power
      }
    });
    
    pokeBuild({_move:moves,pokemonName:'rar'})

    const [power,setPower] = useState(0);
    console.log(power);
    /*
    const [tableState, setTableState] = useState([]);
    console.log(power);
    const TotalPower = ()=>{
      
      const p = tableState.map((t:PowerTally)=>{
        setPower(t.power * t.pp);
      });
    
      return p
    
    }*/

  return (
    <form id='snorlaxMoves'>
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
              <tr {...row.getRowProps(getRowProps && getRowProps(row))}>
                {row.cells.map((cell) => (
                  
                  <td className="p-4" {...cell.getCellProps(getCellProps && getCellProps(cell))}>
                    {row.values.checked ?? false}
                    {row.getRowProps(cell).column.Header == "Selected" ? 
                    
                        <input type='checkbox' onChange={
                          (e)=>(setPower( // likely way more convoluted than it needs to be right
                            !cell.row.values.checked ? // see if it's checked
                            power + (parseInt(cell.row.values.damage) * parseInt(cell.row.values.pp)) : // if it is being checked, add value
                            power - (parseInt(cell.row.values.damage) * parseInt(cell.row.values.pp)) // if its being unchecked, subtract
                            ),(
                            cell.row.values.checked ? // toggle "checked" value
                            cell.row.values.checked = false :
                            cell.row.values.checked = true
                          ),
                          console.log(cell.row.values)//just for debugging
                        )
                      }></input>
                      :
                      // eslint-disable-next-line react/jsx-key
                    (_r == cell.value) ? (
                      <a className="underline hover:font-bold m-10" href={`/moves/${cell.value}`}>
                        { cell.render("Cell") }
                      </a>
                    ):(
                      cell.render("Cell")
                    )}
                    </td>)
                )}
              
              </tr>
            );
          })
        )}
      </tbody>
    </table>
    <p>Total Powaa: {power}</p>
    </form>
  );
};
