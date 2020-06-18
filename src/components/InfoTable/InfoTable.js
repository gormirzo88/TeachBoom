import React, { useState } from 'react';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import DetalInfoTable from "../DetalInfoTable";
import { deleteInfo } from "../../store/actions/infoActions";


const InfoTable = (props) => {

    const { list } = useSelector(state => state.list);
    const [sorting, setSorting] = useState({ key:"id", value: -1 });
    const dispatch = useDispatch();

    const hendleSort = (key,) => {
        let value = -1;
        if(key === sorting.key){
            value = sorting.value * -1
        }
        setSorting({
            key,
            value
        })
    }

    const deletedInfo = (data) => {
        if ( window.confirm('Delete the Info?') ) {
            dispatch(deleteInfo(data));
        }
    }

    const filterList  = list.sort( ( a, b) => {
        const first =  isNaN(Number( a[sorting.key])) ? a[sorting.key].toLowerCase() : a[sorting.key];
        const second = isNaN(Number(b[sorting.key])) ? b[sorting.key].toLowerCase() : b[sorting.key];

        return ( first > second ) ? sorting.value : (second > first) ? sorting.value * -1 : 0;
    });
    return (
        <div className='container'>
            <h1>Table</h1>
            <table className='table table-condensed'>
                <thead>
                    <tr>
                        <th></th>
                        <th onClick={() => hendleSort('FirstName','toLowerCase()')}>Fill Name</th>
                        <th onClick={() => hendleSort('Email')}>Email</th>
                        <th onClick={() => hendleSort('phoneNumber')}>Phone number</th>
                        <th onClick={() => hendleSort('age')}>Age</th>
                        <th onClick={() => hendleSort('gender')}>Gender</th>
                        <th></th>
                    </tr>
                </thead>
                 <DetalInfoTable list={filterList}
                                 delet={(data) => deletedInfo(data)}
                                />
            </table>

        </div>
    );
}

export default InfoTable;
