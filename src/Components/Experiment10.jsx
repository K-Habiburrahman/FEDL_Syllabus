import axios from "axios";
import { useEffect, useState } from "react";
import "./Experiment10.css";

function Experiment10() {
    // --------------------------------
    // 1. Fetch API - .then() example
    // --------------------------------

    const [fetchScientists, setFetchScientists] = useState([]);
    const [fetchLoading, setFetchLoading] = useState(true);
    const [fetchError, setFetchError] = useState("");

    useEffect(() => {
        fetch("/scientists.json")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Unable to fetch scientists");
                }

                return response.json();
            })
            .then((data) => {
                setFetchScientists(data);
            })
            .catch((error) => {
                setFetchError(error.message);
            })
            .finally(() => {
                setFetchLoading(false);
            });
    }, []);

    // --------------------------------
    // 2. Axios - async/await
    // --------------------------------

    const [axiosScientists, setAxiosScientists] = useState([]);
    const [axiosLoading, setAxiosLoading] = useState(true);
    const [axiosError, setAxiosError] = useState("");

    useEffect(() => {
        async function getScientists() {
            try {
                const response = await axios.get("/scientists.json");

                setAxiosScientists(response.data);
            } catch (error) {
                setAxiosError(error.message);
            } finally {
                setAxiosLoading(false);
            }
        }

        getScientists();
    }, []);

    // --------------------------------
    // 3. Search
    // --------------------------------

    const [search, setSearch] = useState("");

    const filteredScientists = axiosScientists.filter((scientist) =>
        scientist.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <section className="body-content exp10">

            <h2>10. API Integration and Data Handling</h2>

            <p>
                This experiment demonstrates API integration using
                Fetch, Axios, and client-side search with data
                about medieval Muslim scientists.
            </p>

            {/* ================================= */}
            {/* 1. Fetch - .then() */}
            {/* ================================= */}

            <div className="info-card">

                <h3>1. Fetch API Example</h3>

                {fetchLoading && (
                    <p className="status">
                        Loading scientists...
                    </p>
                )}

                {fetchError && (
                    <p className="error">
                        Error: {fetchError}
                    </p>
                )}

                {!fetchLoading && !fetchError && (
                    <div className="api-list">

                        {fetchScientists.map((scientist) => (

                            <article key={scientist.id}>

                                <span>{scientist.id}</span>

                                <div>

                                    <h3>{scientist.name}</h3>

                                    <p>
                                        <strong>Place:</strong>{" "}
                                        {scientist.place}
                                    </p>

                                    <p>
                                        <strong>Invention:</strong>{" "}
                                        {scientist.invention}
                                    </p>

                                    <p>
                                        <strong>Description:</strong>{" "}
                                        {scientist.description}
                                    </p>

                                </div>

                            </article>

                        ))}

                    </div>
                )}

            </div>

            {/* ================================= */}
            {/* 2. Axios - async/await */}
            {/* ================================= */}

            <div className="info-card">

                <h3>2. Axios with Async/Await</h3>

                {axiosLoading && (
                    <p className="status">
                        Loading scientists...
                    </p>
                )}

                {axiosError && (
                    <p className="error">
                        Error: {axiosError}
                    </p>
                )}

                {!axiosLoading && !axiosError && (
                    <div className="api-list">

                        {axiosScientists.map((scientist) => (

                            <article key={scientist.id}>

                                <span>{scientist.id}</span>

                                <div>

                                    <h3>{scientist.name}</h3>

                                    <p>
                                        <strong>Place:</strong>{" "}
                                        {scientist.place}
                                    </p>

                                    <p>
                                        <strong>Invention:</strong>{" "}
                                        {scientist.invention}
                                    </p>

                                    <p>
                                        <strong>Description:</strong>{" "}
                                        {scientist.description}
                                    </p>

                                </div>

                            </article>

                        ))}

                    </div>
                )}

            </div>

            {/* ================================= */}
            {/* 3. Search */}
            {/* ================================= */}

            <div className="info-card">

                <h3>3. Scientist Search</h3>

                <input
                    type="text"
                    className="demo-input"
                    placeholder="Search scientist by name..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />

                {!axiosLoading && !axiosError && (

                    <div className="api-list">

                        {filteredScientists.length > 0 ? (

                            filteredScientists.map((scientist) => (

                                <article key={scientist.id}>

                                    <span>{scientist.id}</span>

                                    <div>

                                        <h3>{scientist.name}</h3>

                                        <p>
                                            <strong>Place:</strong>{" "}
                                            {scientist.place}
                                        </p>

                                        <p>
                                            <strong>Invention:</strong>{" "}
                                            {scientist.invention}
                                        </p>

                                        <p>
                                            <strong>Description:</strong>{" "}
                                            {scientist.description}
                                        </p>

                                    </div>

                                </article>

                            ))

                        ) : (

                            <p className="error">
                                No scientists found.
                            </p>

                        )}

                    </div>

                )}

            </div>

        </section>
    );
}

export default Experiment10;
