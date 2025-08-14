import { GithubEvent, GithubPull } from "./../../ts/types";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import axiosMaker from "../../configs/api/axios";
import {
  GITHUB_GET_EVENTS,
  GITHUB_GET_PROFILE,
  GITHUB_GET_PRS,
  GITHUB_GET_REPOS,
} from "../../configs/api/list";
import { GithubProfileInfo, GithubRepo } from "../../ts/types";

export const githubGetRepos = createAsyncThunk(
  "githubState/GithubGetRepos",
  async (_, { rejectWithValue }: any) => {
    try {
      const res = await axiosMaker.get(GITHUB_GET_REPOS);
      return res.data;
    } catch (err: any) {
      if (!err.response) {
        if (err?.code === "ECONNABORTED") {
          return rejectWithValue({
            message: "network_timeout_error",
          });
        } else if (err?.code === "ERR_NETWORK") {
          return rejectWithValue({
            message: "err_network",
          });
        }
      }
      return rejectWithValue(err.response.data);
    }
  }
);

export const githubGetProfile = createAsyncThunk(
  "githubState/GithubGetProfile",
  async (_, { rejectWithValue }: any) => {
    try {
      const res = await axiosMaker.get(GITHUB_GET_PROFILE);
      return res.data;
    } catch (err: any) {
      if (!err.response) {
        if (err?.code === "ECONNABORTED") {
          return rejectWithValue({
            message: "network_timeout_error",
          });
        } else if (err?.code === "ERR_NETWORK") {
          return rejectWithValue({
            message: "err_network",
          });
        }
      }
      return rejectWithValue(err.response.data);
    }
  }
);

export const githubGetEvents = createAsyncThunk(
  "githubState/GithubGetEvents",
  async (_, { rejectWithValue }: any) => {
    try {
      const res = await axiosMaker.get(GITHUB_GET_EVENTS);
      return res.data;
    } catch (err: any) {
      if (!err.response) {
        if (err?.code === "ECONNABORTED") {
          return rejectWithValue({
            message: "network_timeout_error",
          });
        } else if (err?.code === "ERR_NETWORK") {
          return rejectWithValue({
            message: "err_network",
          });
        }
      }
      return rejectWithValue(err.response.data);
    }
  }
);

export const githubGetPrs = createAsyncThunk(
  "githubState/GithubGetPrs",
  async (_, { rejectWithValue }: any) => {
    try {
      const res = await axiosMaker.get(GITHUB_GET_PRS);
      return res.data;
    } catch (err: any) {
      if (!err.response) {
        if (err?.code === "ECONNABORTED") {
          return rejectWithValue({
            message: "network_timeout_error",
          });
        } else if (err?.code === "ERR_NETWORK") {
          return rejectWithValue({
            message: "err_network",
          });
        }
      }
      return rejectWithValue(err.response.data);
    }
  }
);

export interface IGithubState {
  actionStatus: "pending" | "rejected" | "fulfilled" | "none";
  profile: {
    data: GithubProfileInfo;
    error: boolean;
    message: string;
  };
  repos: {
    data: GithubRepo[];
    error: boolean;
    message: string;
  };
  events: {
    data: GithubEvent[];
    error: boolean;
    message: string;
  };
  prs: {
    data: GithubPull[];
    error: boolean;
    message: string;
  };
}

const initialState: IGithubState = {
  actionStatus: "none",
  profile: {
    data: {
      login: "",
      id: 0,
      node_id: "",
      avatar_url: "",
      gravatar_id: "",
      url: "",
      html_url: "",
      followers_url: "",
      following_url: "",
      gists_url: "",
      starred_url: "",
      subscriptions_url: "",
      organizations_url: "",
      repos_url: "",
      events_url: "",
      received_events_url: "",
      type: "",
      site_admin: false,
      name: null,
      company: null,
      blog: "",
      location: null,
      email: null,
      hireable: null,
      bio: null,
      twitter_username: null,
      public_repos: 0,
      public_gists: 0,
      followers: 0,
      following: 0,
      created_at: "",
      updated_at: "",
      user_view_type: "",
    },
    error: false,
    message: "",
  },
  repos: {
    data: [],
    error: false,
    message: "",
  },
  events: {
    data: [],
    error: false,
    message: "",
  },
  prs: {
    data: [],
    error: false,
    message: "",
  },
};

export const githubSlice = createSlice({
  name: "github",
  initialState,
  reducers: {},
  extraReducers: ({ addCase }) => {
    addCase(githubGetRepos.pending, (state) => {
      state.actionStatus = "pending";
      state.repos.message = "please wait!";
      state.repos.error = false;
    });
    addCase(
      githubGetRepos.fulfilled,
      (state, { payload }: PayloadAction<GithubRepo[]>) => {
        state.actionStatus = "fulfilled";
        state.repos.message = "success";
        state.repos.error = false;
        state.repos.data = payload
          ?.sort((a, b) => b.stargazers_count - a.stargazers_count)
          .slice(0, 9);
      }
    );
    addCase(githubGetRepos.rejected, (state) => {
      state.actionStatus = "rejected";
      state.repos.message = "failed to fetch github repos";
      state.repos.error = true;
    });

    addCase(githubGetProfile.pending, (state) => {
      state.actionStatus = "pending";
      state.profile.message = "please wait!";
      state.profile.error = false;
    });
    addCase(
      githubGetProfile.fulfilled,
      (state, { payload }: PayloadAction<GithubProfileInfo>) => {
        state.actionStatus = "fulfilled";
        state.profile.message = "success";
        state.profile.error = false;
        state.profile.data = payload;
      }
    );
    addCase(githubGetProfile.rejected, (state) => {
      state.actionStatus = "rejected";
      state.profile.message = "failed to fetch github profile";
      state.profile.error = true;
    });

    addCase(githubGetEvents.pending, (state) => {
      state.actionStatus = "pending";
      state.events.message = "please wait!";
      state.events.error = false;
    });
    addCase(
      githubGetEvents.fulfilled,
      (state, { payload }: PayloadAction<GithubEvent[]>) => {
        state.actionStatus = "fulfilled";
        state.events.message = "success";
        state.events.error = false;
        state.events.data = payload?.slice(0, 9);
      }
    );
    addCase(githubGetEvents.rejected, (state) => {
      state.actionStatus = "rejected";
      state.events.message = "failed to fetch github events";
      state.events.error = true;
    });

    addCase(githubGetPrs.pending, (state) => {
      state.actionStatus = "pending";
      state.prs.message = "please wait!";
      state.prs.error = false;
    });
    addCase(
      githubGetPrs.fulfilled,
      (state, { payload }: PayloadAction<{ items: GithubPull[] }>) => {
        state.actionStatus = "fulfilled";
        state.prs.message = "success";
        state.prs.error = false;
        state.prs.data = payload?.items.map((pr: any) => ({
          id: pr.id,
          title: pr.title,
          state: pr.state,
          html_url: pr.html_url,
          created_at: pr.created_at,
          repo_name: pr.repository_url.split("/").pop(),
        }));
      }
    );
    addCase(githubGetPrs.rejected, (state) => {
      state.actionStatus = "rejected";
      state.prs.message = "failed to fetch github pull requests";
      state.prs.error = true;
    });
  },
});

export const {} = githubSlice.actions;

export const github = (state: RootState) => state.github;

export default githubSlice.reducer;
