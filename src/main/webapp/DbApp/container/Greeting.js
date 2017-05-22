import {connect} from 'react-redux';
import Greeting from 'approot/DbApp/component/Greeting.jsx';
import changename from 'approot/DbApp/action/index.js';

const mapStateToProps = (state) => {
    console.log("state2prop")
    return (
        {name: state.name}
    )
}

const mapDispatchToProps=(dispatch)=>{

    return {
        valueChange: (event)=>{
            console.log(event.target.value);
            name=event.target.value;

        },
        onClick2: () => {
            console.log("name");
            console.log("pressed!");
          //  console.log(state.name);
            dispatch(changename(name));

        }
    }
}


const Great=connect(mapStateToProps,mapDispatchToProps)(Greeting)
export default Great