import ChildComp from "./ChildComp";
export default function ParentComp() {
  return (
    <div>
        <p>Hello Parent</p>
      <ChildComp name="ABC" />
    </div>
  );
}