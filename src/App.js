import * as React from "react";
import "./App.css";
import Pagination from './Pagination';
import Posts from "./Posts";

export default function App() {
    const [searchValue, setSearch] = React.useState(' ');
    const [posts, setPosts] = React.useState([]);
    const [filteredPosts, setFilteredPosts] = React.useState([]);

    const handleSearchChange = (event) => {
        setSearch(event.target.value);
    };

    const handleSearchReset = () => {
        setSearch('');
    };

    React.useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((response) => response.json())
            .then((json) => setPosts(json));
    }, []);

    React.useEffect(() => {
        setFilteredPosts(posts.filter((post) => post.title.indexOf(searchValue) !== -1));
    }, [posts, searchValue]);

    return (
        <div className="app">
            <div>
                <h1>Search Posts</h1>
                <input
                    type="text"
                    value={searchValue}
                    autoComplete="on"
                    onChange={handleSearchChange}
                />
                <br/>
                <button className="button" type="button" onClick={handleSearchReset}>
                    Reset Search
                </button>
            </div>
            <h1>Suggestion posts</h1>
            {filteredPosts.length > 0 ? (
                <>
                    <Pagination
                        data={filteredPosts}
                        RenderComponent={Posts}
                        pageLimit={filteredPosts > 10 ? filteredPosts.length / 10 : 0}
                        dataLimit={10}
                    />
                </>
            ) : (
                <h1>No Posts to display</h1>
            )}
        </div>
    );
}