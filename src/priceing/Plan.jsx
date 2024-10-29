
import PropTypes from 'prop-types'

const Plan = ({plan}) => {
    const {id,plans,price,duration,features} = plan
    return (
        <div className='mx-auto bg-orange-500 p-10 rounded-lg flex flex-col'>
        
        <h1 className='text-center'>
        <span className='text-7xl font-extrabold'>{price}</span>
        <span>/mont</span>
        </h1>
        <h1 className='text-4xl text-center'>{plans}</h1>
       
        <h3 className='text-center'>{duration}</h3>
        <div className=' flex-grow'>
        {
         features.map(feas =>  <li  key={feas}>{feas}</li>)
        }
        </div>
        <button className='btn w-full bg-green-700'>Subscribe </button>
        
        </div>
    );
};
Plan.propTypes ={
    plan:PropTypes.object.isRequired
}
export default Plan;