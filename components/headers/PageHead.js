import AddButton from "../buttons/AddButton";

export default function PageHead(props) {
  return (
    <div className="bg-indigo-300 drop-shadow-lg flex justify-between">
      <h1 className=" font-semibold text-[30px] text-gray-50 ml-20 mt-0 py-10">{props.namePage}</h1>
      <AddButton titleButton="+ Add Customer" setOpen={props.setOpen} />
    </div>
  );
}
