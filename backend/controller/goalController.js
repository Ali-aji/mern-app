const getGoals = (req, res) => {
    res.status(200).json({message: "get goals"})
}

const setGoal = (req, res) => {
    if(!req.body.text){
        res.status(400).json({message: "missing the goal text"})
    }
    
    res.status(200).json({message: "set goal"})
}

const updateGoal = (req, res) => {
    res.status(200).json({message: `update goal with id ${req.params.id}`})
}

const deleteGoal = (req, res) => {
    res.status(200).json({message: `delete goal with id ${req.params.id}`})
}

module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal,
}