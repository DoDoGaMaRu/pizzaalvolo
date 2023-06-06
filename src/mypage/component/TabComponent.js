export default function TabComponent({title, onChangeTab, cur_tab}) {
   return (
       <div className={title === cur_tab ? "tab-menu-active" : "tab-menu-default"}
            onClick={() => onChangeTab(title)}>
           {title}
       </div>
   )
}