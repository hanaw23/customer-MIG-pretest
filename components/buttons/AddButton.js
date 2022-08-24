export default function AddButton(props) {
  return (
    <div className="bg-transparent my-5 mx-24 mt-10  rounded border-transparent cursor-pointer bg-indigo-800 h-fit hover:bg-indigo-400">
      <button className=" text-white text-sm px-10 py-4 font-semibold text-center " onClick={props.setOpen}>
        {props.titleButton}
      </button>
    </div>
  );
}
