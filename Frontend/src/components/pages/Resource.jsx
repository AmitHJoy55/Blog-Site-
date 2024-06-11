import React, { useContext } from "react";
import { Context } from "../../main";
import HeroResource from '../miniComponents/HeroResource'

const Resource = () => {
  const { mode } = useContext(Context);
  return (
    <article className={mode === "dark" ? "dark-bg" : "light-bg"}>
      <HeroResource/>
    </article>
  )
}

export default Resource
