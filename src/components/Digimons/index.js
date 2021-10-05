import { useSelector } from "react-redux";
const Digimons = () => {
    const { digimons } = useSelector((state) => state);
    console.log(digimons)
    return (
        <div>
        <ul>
          {digimons.map((digimons, index) =>  {
            return  <li>{digimons}</li>
          })}
          
        </ul>
      </div>
    )
  }
  
  export default Digimons