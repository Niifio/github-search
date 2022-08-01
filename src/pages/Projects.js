import React, { useState, useEffect } from "react";
import List from "../components/List";
import Link from "../components/Link";
import { Link as RouterLink } from "react-router-dom";

const Projects = ({ userName }) => {
  const [projects, setProjects] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    try {
      const fetchData = async () => {
        const data = await fetch(
          `https://api.github.com/users/${userName}/repos`
        );
        const result = await data.json();
        if (result) {
          setProjects(result);
          setLoading(false);
        }
      };
      fetchData();
    } catch (error) {
      console.log(error);
    }
  }, [userName]);
  return (
    <div className="Project-container">
      <h2>Projects</h2>
      {loading ? (
        <span>Loading ...</span>
      ) : (
        <div>
          {/* <List
            items={projects.map((project) => ({
              field: project.name,
              value: <Link url={project.html_url} title={project.html_url} />,
            }))}
          /> */}
          <div>
            <List
              items={projects.map((project) => ({
                field: project.name,
                value: (
                  <RouterLink to={`/projects/${project.name}`}>
                    Open project
                  </RouterLink>
                ),
              }))}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
