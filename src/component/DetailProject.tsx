import { motion } from "framer-motion"

export default function DetailProject(){

    return(
        <motion.div className=" bg-gray-200 w-full p-6">

        <div className="flex flex-col w-1/2  bg-white  m-auto">
            <img src="test.jpg" alt="" />
            <h2>Titre</h2>
            <div className="flex p-4">
                <img src="codou.png" alt="Codou Aïcha Faye" className="w-40 h-40 object-cover"/>
                <img src="bam.jpg" alt="" className="w-40 h-40 object-contain" />
            </div>
            <p className="p-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur laudantium quasi, ea harum amet molestias enim officia iure voluptatem eum error atque similique officiis nisi fugiat et rem commodi a aliquam repellat praesentium eius eveniet. Soluta est adipisci eum sequi quisquam beatae porro quasi nostrum? Iure ipsum quas ad possimus?</p>
            <button className="bg-amber-400 p-2">Retour</button>
        </div>
        </motion.div>
    )
}