import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { GiThreeLeaves } from "react-icons/gi";

const Search = () => {
  return (
    <>
      <div class="search">
        <AiOutlineSearch />
        <input type="text" placeholder="Search Plants" />
        <GiThreeLeaves />
      </div>
      <div class="two-btn">
        <button class="button1">Plants</button>
        <button class="button2">Pots</button>
        <p className="pa">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
          sunt, dolores officia porro dicta molestiae Lorem ipsum dolor sit amet
          eveniet officia porro dicta molestiae Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Accusamus sunt, dolores eveniet officia
          porro dicta molestiae consectetur fugiat aspernatur iure explicabo
          placeat ullam.
        </p>
      </div>
    </>
  );
};

export default Search;
