import GrandChild from "./GrandChild";
export default function ChildComp(props) {
  return (<><p>Hello Child, {props.name}</p>
    <GrandChild
      name={props.name}/>
      </>
    );
}