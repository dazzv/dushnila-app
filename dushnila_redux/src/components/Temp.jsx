import { useSelector, useDispatch } from 'react-redux'
import {useEffect} from 'react'
import {fetchContent} from '../toolkitRedux/toolkitSlice'

export function Temp() {
    const dispatch = useDispatch()
    // Выполняем запрос на сервер и обновляем состояние Redux каждую минуту
    useEffect(() => {
        const interval = setInterval(() => {
          dispatch(fetchContent());
        }, 60000);
        return () => {
          // Очищаем интервал при размонтировании компонента
          clearInterval(interval);
        };
      }, [dispatch]);

    let temp = useSelector((state) => state.toolkit.temp)
    let count = useSelector((state) => state.toolkit.count)
    let status = useSelector((state) => state.toolkit.isOk)

    let style = null
    if(status === false){
        style = {background: 'linear-gradient(125.57deg, rgba(255, 255, 255, 0) 0%, rgba(255, 138, 122, 0.6) 100%)'} 
    }else{
        style = null
    }
    
    return (
        <>
            <div className="temp_block" style={style}>
                <h1 className="value">{temp} &deg;C</h1>
                <p 
                className="description"
                >Температура</p>
                <h1 className="value">{count} ppm</h1>
                <p className="description">CO2</p>
            </div>
        </>
    )
}