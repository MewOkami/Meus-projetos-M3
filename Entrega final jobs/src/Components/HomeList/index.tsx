import { useContext, useState } from "react";
import { JobsContext } from "../../providers/jobsContext";
import { StyleSubTitle, StyleTexts } from "../../styles/Typography";
import { ContainerJobsHome } from "./style";
import { Modal } from "../Modal";

export const HomeList = () => {
  const { jobsList } = useContext(JobsContext);

  const [openModal, setOpenModal] = useState(false);
  const [jobsId, setJobsId] = useState<Number | null>(null);
  const [jobsPosition, setJobsPosition] = useState<String | string>("");

  return (
    <>
      <ContainerJobsHome>
        {jobsList?.map((job) => {
          return (
            <li key={job.id}>
              <div className="divHeaderListHome">
                <div className="job__positionHome">
                  <div className="job__position--header">
                    <StyleSubTitle>{job.position}</StyleSubTitle>
                    <button
                      className="buttonApplyHome"
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
            </li>
          );
        })}
      </ContainerJobsHome>
      <Modal
        isOpen={openModal}
        setOpenModal={setOpenModal}
        jobsPosition={jobsPosition ? jobsPosition.valueOf() : ""}
        jobsId={jobsId ? jobsId.valueOf() : null}
      />
    </>
  );
};
