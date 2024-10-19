import PropTypes from 'prop-types'


const Alert = ({alert}) => {
    const capitalize =(word)=>{
          const str = word.toLowerCase();
          return str.charAt(0).toUpperCase()+ str.slice(1);
    }
    return alert && <div className={`alert alert-${alert.type} alert-dismissible fade show my-0`} role="alert">
        <strong>{capitalize(alert.type)}</strong>: {alert.msg}
    </div>
}


Alert.propTypes = {
    alert : PropTypes.string,
}
export default Alert;