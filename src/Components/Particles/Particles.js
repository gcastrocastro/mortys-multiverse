import Particles from "react-tsparticles";
import ParticlesConfig from "./Particles-config";

const ParticleBackground = () => {
    return(
        <Particles id='tsparticles' options={ParticlesConfig}/>
    )
}

export default ParticleBackground;