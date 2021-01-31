import React, { createContext, useCallback, useState, useContext } from 'react';
import { AxiosResponse } from 'axios';
import api from '../services/api';

interface SignInCredentials {
  loginName: string;
}

interface DataContextData {
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
  data: DataState;
}

interface UserDataObjectProperties {
  login: string;
  name: string;
  email: string;
  location: string;
  company: string;
  bio: string;
  avatar_url: string;
  followers_url: string;
  following_url: string;
  organizations_url: string;
  starred_url: string;
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
  html_url: string;
}

interface FollowersDataObjectProperties {
  login: string;
  avatar_url: string;
}

interface FollowingDataObjectProperties {
  login: string;
  avatar_url: string;
}

interface ReposDataObjectProperties {
  name: string;
  description: string;
  html_url: string;
  fork: boolean;
  private: boolean;
  stargazers_count: number;
}

interface DataState {
  userData: UserDataObjectProperties;
  followersData: FollowersDataObjectProperties[];
  followingData: FollowingDataObjectProperties[];
  reposData: ReposDataObjectProperties[];
}

const DataContext = createContext<DataContextData>({} as DataContextData);

const DataProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<DataState>(() => {
    const userDataSet = localStorage.getItem('@GithubProject:userData');
    const followersDataSet = localStorage.getItem(
      '@GithubProject:followersData',
    );
    const followingDataSet = localStorage.getItem(
      '@GithubProject:followingData',
    );
    const reposDataSet = localStorage.getItem(`@GithubProject:reposData`);

    if (userDataSet && followersDataSet && followingDataSet && reposDataSet) {
      const { userData } = JSON.parse(userDataSet);
      const { followersData } = JSON.parse(followersDataSet);
      const { followingData } = JSON.parse(followingDataSet);
      const { reposData } = JSON.parse(reposDataSet);

      return {
        userData,
        followersData,
        followingData,
        reposData,
      };
    }

    return {} as DataState;
  });

  const setUserData = useCallback(
    (response: AxiosResponse<UserDataObjectProperties>) => {
      const userData = {
        login: response.data.login,
        name: response.data.name,
        email: response.data.email,
        location: response.data.location,
        company: response.data.company,
        bio: response.data.bio,
        avatar_url: response.data.avatar_url,
        followers_url: response.data.followers_url,
        following_url: response.data.following_url,
        organizations_url: response.data.organizations_url,
        starred_url: response.data.starred_url,
        public_repos: response.data.public_repos,
        public_gists: response.data.public_gists,
        followers: response.data.followers,
        following: response.data.following,
        html_url: response.data.html_url,
      };

      localStorage.setItem(
        '@GithubProject:userData',
        JSON.stringify({
          userData,
        }),
      );
      return userData;
    },
    [],
  );

  const setFollowersData = useCallback(
    (responseFollowers: AxiosResponse<FollowersDataObjectProperties[]>) => {
      const followersData = responseFollowers.data.map(follower => {
        return {
          login: follower.login,
          avatar_url: follower.avatar_url,
        };
      });

      localStorage.setItem(
        '@GithubProject:followersData',
        JSON.stringify({
          followersData,
        }),
      );

      return followersData;
    },
    [],
  );

  const setFollowingData = useCallback(
    (responseFollowers: AxiosResponse<FollowersDataObjectProperties[]>) => {
      const followingData = responseFollowers.data.map(following => {
        return {
          login: following.login,
          avatar_url: following.avatar_url,
        };
      });

      localStorage.setItem(
        '@GithubProject:followingData',
        JSON.stringify({
          followingData,
        }),
      );

      return followingData;
    },
    [],
  );

  const setReposData = useCallback(
    (responseRepos: AxiosResponse<ReposDataObjectProperties[]>) => {
      const reposData = responseRepos.data.map(repository => {
        return {
          name: repository.name,
          description: repository.description,
          html_url: repository.html_url,
          fork: repository.fork,
          private: repository.private,
          stargazers_count: repository.stargazers_count,
        };
      });

      localStorage.setItem(
        '@GithubProject:reposData',
        JSON.stringify({
          reposData,
        }),
      );
      return reposData;
    },
    [],
  );

  const signIn = useCallback(
    async ({ loginName }) => {
      const [
        response,
        responseFollowers,
        responseFollowing,
        responseRepos,
      ] = await Promise.all([
        api.get<UserDataObjectProperties>(`${loginName}`),
        api.get<FollowersDataObjectProperties[]>(`${loginName}/followers`),
        api.get<FollowersDataObjectProperties[]>(`${loginName}/following`),
        api.get<ReposDataObjectProperties[]>(`${loginName}/repos`),
      ]);

      const userData = setUserData(response);
      const followersData = setFollowersData(responseFollowers);
      const followingData = setFollowingData(responseFollowing);
      const reposData = setReposData(responseRepos);

      setData({
        userData,
        followersData,
        followingData,
        reposData,
      });
    },
    [setUserData, setFollowersData, setFollowingData, setReposData],
  );

  const signOut = useCallback(() => {
    localStorage.removeItem('@GithubProject:userData');
    localStorage.removeItem('@GithubProject:followersData');
    localStorage.removeItem('@GithubProject:followingData');
    localStorage.removeItem('@GithubProject:reposData');

    setData({} as DataState);
  }, []);

  return (
    <DataContext.Provider value={{ data, signIn, signOut }}>
      {children}
    </DataContext.Provider>
  );
};

function useData(): DataContextData {
  const context = useContext(DataContext);

  if (!context) {
    throw new Error('useData must be used within a DataProvider');
  }

  return context;
}

export { DataProvider, useData };
