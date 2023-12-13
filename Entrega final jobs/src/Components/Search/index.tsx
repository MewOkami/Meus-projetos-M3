import { JobsContext } from "../../providers/jobsContext";
import { useContext, useState } from "react";
import { ContainerJobs } from "./style";
/* import showMore from "../../assets/+.svg"; */
import { ContainerForSearch } from "./ContainerSearch";
import { NotFound } from "./ContainerNotFound";
import { StyleSubTitle, StyleTexts } from "../../styles/Typography";
import { Modal } from "../Modal";

interface IJob {
  id: number;
  position: string;
  salary: number;
  description: string;
}

export const Search = () => {
  const { filteredJobs } = useContext(JobsContext);
  const [array, setArray] = useState<IJob[]>([]);
  const [result, setResult] = useState(false);
  const [text, setText] = useState("");

  const [openModal, setOpenModal] = useState(false);
  const [jobsId, setJobsId] = useState<Number | null>(null);
  const [jobsPosition, setJobsPosition] = useState<String>("");

  const textSearch = () => {
    setResult(true);
    const filtered = async () => {
      const newList = await filteredJobs(text);
      setArray(newList as unknown as IJob[]);
    };
    filtered();
  };

  return (
    <>
      <ContainerForSearch
        text={text}
        setText={setText}
        setResult={setResult}
        textSearch={textSearch}
        result={result}
        array={array}
      />
      <ContainerJobs>
        {array.length > 0 ? (
          array.map((job: IJob) => {
            return (
              <li key={job.id}>
                <div>
                  <div className="divHeaderList">
                    <div className="job__position">
                      <div className="job__position--header">
                        <StyleSubTitle>{job.position}</StyleSubTitle>
                        <button
                          className="buttonApply"
                          onClick={() => {
                            setJobsId(job.id);
                            setJobsPosition(job.position);
                            setOpenModal(true);
                          }}
                        >
                          Candidatar-se
                        </button>
                      </div>
                      <details>
                        <summary />
                        <StyleTexts className="jobsDescripton">
                          {job.description}
                        </StyleTexts>
                      </details>
                    </div>
                  </div>
                </div>
              </li>
            );
          })
        ) : (
          <NotFound />
        )}
      </ContainerJobs>
      <Modal
        isOpen={openModal}
        setOpenModal={setOpenModal}
        jobsPosition={jobsPosition ? jobsPosition.valueOf() : ""}
        jobsId={jobsId ? jobsId.valueOf() : null}
      />
    </>
  );
};
