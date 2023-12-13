import { createContext, useEffect, useState } from "react";
import { api } from "../services/api";

interface IJobsProvider {
  children: React.ReactNode;
}

interface IJob {
  id: number;
  position: string;
  salarry: number;
  description: string;
}

interface IJobsContext {
  jobsList: IJob[] | null;
  setJobList: React.Dispatch<React.SetStateAction<IJob[] | null>>;
  filteredJobs: (text: string) => Promise<IJob[] | undefined>;
}

export const JobsContext = createContext({} as IJobsContext);

export const JobsProvider = ({ children }: IJobsProvider) => {
  const [jobsList, setJobList] = useState<IJob[] | null>([]);

  useEffect(() => {
    const loadJobs = async () => {
      try {
        const { data } = await api.get("/jobs");
        setJobList(data);
      } catch (error) {
        console.log(error);
      }
    };
    loadJobs();
  }, []);

  const filteredJobs = async (text: string) => {
    try {
      const { data } = await api.get(`/jobs?position_like=${text}`);
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <JobsContext.Provider value={{ jobsList, setJobList, filteredJobs }}>
      {children}
    </JobsContext.Provider>
  );
};
