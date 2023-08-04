const DataTable = ({ data, columns }) => (
  <table>
    <thead>
      <tr>
        {columns.map((column, index) => (
          <th key={index}>{column}</th>
        ))}
      </tr>
    </thead>
    <tbody>
      {data.map((row, index) => (
        <tr key={index}>
          {columns.map((column, index) => (
            <td key={index}>{row[column.toLowerCase().replace(" ", "_")]}</td>
          ))}
        </tr>
      ))}
    </tbody>
  </table>
);

export default DataTable;
