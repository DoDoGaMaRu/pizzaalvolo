import TabMenu from "./component/TabMenu";
import PizzaTable from "./component/PizzaTable";
import Paging from "./component/Paging";
import SortDiv from "./component/SortDiv";
import {useCallback, useState} from "react";

const pizza_img_list= [
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

export default function PizzaPage() {
    const [tab_menu, setTabMenu] = useState('전체');
    const [pizza_list, setPizza_list] = useState([]);
    const onChangeTab = useCallback( (text) => {
        setTabMenu(text);
    })
    const [page, setPage] = useState(1);
    const changePage = useCallback( (page) => {
        console.log(page);
        setPage(page);
    })
    return(
      <div className="pizzaPage">
          <TabMenu onChangeTab={onChangeTab} tab_menu={tab_menu}></TabMenu>
          <SortDiv cur_menu={tab_menu}></SortDiv>
          <PizzaTable pizza_list={pizza_img_list}></PizzaTable>
          <Paging page={page} setPage={changePage}></Paging>
      </div>
    );
}