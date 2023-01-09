import React from 'react';


export default function SubMenu(props) {
 const {title, menu, hasChild} = props;

  return (
      <div>
    { 
       !hasChild && 
         <li className="nav-item">
            <a id="dropdownMenu2" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="dropdown-item">{title}</a>
        </li>
    }
    {hasChild  && 
                <li className="dropdown">
                 <a id={`dropdownMenu-${1}`} href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="dropdown-item dropdown-toggle">{title}</a>
                 <ul aria-labelledby={`dropdownMenu-${1}`} role={"menu"} className="dropdown-menu border-0 shadow">
                 {
                    menu.sub.map((sub, index) => {
                        return <div key={index}>
                        { 
                            !sub.hasChild && 
                               <li className="nav-item">
                                 <a id="dropdownMenu989" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="dropdown-item">{title}</a>
                             </li>
                         }
                         {  sub.hasChild   && 
                                     <li className="dropdown-submenu pull-left">
                                      <a id={`dropdownMenu-${index}`} href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="dropdown-item dropdown-toggle">{sub.title}</a>
                                      <ul aria-labelledby={`dropdownMenu-${index}`}  className="dropdown-menu dropdown-menu-right border-0 shadow">
                                      {
                                         sub.sub.map((sub1, index) => {
                                             return <div key={index}> <li >
                                                 <a tabIndex="-1" href="#" className="dropdown-item" style={{
                                                     fontSize: 12
                                                 }}>{sub1.title}</a>
                                             </li> <li className="dropdown-divider"></li></div>
                                         })
                                     } 
                                      </ul>
                                    </li>
                         }
                         <li className="dropdown-divider"></li>
                         </div>
                    })
                } 
                 </ul>
               </li>
    }
    
    </div>
  );
}

