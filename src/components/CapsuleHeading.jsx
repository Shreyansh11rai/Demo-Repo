export default function capsuleHeading({text,classname}) {
    return <span className={`rounded-full border border-gray-400 px-3 py-1 font-medium text-gray-600 shadow-xl ${classname}`}>
    {text}
  </span>
}