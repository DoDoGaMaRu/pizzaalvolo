import "./SortDiv.css"
export default function SortDiv({cur_menu, setSort}) {
    let disabled;
    disabled = true;
    cur_menu === "전체" ? disabled = false : disabled = true;
    const changeSort = (e) => {
        setSort(e.target.value, e.target.text);
    }
    return (
        <div className="sort-div">
            <select className="sort-way" name="sort-way" disabled={disabled} onClick={changeSort}>
                <option value="new" selected="selected">신제품순</option>
                <option value="low">가격낮은순</option>
                <option value="high">가격높은순</option>
            </select>
        </div>
    )
}