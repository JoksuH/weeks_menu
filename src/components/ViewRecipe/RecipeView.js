import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import RecipeViewTopInfo from './RecipeViewTopInfo'
import RecipeViewIngredients from './RecipeViewIngredients'
import RecipeViewInstructions from './RecipeViewInstructions'
import { motion } from 'framer-motion'

const variants = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0, transition: {duration: 0.2, type: 'tween', ease: "easeOut"} }
}


const useStyles = makeStyles((theme) => ({
  root: {
    width: '30%',
    margin: 'auto',
    marginTop: '5vh',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  button: {
    margin: '30px',
  },
}))

const RecipeView = ({ data, onExitClick }) => {
  const classes = useStyles()

  return (
    <>
      {data && (
        <Box style={{display: 'flex', flexDirection: 'column'}} initial="hidden" animate="visible" variants={variants} component={motion.div}>
          <RecipeViewTopInfo Title={data.Title} Description={data.Description} ImageUrl={data.ImageUrl} />
          <RecipeViewIngredients Ingredients={data.IngredientList} />
          <RecipeViewInstructions Instructions={data.Instructions} />
          <Button className={classes.button} variant="contained" onClick={onExitClick}>Go Back</Button>

        </Box>
      )}
    </>
  )
}

export default RecipeView
