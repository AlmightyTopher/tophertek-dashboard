"use client";
import React from "react";
import Header from "../../components/header";

function MainComponent() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `/integrations/google-search/search?q=${encodeURIComponent(
          searchQuery
        )}`
      );
      if (!response.ok) {
        throw new Error(`Search failed with status ${response.status}`);
      }
      const data = await response.json();
      setSearchResults(data.items);
    } catch (err) {
      console.error(err);
      setError("Failed to perform search. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const services = [
    {
      icon: "/audiobookshelf-icon.png",
      serviceName: "Audiobookshelf",
      description: "Self-hosted audiobook and podcast server",
      link: "http://audiobookshelf.tophertek.com",
      status: "active",
    },
    {
      icon: "/homarr-icon.png",
      serviceName: "Homarr",
      description: "Homepage for your server services",
      link: "http://homarr.tophertek.com",
      status: "active",
    },
    {
      icon: "/wizarr-icon.png",
      serviceName: "Wizarr",
      description: "User management for media servers",
      link: "http://wizarr.tophertek.com",
      status: "active",
    },
    {
      icon: "/jellyfin-icon.png",
      serviceName: "Jellyfin",
      description: "Media streaming solution",
      link: "http://jellyfin.tophertek.com",
      status: "active",
    },
    {
      icon: "/jellyseerr-icon.png",
      serviceName: "Jellyseerr",
      description: "Media request manager",
      link: "http://jellyseerr.tophertek.com",
      status: "active",
    },
    {
      icon: "/radarr-icon.png",
      serviceName: "Radarr",
      description: "Movie collection manager",
      link: "http://radarr.tophertek.com",
      status: "active",
    },
    {
      icon: "/audiobookrequest-icon.png",
      serviceName: "AudiobookRequest",
      description: "Audiobook request system",
      link: "http://audiobookrequest.tophertek.com",
      status: "active",
    },
    {
      icon: "/autobrr-icon.png",
      serviceName: "AutoBrr",
      description: "Download automation",
      link: "http://autobrr.tophertek.com",
      status: "active",
    },
    {
      icon: "/dozzle-icon.png",
      serviceName: "Dozzle",
      description: "Log viewer for Docker",
      link: "http://dozzle.tophertek.com",
      status: "active",
    },
    {
      icon: "/portainer-icon.png",
      serviceName: "Portainer NAS",
      description: "Docker container management",
      link: "http://portainernas.tophertek.com",
      status: "active",
    },
    {
      icon: "/readarr-icon.png",
      serviceName: "Readarr",
      description: "Book collection manager",
      link: "http://readarr.tophertek.com",
      status: "active",
    },
    {
      icon: "/sonarr-icon.png",
      serviceName: "Sonarr",
      description: "TV series collection manager",
      link: "http://sonarr.tophertek.com",
      status: "active",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header currentPage="Dashboard" />

      <main className="flex-grow bg-gradient-to-r from-white to-[rgb(254,215,173)] px-4 py-8">
        <div className="dashboard-container max-w-[1200px] mx-auto">
          <h1 className="font-poppins text-4xl font-bold text-black mb-6 text-center">
            TopherTek Services Dashboard
          </h1>

          <div className="search-container mb-12 max-w-2xl mx-auto">
            <form className="flex gap-2 px-4" onSubmit={handleSearch}>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search Google..."
                className="flex-1 px-4 py-2 rounded-lg border border-[rgb(109,67,0)] focus:outline-none focus:ring-2 focus:ring-[rgb(109,67,0)] font-poppins"
              />
              <button
                type="submit"
                disabled={loading}
                className="px-6 py-2 bg-[rgb(109,67,0)] text-[rgb(254,215,173)] rounded-lg hover:opacity-90 transition-opacity font-poppins disabled:opacity-50"
              >
                {loading ? "Searching..." : "Search"}
              </button>
            </form>
            {error && (
              <p className="text-red-500 text-center mt-2 font-poppins">
                {error}
              </p>
            )}
            {searchResults && (
              <div className="mt-6 px-4">
                {searchResults.map((result, index) => (
                  <div
                    key={index}
                    className="mb-4 p-4 bg-white rounded-lg shadow-md"
                  >
                    <a
                      href={result.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[rgb(109,67,0)] hover:underline font-poppins font-semibold"
                    >
                      {result.title}
                    </a>
                    <p className="text-gray-600 text-sm mt-1 font-poppins">
                      {result.snippet}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="services-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((service) => (
              <ServiceCard key={service.serviceName} {...service} />
            ))}
          </div>
        </div>
      </main>

      <footer className="bg-[rgb(109,67,0)] text-[rgb(254,215,173)] text-sm py-4 text-center font-poppins">
        <p>© 2025 TopherTek | All Rights Reserved</p>
      </footer>
    </div>
  );
}

export default MainComponent;