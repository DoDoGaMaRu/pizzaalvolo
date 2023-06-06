import "./SortDiv.css"
export default function SortDiv({cur_menu}) {
    let disabled;
    disabled = true;
    cur_menu == "전체" ? disabled = false : disabled = true;
    return (
        <div className="sort-div">
            <select className="sort-way" name="sort-way" disabled={disabled}>
                <option value="new" selected="selected">신제품순</option>
                <option value="low-price">가격낮은순</option>
                <option value="high-price">가격높은순</option>
            </select>
        </div>
    )
}