
export default function Card({ name, url }) {
    return <>
        <div className="col">
            <div className="card p-2">
                <h1>{name}</h1>
            </div>
        </div>
    </>
}