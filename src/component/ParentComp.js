import ChildComp from "./ChildComp";
export default function ParentComp() {
  return (
    <div>
        <h1>Hello Parent</h1>
      <ChildComp name="ABC" />
    </div>
  );
}