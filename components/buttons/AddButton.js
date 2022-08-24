export default function AddButton(props) {
  return (
    <div className="bg-indigo-500 w-fit rounded border-transparent cursor-pointer hover:bg-indigo-700">
      <button className=" text-white text-sm my-2 mx-2 w-fit py-2 px-4 font-semibold " onClick={props.setOpen}>
        {props.titleButton}
      </button>
    </div>
  );
}
