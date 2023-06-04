import './Content.css'
import ProjectCarousel from "./Carousel";
import HomeLogoutOrder from "./HomeLogoutOrder";

function Content() {
    // TODO <div data-v-42d86f9b="" class="layout-content-scroll"> 구현
    return (
        <div class="content">
            <ProjectCarousel></ProjectCarousel>
            <HomeLogoutOrder></HomeLogoutOrder>
        </div>
    )
}

export default Content;