import React from "react";

export default function UseEffect() {
  const [count, setCount] = React.useState(0);

  //Component'in render edilmesini sağlar.
  // Side Effects de deniyor.

  React.useEffect(function(){
    console.log("use effect executed");

  }, [count])

  

//   React.useEffect(() => {
    
//   }

//   )

  return (
    <>
      <div>
        <h2>The count is {count} </h2>
        <button onclick={() => setCount((prevCount) => prevCount + 1)}>
          Add
        </button>
      </div>
    </>
  );
}
