export function History(){
    const anyNumber = Math.floor(Math.random() * 28);
    
    return (
        <div className="history">
            <h1 className="title">Дней без душноты: {anyNumber}</h1>
            <button>
                <p>История</p> 
                <span> &rarr;</span>
            </button>
        </div>
    )
}