import { useDispatch } from "react-redux";
import { getOneCat } from "../actions/actions"

const Button = ({onClick, children}) => {


    const dispatch = useDispatch();

    const callMethod = () => {
      dispatch(getOneCat());
    
    }

    return (
        <button className="btn btn-primary"
            onClick={callMethod}>
            {children}
        </button>
    )
}
export default Button