import React from "react";
import Ex33ContactItem from "./Ex33ContactItem";

export default function Ex34ContactList({ contacts }) {
  //convert the contacts object into an array of JSX

  //   const output = [
  //     <ContactItem name="Test" address="111"/>
  //     <ContactItem name="Test2" address="331"/>
  //     <ContactItem name="Test3" address="151"/>
  //   ];

  // let output = [];
  // for (let i = 0; i < contacts.length; i++) {
  //   output.push(
  //     <Ex33ContactItem
  //       key={i}
  //       names={contacts[i].name}
  //       addresses={contacts[i].address}
  //     />
  //   );
  // }

  // return <div>{output}</div>;

  // or
  return (
    <div>
      <h3>Ex34ContactList</h3>
      {contacts.map((contact) => (
        <Ex33ContactItem names={contact.name} addresses={contact.address} />
      ))}
    </div>
  );
}
