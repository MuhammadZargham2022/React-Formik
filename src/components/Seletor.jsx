import { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

const Seletor = (props) => {
  const [isOpen, setIsOpen] = useState(false);


  return (
    <>
      <div className="selector">
        <div onClick={() => setIsOpen(!isOpen)}>
          <p>Selector</p>
          <MdKeyboardArrowDown />
        </div>

        {isOpen && (
          <div>
            {props.data.map((item) => (
              <p onClick={()=> props.displayItem(item)}>{item.message}</p>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Seletor;
