import TabMenu from "./component/TabMenu";
import PizzaTable from "./component/PizzaTable";
import Paging from "./component/Paging";
import SortDiv from "./component/SortDiv";
import {useCallback, useState} from "react";
import "./PizzaPage.css"


export default function PizzaPage({pizzaList}) {
    console.log(pizzaList)
    const ori_menu_list = [...pizzaList];
    console.log(ori_menu_list);
    const menuListSortByRegDate = [...ori_menu_list];
    console.log(menuListSortByRegDate);
    let menuListSortByLowPrice = ori_menu_list.sort(function compare(a, b) {
        return a.price - b.price;
    });
    let master = [];
    let expert = [];
    let luxury = [];

    ori_menu_list.map((item) => {
        if(item.category === "장인") {
            master = [...master, item];
        }
        else if (item.category === "달인") {
            expert = [...expert, item];
        }
        else if (item.category === "명품") {
            luxury = [...luxury, item];
        }
        else {

        }
    })

    let [menuList, setMenuList] = useState([...menuListSortByRegDate]);
    const [tab_menu, setTabMenu] = useState('전체');
    const onChangeTab = useCallback( (text) => {
        setTabMenu(text);
        setPage(1);
        if(text === "전체") {
            setMenuList([...menuListSortByRegDate]);
        }
        else if(text === "장인피자") {
            setMenuList([...master]);
        }
        else if(text === "달인피자") {
            setMenuList([...expert]);
        }
        else if(text === "명품피자") {
            setMenuList([...luxury]);
        }
        else{

        }
    })
    const [page, setPage] = useState(1);
    const changePage = useCallback( (page) => {
        setPage(page);
    })
    const [sort, setSort] = useState('신제품순');
    const changeSort = useCallback((sort, text) => {
        setSort(text);
        if (sort === "new") {
            setMenuList([...menuListSortByRegDate]);
        }
        else if(sort === "low") {
            setMenuList([...menuListSortByLowPrice]);
        }
        else {
            setMenuList([...menuListSortByLowPrice].reverse());
        }
    })

    return(
      <div className="pizzaPage">
          <TabMenu onChangeTab={onChangeTab} tab_menu={tab_menu}></TabMenu>
          <SortDiv cur_menu={tab_menu} setSort={changeSort}></SortDiv>
          {
              menuList.length == 0 ? (null) : (
                  <PizzaTable pizza_list={menuList} cur_page={page}></PizzaTable>
              )
          }
          <Paging page={page} setPage={changePage} count={menuList.length}></Paging>
      </div>
    );
}