import { useMemo } from "react";
import { CardContentProps, Verb } from "../types";
import { Column, useTable } from "react-table";

interface Data {
    c1: string;
    c2: string | JSX.Element;
    c3: string | JSX.Element;
}
export const CardContent: React.FC<CardContentProps> = ({ face, verb }) => {
    const verbSplitter = (verb: string) => {
        const modes = verb.split(" ").join("").split("-")
        return (<>{modes[0]}< br />{modes[1]}</>)
    }
    const data = useMemo(
        () => [{
            c1: verb.infinitive,
            c2: verb.pastSimple.includes("-") ? verbSplitter(verb.pastSimple) : verb.pastSimple,
            c3: verb.pastSimple.includes("-") ? verbSplitter(verb.pastParticiple) : verb.pastParticiple,
        }], [verb]
    );
    const columns = useMemo<Column<Data>[]>(
        () => [
            {
                Header: 'Infinitive',
                accessor: "c1", // accessor is the "key" in the data
            },
            {
                Header: 'Past Simple',
                accessor: "c2",
            },
            {
                Header: 'Past Participle',
                accessor: 'c3',
            },
        ],
        []
    );
    const tableInstance = useTable({ columns, data })
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = tableInstance
    if (face === "front") {
        return (
            <>
                <div className="flex flex-row place-content-center p-4 mb-1 bg-zinc-800 rounded-md shadow-lg">
                    <h2 className="cards-title text-yellow-50">{verb.infinitive}</h2>
                </div>
            </>)
    }
    return (
        <table className=" w-full border border-black text-center p-4 mb-1 rounded-md shadow-lg" {...getTableProps()}>
            <thead className="bg-zinc-800 text-yellow-50">
                {// Loop over the header rows
                    headerGroups.map(headerGroup => {
                        // Apply the header row props
                        const { key, ...restHeaderGroupProps } = headerGroup.getHeaderGroupProps();
                        return (
                            <tr key={key} {...restHeaderGroupProps}>
                                {// Loop over the headers in each row
                                    headerGroup.headers.map(column => {
                                        const { key, ...restColumn } = column.getHeaderProps();
                                        return (
                                            // Apply the header cell props
                                            <th key={key} {...restColumn}>
                                                {// Render the header
                                                    column.render('Header')}
                                            </th>
                                        )
                                    })}
                            </tr>
                        )
                    })}
            </thead>
            {/* Apply the table body props */}
            <tbody {...getTableBodyProps()}>
                {// Loop over the table rows
                    rows.map(row => {
                        // Prepare the row for display
                        prepareRow(row)
                        const { key, ...restRowProps } = row.getRowProps();
                        return (
                            // Apply the row props
                            <tr key={key} {...restRowProps}>
                                {// Loop over the rows cells
                                    row.cells.map(cell => {
                                        // Apply the cell props
                                        const { key, ...restCellProps } = cell.getCellProps();
                                        return (
                                            <td key={key} className="border border-black"  {...restCellProps}>
                                                {// Render the cell contents
                                                    cell.render('Cell')}
                                            </td>
                                        )
                                    })}
                            </tr>
                        )
                    })}
            </tbody>
        </table>
    )

    return (
        <>
            <div className="flex flex-row place-content-center p-4 mb-1 bg-slate-600 rounded-md shadow-lg">
                <h2 className="text-center text-yellow-50">{verb.infinitive}</h2>
                <h2 className="text-center text-yellow-50">{verb.pastSimple}</h2>
                <h2 className="text-center text-yellow-50">{verb.pastParticiple}</h2>
            </div>
        </>
    )
}