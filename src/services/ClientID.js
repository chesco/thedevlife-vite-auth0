import { v4 as uuidv4 } from 'uuid';
import { useSelector, useDispatch } from 'react-redux';
import { setClientID } from '../store/appSlice';
 
function useClientIdentifier() {

    const clientIdentifier = useSelector((state) => state.app.clientIdentifier);

    const dispatch = useDispatch();

    if(!clientIdentifier) {
        const storedIdentifier = localStorage.getItem('clientIdentifier');

        if (storedIdentifier) {
            dispatch(setClientID(storedIdentifier));
        } else {
            const newId = uuidv4();
            dispatch(setClientID(newId));
            localStorage.setItem('clientIdentifier', newId)
        }
    }

    return clientIdentifier;

}

export default useClientIdentifier;