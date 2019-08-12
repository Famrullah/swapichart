import React from 'react';
import './table.css';

const table = props => {
  const { data } = props.data;
  // const renderHeader = () => {
  //   let header = Object.keys(data.results[0]);
  //   return header.map((item, index) => {
  //     return <th key={index}>{item}</th>;
  //   });
  // };

  const renderList = () => {
    return data.results.map((item, index) => (
      <tbody key={index}>
        <tr>
          <td>{index + 1}</td>
          <td>{item.name}</td>
          <td>{item.height}</td>
          <td>{item.mass}</td>
          <td>{item.hair_color}</td>
          <td>{item.skin_color}</td>
        </tr>
      </tbody>
    ));
  };

  return (
    <div className="list-people">
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Height</th>
            <th>Mass</th>
            <th>Hair Color</th>
            <th>Skin Color</th>
          </tr>
        </thead>
        {renderList()}
      </table>
      <button
        onClick={() => props.getUrl(data.previous)}
        disabled={data.previous == null}
      >
        Prev
      </button>
      <button
        onClick={() => props.getUrl(data.next)}
        disabled={data.next == null}
      >
        Next
      </button>
    </div>
  );
};

export default table;
