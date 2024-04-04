import { useLoaderData } from "react-router-dom";

const Github = () => {

    const data = useLoaderData();

    // const [data, setData] = useState([]);

    // useEffect(() => {
    //     fetch('https://api.github.com/users/ParthPanchal26')
    //         .then(response => response.json())
    //         .then((data) => {
    //             console.log(data);
    //             setData(data);
    //         })
    // }, [])


    return (<>
        <section className="overflow-hidden">
            <div className="mx-auto max-w-5xl px-5 py-24">
                <div className="mx-auto flex flex-wrap items-center lg:w-4/5">
                    <img
                        alt="Nike Air Max 21A"
                        className="h-64 w-full rounded-full object-cover lg:h-96 lg:w-1/2"
                        src={data.avatar_url}
                    />
                    <div className="mt-6 w-full lg:mt-0 lg:w-1/2 lg:pl-10">
                        <h1 className="my-4 text-3xl font-semibold text-black">Name : {data.name}</h1>
                        <p className="leading-relaxed">
                            Created at : {data.created_at}
                        </p>
                        <p className="leading-relaxed mb-24">
                            Updated at : {data.updated_at}
                        </p>
                       
                        <div className="flex items-center justify-between">
                            <span className="title-font text-xl font-bold text-gray-900">
                                Followers : {data.followers}
                            </span>
                            <button
                                type="button"
                                className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                            >
                                Following: {data.following}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </>);
}

export default Github;

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/ParthPanchal26')
    return response.json();
}