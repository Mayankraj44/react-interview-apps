export default function Comment({ data }) {
  return (
    <div className="ml-8 ">
      <div className="mb-4 ">
        <div className="flex gap-1 items-center">
          <img
            className="h-8 rounded-full"
            src="https://picsum.photos/200"
            alt="user icon"
          />
          <p className="font-bold mb-2 ">{data?.author}</p>
        </div>
        <div className="relative ">
          <span className="absolute h-full w-[1px] bg-red-500 left-4 top-1" />
          <p className="ml-9 ">{data?.comment}</p>
          <div className="mt-4 ">
            {!!data?.replies.length &&
              data?.replies?.map((reply, index) => (
                <Comment data={reply} key={index} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
