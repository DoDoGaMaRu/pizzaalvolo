import Header from '../nav/main-top-header/Header';
import Content from './component/Content';
import './MainPage.css';
import PizzaPage from "../pizzapage/PizzaPage";
import MyPage from "../mypage/MyPage";

function MainPage() {
  return (
    <div>
      <Header />
      <Content />
        <PizzaPage></PizzaPage>
        <MyPage></MyPage>
    </div>
  );
}

export default MainPage;
