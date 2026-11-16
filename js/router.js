// Read the current route and its query parameters from the URL hash.
export function getCurrentRoute() {
  const hash = window.location.hash.slice(1) || "/";
  const [path, queryString = ""] = hash.split("?");
  return {
    path: path || "/",
    params: new URLSearchParams(queryString)
  };
}

// Change the URL hash without loading another HTML document.
export function navigate(path) {
  window.location.hash = path;
}
