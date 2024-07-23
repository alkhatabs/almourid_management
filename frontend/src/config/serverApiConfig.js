// Set the API base URL depending on the environment
// If in production or if the environment variable VITE_DEV_REMOTE is 'remote'
export const API_BASE_URL =
  import.meta.env.PROD || import.meta.env.VITE_DEV_REMOTE == 'remote'
    ? // Use the backend server URL specified in VITE_BACKEND_SERVER followed by 'api/'
      import.meta.env.VITE_BACKEND_SERVER + 'api/'
    : // Otherwise, use the hardcoded URL for the API
      'http://localhost:8888/api/';

// Set the base URL for the application depending on the environment
// If in production or if the environment variable VITE_DEV_REMOTE is true
export const BASE_URL =
  import.meta.env.PROD || import.meta.env.VITE_DEV_REMOTE
    ? // Use the backend server URL specified in VITE_BACKEND_SERVER
      import.meta.env.VITE_BACKEND_SERVER
    : // Otherwise, use the hardcoded base URL
      'http://localhost:8888/';

// Set the website URL depending on the environment
// If in production
export const WEBSITE_URL = import.meta.env.PROD
  ? // Use the specified production website URL
    'http://almourid.net/'
  : // Otherwise, use the hardcoded website URL for development
    'http://localhost:3000/';

// Set the download base URL depending on the environment
// If in production or if the environment variable VITE_DEV_REMOTE is true
export const DOWNLOAD_BASE_URL =
  import.meta.env.PROD || import.meta.env.VITE_DEV_REMOTE
    ? // Use the backend server URL specified in VITE_BACKEND_SERVER followed by 'download/'
      import.meta.env.VITE_BACKEND_SERVER + 'download/'
    : // Otherwise, use the hardcoded URL for downloads
      'http://localhost:8888/download/';

// Set the name of the access token used for authentication
export const ACCESS_TOKEN_NAME = 'JWT';

// Set the base URL for file access from the environment variable VITE_FILE_BASE_URL
export const FILE_BASE_URL = import.meta.env.VITE_FILE_BASE_URL;
