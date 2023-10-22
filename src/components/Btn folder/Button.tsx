type Props = { btnCol: string; btnLabel: string; btnFunc: () => void };

export default function Button({ btnCol, btnLabel, btnFunc }: Props) {
  return (
    <button
      className={`p-2 border-2
   border-black ${btnCol} text-white  capitalize rounded-xl`}
      onClick={btnFunc}
    >
      {btnLabel}
    </button>
  );
}
