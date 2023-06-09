import StorekeeperMainPage from "./component/StorekeeperMainPage";
import MenuRegistrationPage from "./component/MenuRegistrationPage";
import ChartPage from "./component/ChartPage";

export default function MyPage() {
    return(
        <div>
            <StorekeeperMainPage></StorekeeperMainPage>
            <MenuRegistrationPage></MenuRegistrationPage>
            <ChartPage></ChartPage>
        </div>
    )
}