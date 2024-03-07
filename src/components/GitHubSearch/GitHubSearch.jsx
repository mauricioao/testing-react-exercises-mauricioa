import * as React from "react";
import { getProfile } from "../../services/github_service";
 
function GitHubSearch() {
  const [query, setQuery] = React.useState("");
  const [status, setStatus] = React.useState("idle");
  const [data, setData] = React.useState(null);
 
  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("loading");
    try {
      const profile = await getProfile(query);
      setData(profile);
      setStatus("success");
    } catch (error) {
      setStatus("error");
    }
  }
 
  return (
    <div>
      <h1>GitHub Users</h1>
      <form onSubmit={handleSubmit}>
        <div className="input-field">
          <input
            type="text"
            id="query"
            name="query"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button>Search</button>
        </div>
      </form>
      {status === "loading" && <p>Loading...</p>}
      {status === "error" && <p>Not Found</p>}
      {status === "success" && (
        <>
          <p>{data.name}</p>
          <p data-testid="followings">Followings: {data.following}</p>
          <p data-testid="followers">Followers: {data.followers}</p>
        </>
      )}
    </div>
  );
}
 
export default GitHubSearch;