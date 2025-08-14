import { SnackbarOrigin } from "@mui/material";
import { Action, Dispatch } from "@reduxjs/toolkit";
import { ReactNode } from "react";

// MUI snackbar
export interface ISnackbarState extends SnackbarOrigin {
  open: boolean;
}
// MUI snackbar

// Header
export interface NavbarLinkProps {
  to: string;
  icon?: ReactNode;
  label: string;
  underlineColor?: string;
}
// Header

// Footer
export interface SocialLinkProps {
  label: string;
  url: string;
}
// Footer

// Redux action prop
export type ReduxActionProp<T extends Action> = (dispatch: Dispatch<T>) => void;
// Redux action prop

// Github page
export interface GithubProfileInfo {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
  name: string | null;
  company: string | null;
  blog: string;
  location: string | null;
  email: string | null;
  hireable: boolean | null;
  bio: string | null;
  twitter_username: string | null;
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
  created_at: string;
  updated_at: string;
  user_view_type: string;
}
export interface GithubRepo {
  id: number;
  name: string;
  description: string | null;
  stargazers_count: number;
  forks_count: number;
  html_url: string;
  language: string | null;
}

export interface GithubPull {
  id: number;
  title: string;
  state: string;
  html_url: string;
  created_at: string;
  repo_name: string;
}

export interface GithubEvent {
  id: string;
  type: string;
  repo: { name: string };
  created_at: string;
  payload: any;
}
// Github page

// Project page
export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  skills: string[];
}
// Project page
