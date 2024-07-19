export default function Card({data}){
    return <div className="w-48">
                <img src={data.url} className="w-full aspect-square rounded-md mb-2" />
                <p>{data.title}</p>
            </div>
}