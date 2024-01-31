import {useSelector} from 'react-redux'

export function Indicators(){
    let status = useSelector((state) => state.toolkit.isOk)

    let description = ''
    let dushnila = '' 
    let style = null
    
    if(status === false){
        description = 'CO2 превышает норму'
        dushnila = 'Душнила не доволен вами' 
        style = {background: '#FF8A7A'}
    }else{
        description = 'Все показатели в норме'
        dushnila = 'Душнила доволен вами' 
        style = null
    }

    return (
        <div className="indicator" style={style}>
            <h1 className="title">{dushnila}</h1>
            <p className="desciption">{description}</p>
        </div>
    )
}