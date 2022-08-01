import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Link from "../components/Link";
import List from "../components/List";

const ProjectDetails = ({ userName }) => {
  const [loading, setLoading] = useState(true);
  const [projectDetail, setProjectDetail] = useState({});
  const { name } = useParams();
  useEffect(() => {
    try {
      const fetchData = async () => {
        const data = await fetch(
          `https://api.github.com/repos/${userName}/${name}`
        );
        const result = await data.json();
        console.log(result);
        if (result) {
          setProjectDetail(result);
          setLoading(false);
        }
      };
      if (userName && name) {
        fetchData();
      }
    } catch (error) {
      console.log(error);
    }
  }, [userName && name]);
  return (
    <div className="Project-container">
      <h2>Project : {projectDetail.name}</h2>
      {loading ? <span>Loading...</span> : <div></div>}
    </div>
  );
};

export default ProjectDetails;

