import React from "react";
import ContactItem from "./ContactItem";

export default function ContactList({ contacts }) {
  //convert the contacts object into an array of JSX

  //   const output = [
  //     <ContactItem name="Test" address="111"/>
  //     <ContactItem name="Test2" address="331"/>
  //     <ContactItem name="Test3" address="151"/>
  //   ];

  let output = [];
  for (let i = 0; i < contacts.length; i++) {
    output.push(
      <ContactItem
        key={i}
        names={contacts[i].name}
        addresses={contacts[i].address}
      />
    );
  }

  return <div>{output}</div>;
  //   return <div>{ contacts.map((contact) =><ContactItem names={contact.name} address={contact.address}/>)}</div>;
}
