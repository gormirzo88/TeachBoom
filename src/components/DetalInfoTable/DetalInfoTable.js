import React from 'react';

const DetalInfoTable = ({ list, delet }) => {
    return (
        <tbody>{
            list.map( (info, index) => {
                return (
                    <tr key={info.id}>
                        <td>{index +1}</td>
                        <td>{info.FirstName} {info.LastName}</td>
                        <td>{info.Email}</td>
                        <td>{info.phoneNumber}</td>
                        <td>{info.age}</td>
                        <td>{info.gender}</td>
                        <th onClick={() => delet(info)}><i className="fas fa-times red text-danger"/></th>
                    </tr>
                )
            })
        }
        </tbody>
    );
}

export default DetalInfoTable;
