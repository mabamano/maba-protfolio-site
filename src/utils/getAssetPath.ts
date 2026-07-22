const REPO_NAME = "/maba-protfolio-site";

export function getBasePath(): string {
  if (typeof window !== "undefined") {
    if (window.location.pathname.startsWith(REPO_NAME)) {
      return REPO_NAME;
    }
  }
  if (process.env.NODE_ENV === "production") {
    return REPO_NAME;
  }
  return process.env.NEXT_PUBLIC_BASE_PATH || "";
}

export function getAssetPath(path: string): string {
  if (!path) return path;
  if (path.startsWith("http://") || path.startsWith("https://") || path.startsWith("data:")) {
    return path;
  }
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  const basePath = getBasePath();

  if (basePath && cleanPath.startsWith(basePath)) {
    return cleanPath;
  }

  return `${basePath}${cleanPath}`;
}
