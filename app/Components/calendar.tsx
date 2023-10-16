'use client'; 
import React, { useEffect } from 'react';
import CalBuild from './CalBuild';

  // Arrays to hold months and days
const listMonth = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const weekDay = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let boxArray = [''];

export default function Calendar() {
    useEffect(() => {
        CalBuild();
    }, []);
    return(
        <table className="border-8 border-black table-fixed">
        <thead>
            <MonthComp />
            <DayComp />
        </thead>
            <TableComp />
        </table>
    );
}

  // Table month generator
function MonthComp() {
    const nD = new Date();
    let x = listMonth[nD.getMonth()];
    return (
        <tr>
            <th id="monthHead" colSpan={7}>{x}</th>
        </tr>
    );
};
  
  // Component for day line
function DayComp() {
    return (
        <tr>
            {weekDay.map((day, index) => {
                return <th key={index + 10}>{day}</th>;
            }
            )
            }
        </tr>
    );
}

const TableComp = () => {
    const tableRows = [];
    let p = 0;
    for (let i = 0; i < 6; i++) {
      const tableData = [];
      for (let j = 0; j < 7; j++) {
        const uniqueId = `${p}`;
        const paragraphElements = [];
        for (let k = 0; k < 6; k++) {
          const uniqueParaId = `para-${i}-${j}-${k}`;
          const nodeClass = `node-${k}`;
          paragraphElements.push(
            <p key={uniqueParaId} className={nodeClass}>
            </p>
          );
        }

        tableData.push(
          <td key={uniqueId} id={uniqueId}>
              {paragraphElements}
          </td>
        );
        p++
      }
      tableRows.push(<tr key={`row-${i}`}>{tableData}</tr>);
    }
    return (
          <tbody>{tableRows}</tbody>
    );
  }