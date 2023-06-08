import React, { useState } from "react";
import "../index.css";

const MenuRegistration = () => {
    const [menu, setMenu] = useState({
        category: "",
        url: "",
        name: "",
        price: 0,
    });

    const handleChangeCategory = (e) => {
        setMenu({
            ...menu,
            category: e.target.value,
        });
    };

    const handleChangeUrl = (e) => {
        setMenu({
            ...menu,
            url: e.target.value,
        });
    };

    const handleChangeName = (e) => {
        setMenu({
            ...menu,
            name: e.target.value,
        });
    };

    const handleChangePrice = (e) => {
        setMenu({
            ...menu,
            price: e.target.value,
        });
    };

    const submitMenu = () => {
        const post = {
            menu: menu,
        };

        fetch("http://localhost:3001/insert", {
            method: "post",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(post),
        });
    };

    function Radio({ children, value, name, defaultChecked, disabled, onClick }) {
        return (
            <label>
                <input
                    type="radio"
                    value={value}
                    name={name}
                    defaultChecked={defaultChecked}
                    disabled={disabled}
                />
                {children}
            </label>
        );
    }

    function RadioGroup({ children }) {
        return <fieldset style={{ border: "none" }}>{children}</fieldset>;
    }

    return (
        <div className="page">
            <form className="wrapper-box">
                <h2>메뉴등록</h2>
                <RadioGroup>
                    <Radio
                        name="category"
                        value="j"
                        defaultChecked
                        onClick={handleChangeCategory}
                    >
                        장인
                    </Radio>
                    <Radio name="category" value="d" onClick={handleChangeCategory}>
                        달인
                    </Radio>
                    <Radio name="category" value="m" onClick={handleChangeCategory}>
                        명인
                    </Radio>
                </RadioGroup>

                <div
                    style={{ display: "flex", flexDirection: "column", maxWidth: "15%" }}
                >
                    <input className="url" placeholder="url" onChange={handleChangeUrl} />
                    <input
                        className="name"
                        placeholder="name"
                        onChange={handleChangeName}
                    />
                    <input
                        className="price"
                        placeholder="price"
                        onChange={handleChangePrice}
                    />
                </div>

                <button className="Rbtn" onClick={submitMenu}>
                    등록
                </button>
            </form>
        </div>
    );
};

export default MenuRegistration;
