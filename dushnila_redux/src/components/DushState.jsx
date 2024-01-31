import {Indicators} from './Indicators'
import {History} from './History'
import {DushstateLogo} from './DushstateLogo'

export function DushState() {
    return (
        <div className='dush_state'>
           <Indicators/>
            <div className='dush_sec_block'>
                <History/>
                <DushstateLogo/>
            </div>
        </div>
    )
}