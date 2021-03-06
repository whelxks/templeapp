import { useSpring, animated, useRef } from 'react-spring'
import qianTong from "../images/qianTong.png";

function LoopObject() {
    var n = 0;
    const styles = useSpring({
      // loop: { reverse: true},
      loop: () => 2 > n ++,
      from: { x: 0 },
      to: { x: 100 },
    })
  
    return (
            <animated.img 
            style={{
                width: "10%",
                ...styles
                }}
            src={qianTong}
                
            />
    )
  }

  export default LoopObject;
