import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

interface Anime {
    _id: string;
    title: string;
    description: string;
    link: string;
}

function Home() {
    const [anime, setAnime] = useState<Anime[]>([]);

    useEffect(() => {
        axios
            .get<Anime[]>(`${import.meta.env.VITE_API_URL}/api/anime`)
            .then((res: { data: Anime[] }) => {
            setAnime(res.data);
            })
            .catch((err: Error) => {
            console.log(err);
            });
    }, []);

    return (
        <main className="container">
            <h1 className="heading">Explores</h1>
            <p className="sub_heading">List of anime to watch</p>

            <ul className="anim_list">
                {anime.length > 0 &&
                    anime.map((anim) => (
                        <li key={anim._id} className="anime_card">
                            <div className="anime_info">
                                <h4>{anim.title}</h4>
                                <p>{anim.description}</p>
                            </div>

                            <div className="anime_link">
                                <Link to={anim.link} target="_blank" className="link">
                                    Watch
                                </Link>
                            </div>
                        </li>
                    ))}
            </ul>

            {anime.length === 0 && (
                <p className="no_result">Oops, No anime available</p>
            )}
        </main>
    );
}

export default Home;