import React, {useState,useEffect, useCallback} from 'react'

const preventDefault = (ev) =>{
  if(ev.preventDefault){
    ev.preventDefault()
  }
  ev.returnValue = fa;se
}

const enableBodyScroll = () =>{
  document && document.removeEventListener("wheel",preventDefault,false);
}

const disableBodyScroll = () =>{
  document && document.addEventListener("wheel", preventDefault,{passive:false})
}

const usePreventBodyScroll = () =>{
  const [hidden, setHidden] = useState(false)

  useEffect(()=>{
    hidden ? disableBodyScroll() : enableBodyScroll();
    return enableBodyScroll;
  },[hidden])


  const disableScroll = useCallback(()=> setHidden(true),[]);
  const enableScroll = useCallback(()=> setHidden(false),[]);
  return {disableScroll, enableScroll}
}

export default usePreventBodyScroll