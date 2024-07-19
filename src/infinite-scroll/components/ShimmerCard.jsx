export default function ShimmerCard(){
    console.log("Testing")
    return <div className="w-48 h-50">
                <div className="w-full aspect-square bg-gray-100 shimmer-img animate rounded-md mb-2" />
                <p  className="w-11/12 line animate"></p>
            </div>
}