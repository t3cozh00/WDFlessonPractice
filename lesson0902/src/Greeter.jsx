import classes from "./Greeter.module.css";

function Greeter(props) {
  //console.log(props);
  return (
    <h1 className={classes.greeting}>Have a nice day, {props.username}!</h1>
  );
}

export default Greeter;
