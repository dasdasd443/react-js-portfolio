import {motion} from 'framer-motion';
import { text } from '../../constants';

export default function TypingText({tx, delay = 0} : {tx: string, delay?: number}) {
    return (
        <motion.h1 
            className={`text-[${text.body}] w-[100%] flex flex-wrap`}
        >
            {tx.split("").map((char, idx) => 
                <motion.span 
                    className='relative' 
                    transition={{ delay:  + delay + idx * 0.003 }} 
                    key={idx} 
                    initial={{opacity: 0, y: 5}} 
                    animate={{opacity: 1, y: 0}}
                >{char === " " ? <span>&nbsp;</span> : char}
                </motion.span>)}
        </motion.h1>
    )
}