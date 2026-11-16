const githubUser = "prombouts";
const endpoints = {
    profile: `https://api.github.com/users/${githubUser}`
};

const repoCount = document.getElementById("repo-count");
const followerCount = document.getElementById("follower-count");
const followingCount = document.getElementById("following-count");
const githubSummary = document.getElementById("github-summary");
const activitySummary = document.getElementById("activity-summary");

async function loadGithubPanel() {
    try {
        const profileResponse = await fetch(endpoints.profile);

        if (!profileResponse.ok) {
            throw new Error("GitHub API request failed");
        }

        const profile = await profileResponse.json();

        repoCount.textContent = profile.public_repos ?? "--";
        followerCount.textContent = profile.followers ?? "--";
        followingCount.textContent = profile.following ?? "--";

        githubSummary.textContent = profile.bio || "Cloud software architect and consultant with a public GitHub footprint spanning cloud, automation, and experiments.";
        activitySummary.textContent = "Public GitHub profile loaded successfully.";
    } catch (error) {
        githubSummary.textContent = "Live GitHub data is temporarily unavailable. Use the GitHub link below to view your profile directly.";
        activitySummary.textContent = "GitHub API unavailable right now.";
        console.error(error);
    }
}

loadGithubPanel();
