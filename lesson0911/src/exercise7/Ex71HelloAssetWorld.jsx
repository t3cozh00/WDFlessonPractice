import React from "react";
import cat from "../assets/cat_01_01.jpg";
import dog from "../assets/dog_02_02.jpg";

export default function Ex71HelloAssetWorld() {
  // const somepathToImage =
  //   "https://stock.adobe.com/images/beautiful-funny-grey-british-cat-peeking-out-from-behind-a-white-table-with-copy-space/299310701";
  //   Third-party cookie will be blocked in future Chrome versions as part of Privacy Sandbox.

  return (
    <div>
      <h1>Hello Asset World</h1>
      <img style={{ width: "250px", height: "200px" }} src={cat} />
      <img style={{ width: "250px", height: "200px" }} src={dog} />
    </div>
  );
}
