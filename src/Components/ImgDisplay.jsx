import React, { useEffect, useState } from "react";
import { Image } from "@chakra-ui/react";
import weatherCon from "../helpers/WeatherCon";
import { motion } from "framer-motion";
export const ImgDisplay = ({ clima }) => {

    useEffect(()=>{

          if (clima) {
                for (let i = 0; i < weatherCon.length; i++) {
                      if (clima.weather[0].main == weatherCon[i].desc) {
                            const newMuestro=weatherCon[i].value;
                            
                            setMuestro(newMuestro)
                          }
                        }
                      }
                },[clima])
    const [muestro, setMuestro] = useState(
                    "https://cdn.discordapp.com/attachments/1146933013582712942/1155993697985511484/DPS.gif"
                  );
  {
    return (
      <motion.div initial={{opacity:0}} transition={{duration:3}}animate={{opacity:1}} exit={{opacity:5}} >
        <Image
          w="30vw"
          minW="250px"
          maxW="500px"
          maxH="500px"
          src={`${muestro}`}
          borderRadius="lg"
        />
      </motion.div>
    );
  }
};
