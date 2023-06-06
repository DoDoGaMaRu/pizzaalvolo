export default function PizzaComponent({title, onChangeTab, cur_tab}) {
    return (
        <div className={cur_tab === title ? "tab-title-active" : "tab-title-default"}
             onClick={() => onChangeTab(title)}>
            {title}
        </div>
    );
}