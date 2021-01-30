import React, { createContext, useCallback, useState, useContext } from 'react';
import api from '../services/api';

interface SignInCredentials {
  loginName: string;
}

interface DataContextData {
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
  userData: UserDataState;
}

interface UserDataState {
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

const DataContext = createContext<DataContextData>({} as DataContextData);

const DataProvider: React.FC = ({ children }) => {
  const [userData, setUserData] = useState<UserDataState>(() => {
    const dataSet = localStorage.getItem('@GithubProject:data');

    if (dataSet) {
      const {
        login,
        name,
        email,
        location,
        company,
        bio,
        avatar_url,
        followers_url,
        following_url,
        organizations_url,
        starred_url,
        public_repos,
        public_gists,
        followers,
        following,
        html_url,
        id,
      } = JSON.parse(dataSet);

      return {
        login,
        name,
        email,
        location,
        company,
        bio,
        avatar_url,
        followers_url,
        following_url,
        organizations_url,
        starred_url,
        public_repos,
        public_gists,
        followers,
        following,
        html_url,
        id,
      };
    }

    return {} as UserDataState;
  });

  const signIn = useCallback(async ({ loginName }) => {
    const response = await api.get(`${loginName}`);

    const {
      login,
      name,
      email,
      location,
      company,
      bio,
      avatar_url,
      followers_url,
      following_url,
      organizations_url,
      starred_url,
      public_repos,
      public_gists,
      followers,
      following,
      html_url,
      id,
    } = response.data;

    localStorage.setItem(
      '@GithubProject:data',
      JSON.stringify({
        login,
        name,
        email,
        location,
        company,
        bio,
        avatar_url,
        followers_url,
        following_url,
        organizations_url,
        starred_url,
        public_repos,
        public_gists,
        followers,
        following,
        html_url,
        id,
      }),
    );

    setUserData({
      login,
      name,
      email,
      location,
      company,
      bio,
      avatar_url,
      followers_url,
      following_url,
      organizations_url,
      starred_url,
      public_repos,
      public_gists,
      followers,
      following,
      html_url,
      id,
    });
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@GithubProject:data');

    setUserData({} as UserDataState);
  }, []);

  return (
    <DataContext.Provider value={{ userData, signIn, signOut }}>
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
