import React from "react";
import SubMenu from "./subMenu";

export default function AppMenu(props) {
  const ENTITY_MENU = {
    title: "Entities",
    sub: [
      {
        title: "Customers",
        hasChild: true,
        sub: [
          { title: "Add New", hasChild: false },
          { title: "View All", hasChild: false },
          { title: "Customization", hasChild: false },
        ],
      },
      {
        title: "Vendors",
        hasChild: true,
        sub: [
          { title: "View All", hasChild: false },
          { title: "Add New", hasChild: false },
          { title: "Customization", hasChild: false },
        ],
      },
    ],
  };
  const SALES_MENU = {
    title: "Sales",
    sub: [
      {
        title: "Quotations",
        hasChild: true,
        sub: [
          { title: "Add New", hasChild: false },
          { title: "View All", hasChild: false },
          { title: "Customization", hasChild: false },
        ],
      },
      {
        title: "Orders",
        hasChild: true,
        sub: [
          { title: "View All", hasChild: false },
          { title: "Add New", hasChild: false },
          { title: "Customization", hasChild: false },
        ],
      },
      {
        title: "Invoices",
        hasChild: true,
        sub: [
          { title: "View All", hasChild: false },
          { title: "Add New", hasChild: false },
          { title: "Customization", hasChild: false },
        ],
      },
    ],
  };
  const PAYABLES_MENU = {
    title: "Payables",
    sub: [
      {
        title: "Purchases",
        hasChild: true,
        sub: [
          { title: "Add New", hasChild: false },
          { title: "View All", hasChild: false },
          { title: "Customization", hasChild: false },
        ],
      },
      {
        title: "Bills",
        hasChild: true,
        sub: [
          { title: "Add New", hasChild: false },
          { title: "View All", hasChild: false },
          { title: "Customization", hasChild: false },
        ],
      },
    ],
  };
  const NOTES_MENU = {
    title: "Notes",
    sub: [
      {
        title: "Credit Notes",
        hasChild: true,
        sub: [
          { title: "Add New", hasChild: false },
          { title: "View All", hasChild: false },
          { title: "Customization", hasChild: false },
        ],
      },
      {
        title: "Debit Notes",
        hasChild: true,
        sub: [
          { title: "View All", hasChild: false },
          { title: "Add New", hasChild: false },
          { title: "Customization", hasChild: false },
        ],
      },
    ],
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-medium py-3 shadow-sm">
      <div className="container">
        <div id="navbarContent" className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            {/* <!-- Level one dropdown --> */}
            <SubMenu title={"Home"} hasChild={false} />
            <SubMenu title={"Recommendations"} hasChild={false} />
            <SubMenu title={"Network"} hasChild={false} />
            <SubMenu title={"Wished"} hasChild={false} />
            <SubMenu title={"Favorite"} hasChild={false} />
            <SubMenu title={"Watched"} hasChild={false} />
            <SubMenu title={"Reviewed"} hasChild={false} />

            {/* <SubMenu title={"Entities"} menu={ENTITY_MENU} hasChild={true}/>
            <SubMenu title={"Sales"} menu={SALES_MENU} hasChild={true}/>
            <SubMenu title={"Payables"} menu={PAYABLES_MENU} hasChild={true}/>
            <SubMenu title={"Notes"} menu={NOTES_MENU} hasChild={true}/>
            <SubMenu title={"Reports"} hasChild={false}/> */}
          </ul>
        </div>
      </div>
    </nav>
  );
}
