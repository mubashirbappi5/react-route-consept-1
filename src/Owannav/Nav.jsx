import PropTypes from 'prop-types'

const Nav = ({nav}) => {
    const {name,path} =nav
    return (
        <div>
           
            <ul>
                <li className="mr-5  "><a href={path}>{name}</a></li>
            </ul>
            
        </div>
    );
};
Nav.propTypes ={
    nav:PropTypes.object
}
export default Nav;