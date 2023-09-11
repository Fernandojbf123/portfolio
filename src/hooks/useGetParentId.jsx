import { useState} from "react";
const useGetParentId = () => {

  let [elementId, setElementId] = useState("");

  function handleEnter (e) {
    e.preventDefault();
    setElementId(e.target.id)
  }

  function handleLeave() {
    setElementId(null)
  }

  return {elementId, handleEnter, handleLeave}
}

export default useGetParentId
