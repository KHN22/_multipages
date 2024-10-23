import Counter from '../../componants/Counter/Counter'
import Timer from '../../componants/Timer/Timer'
import Add from '../../componants/Add/Add'
import Temperatures from '../../componants/Temperatures/Temperatures'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

import './Components.css'


function Components() {


  return (

      <div className='components-container'>
        <h2>REACT CONPONENTS</h2>
        <Counter />
        <Timer />
        <Add  aValue={10} bValue={20}/>
        <Temperatures />
      </div>
  )
}

export default Components