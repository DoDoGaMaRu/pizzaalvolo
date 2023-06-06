import "./PizzaTable.css"
export default function PizzaTable({pizza_list}) {
    const pizza_card_list = pizza_list.map((item) => (
        <div className="pizza-menu-card">
            <div className="pizza-menu-item">
                <div className="container">
                    <div className="pizza-img-container">
                        <img src={item.image} height="240px"/>
                    </div>
                    <div className="item">
                        <div>
                            {item.name}
                        </div>
                        <div>
                            {item.price}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ))
    return (
        <div className="pizza-card-form">
            {pizza_card_list}
        </div>
    );
}