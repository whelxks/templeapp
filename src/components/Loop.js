import { useSpring, animated } from 'react-spring'
import qianTong from "../images/qianTong.png";

function LoopObject() {
    const styles = useSpring({
      loop: { reverse: true },
      from: { x: 0 },
      to: { x: 100 },
    })
  
    return (
      <animated.img 
      style={{
          width: "10%",
          ...styles,
        
        }}
      src={qianTong}
        
      />
    )
  }

  export default LoopObject;