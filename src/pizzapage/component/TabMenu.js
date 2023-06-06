import "./TabMenu.css"
import PizzaComponent from "./PizzaTabConponent";

const tab_title_list = [
    "전체", "장인피자", "달인피자", "명품피자"
]
export default function TabMenu({onChangeTab, tab_menu}) {
    return(
      <div className="whole-pizza-menu-tab">
          <div className="pizza-table" border="1">
              {
                  tab_title_list.map((title) => (
                      <PizzaComponent onChangeTab={onChangeTab} title={title} cur_tab={tab_menu}></PizzaComponent>
                  ))
              }
          </div>
      </div>
    );
}