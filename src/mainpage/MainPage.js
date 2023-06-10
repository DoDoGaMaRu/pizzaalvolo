import Header from '../nav/main-top-header/Header';
import Content from './component/Content';
import './MainPage.css';
import PizzaPage from "../pizzapage/PizzaPage";
import MyPage from "../mypage/MyPage";
import StorekeeperPage from "../storekeeperpage/StorekeeperPage";

function MainPage() {
  return (
    <div>
      <Header />
      <Content />
        <MyPage></MyPage>
    </div>
  );
}

export default MainPage;
