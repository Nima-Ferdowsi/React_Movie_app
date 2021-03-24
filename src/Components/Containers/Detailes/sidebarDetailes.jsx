import React from 'react';
const SidebarDetailes = (props) => {
    return ( 
        
        <section className={`side-detailes ${props.classes}`}>
         <ul className="side-list">
             <li className="side-item-topic ">
                Status:
             </li>
             <li className="side-item-answer font-weight-lighter status">Releeased</li>
         </ul>
         <ul className="side-list">
             <li className="side-item-topic ">
                Language:
             </li>
             <li className="side-item-answer font-weight-lighter language">Releeased</li>

         </ul>
         <ul className="side-list">
             <li className="side-item-topic ">
                KeyWords:
             </li>
                 <ul className="list-inline list-unstyled keyword">
                 
                 </ul>
             
         </ul>
        </section>
    );
}
 
export default SidebarDetailes;