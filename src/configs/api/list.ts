// ************************** GITHUB_API'S ***************************

export const GITHUB_USERNAME = "pooulad";

// Github get repos
export const GITHUB_GET_REPOS = `users/${GITHUB_USERNAME}/repos?per_page=100&sort=stars`;

// Github get profile info
export const GITHUB_GET_PROFILE = `users/${GITHUB_USERNAME}`;

// Github get pr's
const PrQuery = `q=type:pr+author:${GITHUB_USERNAME}&sort=created&order=desc&per_page=5`;
export const GITHUB_GET_PRS = `search/issues?${PrQuery}`;

// Github get events
export const GITHUB_GET_EVENTS = `users/${GITHUB_USERNAME}/events/public`;
