import LoadingIcon from "../svg/LoadingIcon";

export default function SpinnerLoading() {
  return (
    <div className="text-center py-32">
      <LoadingIcon />
      <div className="text-indigo-500 text-m font-semibold">Loading</div>
    </div>
  );
}
