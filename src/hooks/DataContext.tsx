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
  id: number;
}

interface FollowersDataObjectProperties {
  login: string;
  avatar_url: string;
}

interface FollowingDataObjectProperties {
  login: string;
  avatar_url: string;
}

interface DataState {
  userData: UserDataObjectProperties;
  followersData?: FollowersDataObjectProperties[];
  followingData?: FollowingDataObjectProperties[];
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

    if (userDataSet) {
      const { userData } = JSON.parse(userDataSet);

      if (followersDataSet) {
        const { followersData } = JSON.parse(followersDataSet);

        return {
          userData,
          followersData,
        };
      }

      if (followingDataSet) {
        const { followingData } = JSON.parse(followingDataSet);

        return {
          userData,
          followingData,
        };
      }
      return {
        userData,
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
        id: response.data.id,
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

  const signIn = useCallback(
    async ({ loginName }) => {
      const response = await api.get<UserDataObjectProperties>(`${loginName}`);
      const userData = setUserData(response);

      const responseFollowers = await api.get<FollowersDataObjectProperties[]>(
        `${loginName}/followers?per_page=100`,
      );
      const followersData = setFollowersData(responseFollowers);

      const responseFollowing = await api.get<FollowersDataObjectProperties[]>(
        `${loginName}/following?per_page=100`,
      );

      const followingData = setFollowingData(responseFollowing);

      setData({
        userData,
        followersData,
        followingData,
      });
    },
    [setUserData, setFollowersData, setFollowingData],
  );

  const signOut = useCallback(() => {
    localStorage.removeItem('@GithubProject:userData');
    localStorage.removeItem('@GithubProject:followersData');
    localStorage.removeItem('@GithubProject:followingData');

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
