import "./PizzaTable.css"
export default function PizzaTable({pizza_list, cur_page}) {
    // const pizza_card_list = pizza_list.map((item) => (
    //     <div className="pizza-menu-card">
    //         <div className="pizza-menu-item">
    //             <div className="container">
    //                 <div className="pizza-img-container">
    //                     <img src={item.image} height="240px"/>
    //                 </div>
    //                 <div className="item">
    //                     <div>
    //                         {item.name}
    //                     </div>
    //                     <div>
    //                         {item.price}
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    // ))
    return (
        <div className="pizza-card-form">
            <div className="pizza-menu-card">
                <div className="pizza-menu-item">
                    <div className="container">
                        <div className="pizza-img-container">
                            <img src={pizza_list[2 * (cur_page - 1)].image} alt="" height="240px"/>
                        </div>
                        <div className="item">
                            <div>
                                {pizza_list[2 * (cur_page - 1)].name}
                            </div>
                            <div>
                                {pizza_list[2 * (cur_page - 1)].price}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {
                pizza_list.length - 1 === 2 * (cur_page - 1) ?
                    null :
                    <div className="pizza-menu-card">
                        <div className="pizza-menu-item">
                            <div className="container">
                                <div className="pizza-img-container">
                                    <img src={pizza_list[2 * (cur_page - 1) + 1].image} alt="" height="240px"/>
                                </div>
                                <div className="item">
                                    <div>
                                        {pizza_list[2 * (cur_page - 1) + 1].name}
                                    </div>
                                    <div>
                                        {pizza_list[2 * (cur_page - 1) + 1].price}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            }
        </div>
    );
}