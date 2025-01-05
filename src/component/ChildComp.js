import GrandChild from "./GrandChild";
export default function ChildComp(props) {
  return (<><h1>Hello Child, {props.name}</h1>
    <GrandChild
      name={props.name}/>
      </>
    );
}