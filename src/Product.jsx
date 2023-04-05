import React from 'react'
import {adder} from './Footer';

export default function Section() {
  return (
    <div id='prod'>
        <ul>
            <h4>Coffee</h4>
            <li>
                Hot Coffee
                <button id='add1' value={60} onClick={adder("add1","Hot Coffee")}>Add</button>
            </li>
            <li>
                Cold Coffee
                <button id='add2' value={50} onClick={adder("add2","Cold Coffee")}>Add</button>
            </li>
            <h4>Tea</h4>
            <li>
                Lime Tea
                <button id='add3' value={30} onClick={adder("add3","Lime Tea")}>Add</button>
            </li>
            <li>
                Masala Tea
                <button id='add4' value={30} onClick={adder("add4","Masala Tea")}>Add</button>
            </li>
            <h4>Cakes</h4>
            <li>
                Black Forest
                <button id='add5' value={110} onClick={adder("add5","Black Forest")}>Add</button>
            </li>
            <li>
                Chocalate Cake
                <button id='add6' value={70} onClick={adder("add6","Chocalate Cake")}>Add</button>
            </li>
        </ul>
    </div>
  )
}