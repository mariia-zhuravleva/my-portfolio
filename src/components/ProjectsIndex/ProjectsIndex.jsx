import React from 'react'
import { NavLink } from 'react-router-dom'

import styles from './ProjectsIndex.module.css'

const ProjectsIndex = () => {
  const projectsText = `
    Welcome to the showcase of my projects, where I bring to life my passion for crafting meaningful and innovative solutions.\n
    Each project reflects my journey as a software engineer and full—stack web developer.\n
    As I continue to learn and expand my skill set, I'm excited to take on new projects that contribute to positive impacts in the world.
  `;


  const projectList = [
    { name: 'the journal', path: '/journal', description: '— a dedicated platform curating meaningful content across diverse topics, providing inspiration and education' },
    { name: 'wandr', path: '/wandr', description: '— a dynamic web app connecting travelers to share unique journeys and travel experiences' },
    { name: 'powder peak', path: '/powder-peak', description: '— the ultimate winter sports inspiration app, featuring informative articles about ski and snowboard resorts' },
    { name: 'Artful Recollections', path: '/artful-recollections', description: '— an engaging card-matching game' },
    { name: 'Tic Tac Toe', path: '/tic-tac-toe', description: '— a modern twist to the classic Tic-Tac-Toe game' },
  ]

  return ( 
    <div className={styles.projectsContainer}>
      <div className={styles.leftColumn}>
        <p className={styles.projectsWord}>projects</p>
        <p className={styles.projectsText}>{projectsText}</p>
      </div>
      <div className={styles.rightColumn}>
        <ul className={styles.projectList}>
          {projectList.map((project, index) => (
            <li key={index}>
              <div>
                <NavLink to={project.path} className={styles.projectName}>{project.name}</NavLink>
                <p className={styles.projectDescription}>{project.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default ProjectsIndex