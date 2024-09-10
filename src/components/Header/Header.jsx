import './Header.css';

export default function Header({ title = "¡Bienvenido a PCUP!", 
    description = "Descubre una amplia variedad de productos de calidad a los mejores precios.",
    buttonText = "Ver artículos", onButtonClick }) {

    return (
        <>
            <header className="main">
                <div className="main-contenido">
                    <h1>{title}</h1>
                    <p>{description}</p>
                    <p>¡Compra con confianza y encuentra lo que necesitas!</p>
                </div>
                <div className="button-bar">
                    <button className="tienda-button" onClick={onButtonClick}>{buttonText}</button>
                </div>
            </header>
        </>
    );
}
