import TabMenu from "./component/TabMenu";
import PizzaTable from "./component/PizzaTable";
import Paging from "./component/Paging";
import SortDiv from "./component/SortDiv";
import {useCallback, useState} from "react";
import "./PizzaPage.css"

//Todo ori_menu_list db에서 받아오는 식으로 바꾸기
const ori_menu_list = [
    {
        category: '장인',
        image: 'https://img.pizzaalvolo.co.kr/uploads/tmp9D88.png',
        name: '쉬림프&핫치킨골드피자',
        price: 29000,
    },
    {
        category: '장인',
        image: 'https://img.pizzaalvolo.co.kr/uploads/tmpE586.png',
        name: '날개피자',
        price: 29000,
    },
    {
        category: '달인',
        image: 'https://img.pizzaalvolo.co.kr/uploads/tmpAF7B.png',
        name: '어꺠피자',
        price: 27000,
    },
    {
        category: '달인',
        image: 'https://img.pizzaalvolo.co.kr/uploads/tmp14B4.png',
        name: '꿈을피자',
        price: 27000,
    },
    {
        category: '달인',
        image: 'https://img.pizzaalvolo.co.kr/uploads/tmp1BF5.png',
        name: '팔도피자',
        price: 31500,
    },
    {
        category: '명품',
        image: 'https://img.pizzaalvolo.co.kr/uploads/tmp4608.png',
        name: '웃음꽃피자',
        price: 24500,
    },
    {
        category: '명품',
        image: 'https://img.pizzaalvolo.co.kr/uploads/tmp579C.jpg',
        name: '전주불백피자',
        price: 24500,
    },
    {
        category: '명품',
        image: 'https://img.pizzaalvolo.co.kr/uploads/tmp7A7B.png',
        name: '팔자피자',
        price: 24500,
    },
]
const menuListSortByRegDate = [...ori_menu_list];
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

export default function PizzaPage() {
    let [menuList, setMenuList] = useState([...menuListSortByRegDate]);
    const [tab_menu, setTabMenu] = useState('전체');
    const onChangeTab = useCallback( (text) => {
        setTabMenu(text);
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
        console.log(sort);
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
          <PizzaTable pizza_list={menuList} cur_page={page}></PizzaTable>
          <Paging page={page} setPage={changePage} count={menuList.length}></Paging>
      </div>
    );
}