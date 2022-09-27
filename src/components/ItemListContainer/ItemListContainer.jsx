import "./ItemListContainer.css";

export const ItemListContainer = ({greeting,title}) => {
    return(
        <div className="contenedor">
            {greeting} - {title}
        </div>
    )
}