import React,{useState} from 'react';
import { useDispatch } from 'react-redux';

const NavigationChild = () => {
    const [name, setName] = useState();
    const [link, setLink] = useState();
    const [target, setTarget] = useState();
    const dispatch = useDispatch();
    const handleAddLink = () => {
      if (!name&& !link&& !target){

  }else if(!name){
    alert(" pura lekho be");
  }else if(!link){
  alert("pura lekho be");
  }else if(!target){
    alert("pura lekho be");
  }else{
  dispatch({ type: "ADD_NAV_LINK", navData: { name, link, target } });
  // OR
// dispatch(NavigationAction(name, link, target));
}
    };
    return (
        <div>

        <input
          className="m-2"
          type="text"
          placeholder="Add New Link Name"
          onChange={(event) => setName(event.target.value)}
        />
        <input
          className="m-2"
          type="text"
          placeholder="Add New Link URL"
          onChange={(e) => setLink(e.target.value)}
        />
        <input
          className="m-2"
          type="text"
          placeholder="Add New Link Target"
          onChange={(e) => setTarget(e.target.value)}
        />
        <button onClick={handleAddLink}>Add Link</button>
      </div>
    );
};

export default NavigationChild;