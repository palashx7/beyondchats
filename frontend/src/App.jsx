import { useEffect, useState } from "react";

function App() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
  const fetchArticles = async (attempts = 3) => {
    try {
      const res = await fetch(
        "https://beyondchats-uvjy.onrender.com/api/articles",
        { cache: "no-store" }
      );

      if (!res.ok) throw new Error("Failed to fetch");

      const data = await res.json();
      setArticles(data);
      setLoading(false);
    } catch (err) {
      if (attempts > 1) {
        setTimeout(() => fetchArticles(attempts - 1), 1500);
      } else {
        setError("Could not load articles");
        setLoading(false);
      }
    }
  };

  fetchArticles();
}, []);


  if (loading) {
    return <p style={{ padding: 20 }}>Loading articles...</p>;
  }

  if (error) {
    return <p style={{ padding: 20, color: "red" }}>{error}</p>;
  }

  return (
      <div
        style={{
          padding: "20px",
          maxWidth: "1000px",
          margin: "0 auto",
          fontFamily: "Arial, sans-serif",
        }}
      >
      <h1 style={{ textAlign: "center", marginBottom: "30px" }}>
        BeyondChats Articles
      </h1>


      {articles.length === 0 && <p>No articles found.</p>}

      {articles.map((article) => (
                <div
          key={article._id}
          style={{
            border: "1px solid #e0e0e0",
            borderRadius: 10,
            padding: 18,
            marginBottom: 20,
            boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
            backgroundColor: "#fff",
          }}
        >
          <h2 style={{ marginBottom: 8, color: "#222" }}>
  {article.title}
</h2>

          <span
            style={{
              display: "inline-block",
              padding: "4px 8px",
              borderRadius: 4,
              fontSize: 12,
              backgroundColor: article.isUpdated ? "#d4f8d4" : "#eee",
              color: "#333",
            }}
          >
            {article.isUpdated ? "Updated (AI)" : "Original"}
          </span>

          <p style={{ marginTop: 10 }}>
            {article.content.slice(0, 200)}...
          </p>
        </div>
      ))}
    </div>
  );
}

export default App;
