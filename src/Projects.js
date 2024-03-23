import ProjectCard from "./ProjectCard"
import alBarariLogo from "./assets/projects/AL_BARARI.jpg";
import arabianRanchesLogo from "./assets/projects/ARABIAN_RANCHES.jpeg";
import districtOneLogo from "./assets/projects/DISTRICT_ONE.jpg";
import dubaiHillsLogo from "./assets/projects/DUBAI_HILLS.jpg";
import dubaiMaritimeCityLogo from "./assets/projects/Dubai-Maritime-City.jpg";
import jafzaLogo from "./assets/projects/JAFZA.jpg";
import JGELogo from "./assets/projects/JGE.jpg";
import jumerirahVillageTriangleLogo from "./assets/projects/JUMEIRAH_VILLAGE_TRIANGLE.jpg";
import meadows5Logo from "./assets/projects/MEADOWS_5.jpg";
import palmLogo from "./assets/projects/PALM.jpg";
import { Grid, Item } from "@mui/material";


function Projects() {
 
  return (
    <div style={{position:"relative"}}>
      <div style={{height:"20px"}}></div>
      <Grid container justifyContent="center" alignItems="center" rowSpacing={2} columnSpacing={2} top={50}>
      <Grid item >
        <ProjectCard text = "Jumeirah Golf Estates" logo = {JGELogo}></ProjectCard>
      </Grid>
      <Grid item >
        <ProjectCard text = "Palm Jumeirah" logo = {palmLogo}></ProjectCard>
      </Grid>
      <Grid item >
        <ProjectCard text = "Dubai Hills Estates" logo = {dubaiHillsLogo}></ProjectCard>
      </Grid>
      <Grid item >
        <ProjectCard text = "Meadows 5" logo = {meadows5Logo}></ProjectCard>
      </Grid>
      <Grid item >
        <ProjectCard text = "MBR District 1" logo = {districtOneLogo}></ProjectCard>
      </Grid>
      <Grid item >
        <ProjectCard text = "Al Barari Estate" logo = {alBarariLogo}></ProjectCard>
      </Grid>
      <Grid item >
        <ProjectCard text = "Arabian Ranches" logo = {arabianRanchesLogo}></ProjectCard>
      </Grid>
      <Grid item >
        <ProjectCard text = "Maritime City" logo = {dubaiMaritimeCityLogo}></ProjectCard>
      </Grid>
      <Grid item >
        <ProjectCard text = "Jumeirah Village Triangle" logo = {jumerirahVillageTriangleLogo}></ProjectCard>
      </Grid>
      <Grid item >
        <ProjectCard text = "Jafza" logo = {jafzaLogo}></ProjectCard>
      </Grid>
    </Grid>
    <div style={{height:"20px"}}></div>
    </div>

    
    
  );
}

export default Projects;
