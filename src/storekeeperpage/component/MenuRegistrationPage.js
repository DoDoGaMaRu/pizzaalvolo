import React, { useState } from "react";
import "../../index.css";
import './MenuRegistrationPage.css';

const MenuRegistration = () => {
    const [menu, setMenu] = useState({
        file: "",
        category: "",
        name: "",
        price: 0,
    });

    const handleChangeFile = (e) => {
        setMenu({
            ...menu,
            file: e.target.file,
        });
    };


    const handleChangeCategory = (e) => {
        setMenu({
            ...menu,
            category: e.target.value,
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

        fetch("http://202.31.202.34:443/menu/create", {
            method: "post",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(post),
        });
    };

    function Radio({ children, value, name, defaultChecked, disabled}) {
        return (
            <label>
                <input className="radio"
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
                <table>
                    <tr>
                        <td>태그&nbsp;</td>
                        <td>
                            <RadioGroup>
                                <Radio name="category" value="장인" defaultChecked onClick={handleChangeCategory}>장인</Radio>
                                <Radio name="category" value="달인" onClick={handleChangeCategory}>달인</Radio>
                                <Radio name="category" value="명품" onClick={handleChangeCategory}>명품</Radio>
                            </RadioGroup>
                        </td>
                    </tr>
                    <tr>
                        <td>사진&nbsp;</td>
                        <td><input type={"file"} className="image" onChange={handleChangeFile}/></td>
                    </tr>
                    <tr>
                        <td>이름&nbsp;</td>
                        <td><input className="name" placeholder="name" onChange={handleChangeName}/></td>
                    </tr>
                    <tr>
                        <td>가격&nbsp;</td>
                        <td><input className="price" placeholder="price" onChange={handleChangePrice}/></td>
                    </tr>
                    <tr>
                        <td colSpan={2} className="btn-td"><button className="Rbtn" type="submit" onClick={submitMenu}>등록</button></td>
                    </tr>
                </table>
            </form>
        </div>
    );
};

export default MenuRegistration;
