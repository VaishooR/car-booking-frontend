import React,{useState} from 'react';
import FadeLoader from "react-spinners/FadeLoader";

const Loader = () => {
    let [loading, setLoading] = useState(true);
    let [color, setColor] = useState("#ffffff");
  return (
    <div style={{display:'flex',alignItems: 'center',justifyContent: 'center',marginTop:'230px'}}>
        <FadeLoader
        color='blue'
        loading={loading}
        size={100}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  )
}

export default Loader