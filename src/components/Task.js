import React from 'react'
import { motion, AnimateSharedLayout, useMotionValue } from "framer-motion";
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'


function Task({ tasks, index, completeTask, removeTask, count, setCount}) {
    const handleClick = () => {
      completeTask(index);
      setCount(count+1);
    }
    
    return (
        <motion.ul
          drag="y"
          dragOriginY={useMotionValue(0)}
          dragConstraints={{top: 0, bottom: 0 }}
          dragElastic={1}
          whileHover={{ scale: 1.03}}
          whileTap={{ scale: 1.12}}
          layout
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 3 }}
          className="tasks"
          style={{ textDecoration: tasks.isCompleted ? "line-through": ""}}>
            {tasks.text} 
            <motion.div
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 3 }}>
              <motion.button 
              id="completeButton"
              whileHover={{
                scale: 1.2,
                transition: { duration: 1 },
              }}
              whileTap={{ scale: 0.9 }}
              onClick={handleClick} 
              disabled={tasks.isCompleted}>Complete</motion.button>
              <motion.button 
                id="deleteButton"
                whileHover={{
                  scale: 1.2,
                  transition: { duration: 1 },
                }}
                whileTap={{ scale: 0.9 }}
                onClick={() => removeTask(index)}>Delete</motion.button>
            </motion.div>
          </motion.ul>
    )
  }

 export default Task;